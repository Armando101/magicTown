/*
    Rutas de Reviews
    host + api/reviews
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getLatestReviews,
  getUserReviews,
  addReview,
} = require("../controllers/reviews");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.get("/latest", getLatestReviews);

router.get(
  "/user/:id",
  [
    validateJwt,
    check("id", "El usuario es obligatorio").not().isEmpty(),
    validateFields,
  ],
  getUserReviews
);

router.post(
  "/user/:id",
  [
    validateJwt,
    check("id", "El usuario es obligatorio").not().isEmpty(),
    check("town", "El pueblo es obligatorio").not().isEmpty(),
    check("rate", "La calificación es obligatoria").not().isEmpty(),
    check("description", "La descripción es obligatoria").not().isEmpty(),
    validateFields,
  ],
  addReview
);

module.exports = router;
