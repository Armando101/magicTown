const { response } = require("express");

const TownReview = require("../models/TownReview");
const User = require("../models/User");
const Town = require("../models/Town");

const getAllReviews = async (req, res = response) => {
  const reviews = await TownReview.find().populate([
    { path: "user", select: ["username"] },
    { path: "town", select: ["name"] },
  ]);

  res.status(201).json({ ok: true, reviews });
};

const getLatestReviews = async (req, res = response) => {
  try {
    const latestReviews = await TownReview.find()
      .sort({ creation_date: -1 })
      .limit(3)
      .populate([
        { path: "user", select: ["username", "avatar"] },
        { path: "town", select: ["name", "state", "rate", "description"] },
      ]);

    res.status(201).json({ ok: true, latestReviews });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const getTownReviews = async (req, res = response) => {
  const { id } = req.params;

  try {
    const townReviews = await TownReview.find({ town: id }).populate("user");

    res.status(201).json({ ok: true, townReviews });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const getUserReviews = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    if (id !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes los privilegios para agregar el registro",
      });
    }

    const userReviews = await TownReview.find({ user: id }).populate({
      path: "town",
      select: ["name"],
    });
    res.status(201).json({ ok: true, userReviews });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const addReview = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    if (id !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes los privilegios para agregar el registro",
      });
    }

    review = new TownReview({
      ...req.body,
      user: id,
      creation_date: new Date().toLocaleString(),
    });
    await review.save();

    await User.findByIdAndUpdate({ _id: id }, { $inc: { reviewsCounter: 1 } });
    await Town.findByIdAndUpdate(
      { _id: review.town },
      {
        $inc: {
          reviewsCounter: 1,
          totalReviewsCounter: 1,
          rateAccumulator: req.body.rate,
        },
      }
    );

    res.status(201).json({ ok: true, review });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const deleteReview = async (req, res = response) => {
  const { id } = req.params;

  try {
    const review = await TownReview.findById(id);

    if (!review) {
      return res.status(404).json({
        ok: false,
        msg: "Registro de Reseña no encontrado con ese ID",
      });
    }

    await TownReview.findByIdAndDelete(id);

    res.status(201).json({ ok: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

module.exports = {
  getAllReviews,
  getLatestReviews,
  getTownReviews,
  getUserReviews,
  addReview,
  deleteReview,
};
