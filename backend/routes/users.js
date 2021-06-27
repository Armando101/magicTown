/*
    Rutas de Usuarios
    host + api/users
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAllUsers,
  patchUserInfo,
  deleteUser,
} = require("../controllers/users");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.get("/", [validateJwt], getAllUsers);

router.patch(
  "/:id",
  [
    validateJwt,
    check("id", "El identificador es obligatorio").not().isEmpty(),
    validateFields,
  ],
  patchUserInfo
);

router.delete(
  "/:id",
  [
    validateJwt,
    check("id", "El identificador es obligatorio").not().isEmpty(),
    validateFields,
  ],
  deleteUser
);

module.exports = router;
