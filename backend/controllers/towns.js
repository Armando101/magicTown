const { response } = require("express");

const Town = require("../models/Town");

const getTowns = async (req, res = response) => {
  const towns = await Town.find();

  res.status(201).json(towns);
};

const getTownById = async (req, res = response) => {
  const { id } = req.params;

  try {
    const town = await Town.findOne({ id });

    if (!town) {
      return res.status(400).json({
        ok: false,
        msg: "No existe pueblo con ese ID",
      });
    }

    res.status(201).json(town);
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
        if (err || data.length == 0) {
          return res.status(400).json({
            msg: `No encontramos algun pueblo con esta palabra: '${keyword}'`,
          });
        }
        res.status(201).json(towns);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Please talk to the System Manager" });
  }

  res
    .status(201)
    .json({ ok: true, msg: `Towns with ${req.params.keyword} as keyword` });
};

const getTopRatedTowns = async (req, res = response) => {
  const topRated = await Town.find().sort({ rate: -1 }).limit(3);

  res.status(201).json(topRated);
};

const addTown = async (req, res = response) => {
  const { name } = req.body;

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
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Please talk to the System Manager" });
  }
};

module.exports = {
  getTowns,
  getTownById,
  getTownByKeyword,
  getTopRatedTowns,
  addTown,
};
