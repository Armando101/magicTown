/*
    Rutas de Peticiones a Pueblos
    host + api/towns
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getTowns,
  getTownById,
  getTownByKeyword,
  getTopRatedTowns,
  addTown,
} = require("../controllers/towns");

const { validateFields } = require("../middlewares/field-validator");

const router = Router();

router.get("/", getTowns);

router.get(
  "/town/:id",
  [
    check("id", "El identificador es obligatorio").not().isEmpty(),
    validateFields,
  ],
  getTownById
);

router.get(
  "/query/:keyword",
  [
    check("keyword", "La palabra clave es obligatoria").not().isEmpty(),
    validateFields,
  ],
  getTownByKeyword
);

router.get("/toprated/", getTopRatedTowns);

router.post("/", addTown);

module.exports = router;
