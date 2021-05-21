/*
    Rutas de Auth de Usuario
    host + api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { createUser, userLogin, renewToken } = require("../controllers/auth");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.post(
  "/register",
  [
    check("username", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  createUser
);

router.post(
  "/login",
  [
    check("username", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  userLogin
);

router.get("/renew", validateJwt, renewToken);

module.exports = router;
