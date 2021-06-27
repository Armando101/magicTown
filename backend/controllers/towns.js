const { response } = require("express");

const Town = require("../models/Town");

const getAllTowns = async (req, res = response) => {
  const towns = await Town.find();

  res.status(201).json({ ok: true, towns });
};

const getTownById = async (req, res = response) => {
  const { id } = req.params;

  try {
    const town = await Town.findOne({ _id: id });

    if (!town) {
      return res.status(404).json({
        ok: false,
        msg: "No existe pueblo con ese ID",
      });
    }

    res.status(201).json({ ok: true, town });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const getTownByKeyword = async (req, res = response) => {
  const { keyword } = req.params;

  try {
    await Town.find(
      {
        $text: {
          $search: keyword,
        },
      },
      (err, towns) => {
        if (err || towns.length == 0) {
          return res.status(400).json({
            ok: false,
            msg: `No encontramos algun pueblo con esta palabra: '${keyword}'`,
          });
        }
        res.status(201).json({ ok: true, towns });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Please talk to the System Manager" });
  }
};

const getTopRatedTowns = async (req, res = response) => {
  try {
    const topRated = await Town.find().sort({ rate: -1 }).limit(3);

    res.status(201).json({ ok: true, topRated });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const addTown = async (req, res = response) => {
  const { name } = req.body;
  console.log("uwu");
  try {
    let town = await Town.findOne({ name });

    if (town) {
      return res.status(400).json({
        ok: false,
        msg: "El pueblo ya existe en el registro",
      });
    }

    town = new Town(req.body);
    await town.save();

    res.status(201).json({
      ok: true,
      town: {
        id: town.id,
        name: town.name,
        rate: town.rate,
        incorporation_year: town.incorporation_year,
        description: town.description,
        state: town.state,
        weather: town.weather,
        biome: town.biome,
        attractions: town.attractions,
        festivities: town.festivities,
        dishes: town.dishes,
        ethnics: town.ethnics,
        photos: town.photos,
        mapURL: town.mapURL,
        coverURL: town.coverURL,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

const updateTown = async (req, res = response) => {
  const { id } = req.params;
  try {
    if (req.body.rate) {
      const { rateAccumulator, totalReviewsCounter } = await Town.findById(
        { _id: id },
        { rateAccumulator: 1, totalReviewsCounter: 1 }
      );
      const averageRate = Math.trunc(rateAccumulator / totalReviewsCounter);

      const updatedTown = await Town.findByIdAndUpdate(
        id,
        { rate: averageRate },
        {
          new: true,
        }
      );
      if (!updatedTown) {
        return res.status(404).json({
          ok: false,
          msg: "Pueblo no encontrado con el ID dado",
        });
      }
      res.status(201).json({ ok: true, updatedTown });
    }
    const updatedTown = await Town.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTown) {
      return res.status(404).json({
        ok: false,
        msg: "Pueblo no encontrado con el ID dado",
      });
    }

    res.status(201).json({ ok: true, updatedTown });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

module.exports = {
  getAllTowns,
  getTownById,
  getTownByKeyword,
  getTopRatedTowns,
  addTown,
  updateTown,
};
