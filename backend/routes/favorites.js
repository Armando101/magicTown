/*
    Rutas de Favorites
    host + api/favorites
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
} = require("../controllers/favorites");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.get(
  "/user/:id",
  [validateJwt, check("id", "El usuario es obligatorio"), validateFields],
  getUserFavorites
);

router.post(
  "/user/:id",
  [validateJwt, check("id", "El usuario es obligatorio"), validateFields],
  addUserFavorite
);

router.delete(
  "/:id",
  [
    validateJwt,
    check("id", "El registro a eliminar es obligatorio"),
    validateFields,
  ],
  deleteUserFavorite
);

module.exports = router;
