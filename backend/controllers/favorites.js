const { response } = require("express");

const UserFavorite = require("../models/UserFavorites");
const User = require("../models/User");

const getUserFavorites = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    if (id !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes los privilegios para buscar estos registros",
      });
    }

    const userFavorites = await UserFavorite.find({ user: id }).populate({
      path: "town",
      select: ["name", "state", "rate", "coverURL"],
    });
    res.status(201).json({ ok: true, userFavorites });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const addUserFavorite = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    if (id !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes los privilegios para agregar el registro",
      });
    }

    favorite = new UserFavorite({ user: id, town: req.body.town });
    await favorite.save();

    await User.findByIdAndUpdate(
      { _id: id },
      { $inc: { favoritesCounter: 1 } }
    );

    res.status(201).json({ ok: true, favorite });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const deleteUserFavorite = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    const favorite = await UserFavorite.findById(id);

    if (!favorite) {
      return res.status(404).json({
        ok: false,
        msg: "Registro de Favorito no encontrado con ese ID",
      });
    }

    await User.findByIdAndUpdate(
      { _id: uid },
      { $inc: { favoritesCounter: -1 } },
      { new: true }
    );

    await UserFavorite.findByIdAndDelete(id);

    res.status(201).json({ ok: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};
module.exports = { getUserFavorites, addUserFavorite, deleteUserFavorite };
