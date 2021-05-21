const { response } = require("express");

const User = require("../models/User");

const patchUserInfo = async (req, res = response) => {
  const { id } = req.params;

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

    res.status(201).json(updatedUser);
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

module.exports = { patchUserInfo };
