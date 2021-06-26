const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El nombre de usuario ya existe",
      });
    }

    user = new User(req.body);

    //Password Encryption
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generate JWT
    const token = await generateJWT(user.id, user.username);

    res.status(201).json({
      ok: true,
      uid: user.id,
      username: user.username,
      avatar: user.avatar,
      description: user.description,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const userLogin = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "No existe usuario con ese nombre",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña Incorrecta",
      });
    }

    // Generate JWT
    const token = await generateJWT(user.id, user.username);

    res.status(201).json({
      ok: true,
      uid: user.id,
      username: user.username,
      avatar: user.avatar,
      description: user.description,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const renewToken = async (req, res = response) => {
  const { uid, username } = req;

  try {
    const user = await User.findOne({ username });

    const token = await generateJWT(uid, username);

    res.json({
      ok: true,
      token,
      uid: user.id,
      username: user.username,
      avatar: user.avatar,
      description: user.description,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: false, msg: "No es posible renovar el token" });
  }
};

module.exports = {
  createUser,
  userLogin,
  renewToken,
};
