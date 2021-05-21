/*
    Rutas de Usuarios
    host + api/users
*/
const { Router } = require("express");
const { check } = require("express-validator");

const { patchUserInfo } = require("../controllers/users");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.patch("/:id", [validateJwt], patchUserInfo);

module.exports = router;
