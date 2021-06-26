const { response } = require("express");

const User = require("../models/User");

const getAllUsers = async (req, res = response) => {
  const users = await User.find({ role: "Usuario" });

  res.status(201).json({ ok: true, users });
};

const patchUserInfo = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  if (id !== uid) {
    return res.status(401).json({
      ok: false,
      msg: "No tienes los privilegios para buscar estos registros",
    });
  }

  if (Object.keys(req.body).length == 0) {
    return res
      .status(400)
      .json({ ok: false, msg: "Es necesario algun dato para actualizar" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario no encontrado con el ID dado",
      });
    }

    res.status(201).json({ ok: true, updatedUser });
  } catch (error) {
    console.log(error);
    if (error.codeName == "DuplicateKey") {
      return res.status(400).json({
        ok: false,
        msg: "El nombre de usuario ya esta siendo ocupado",
      });
    }
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const deleteUser = async (req, res = response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Registro de Usuario no encontrado con ese ID",
      });
    }

    await User.findByIdAndDelete(id);

    res.status(201).json({ ok: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

module.exports = { getAllUsers, patchUserInfo, deleteUser };
