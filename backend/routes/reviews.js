/*
    Rutas de Reviews
    host + api/reviews
*/
const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAllReviews,
  getLatestReviews,
  getTownReviews,
  getUserReviews,
  addReview,
  deleteReview,
} = require("../controllers/reviews");

const { validateFields } = require("../middlewares/field-validator");
const { validateJwt } = require("../middlewares/jwt-validator");

const router = Router();

router.get("/", [validateJwt], getAllReviews);

router.get("/latest", getLatestReviews);

router.get(
  "/town/:id",
  [check("id", "El pueblo es obligatorio").not().isEmpty(), validateFields],
  getTownReviews
);

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
    check("town", "El pueblo es obligatorio").not().isEmpty(),
    check("rate", "La calificación es obligatoria").not().isEmpty(),
    check("description", "La descripción es obligatoria").not().isEmpty(),
    validateFields,
  ],
  addReview
);

router.delete(
  "/:id",
  [
    validateJwt,
    check("id", "El identificador es obligatorio").not().isEmpty(),
    validateFields,
  ],
  deleteReview
);

module.exports = router;
