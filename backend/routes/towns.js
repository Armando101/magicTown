/*
    Rutas de Peticiones a Pueblos
    host + api/towns
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAllTowns,
  getTownById,
  getTownByKeyword,
  getTopRatedTowns,
  addTown,
  updateTown,
} = require("../controllers/towns");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.get("/", [validateJwt], getAllTowns);

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

router.patch(
  "/town/:id",
  [
    validateJwt,
    check("id", "El identificador es obligatorio").not().isEmpty(),
    validateFields,
  ],
  updateTown
);

module.exports = router;
