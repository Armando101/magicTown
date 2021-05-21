const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJwt = (req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Usuario no autenticado",
    });
  }

  try {
    const { uid, username } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.username = username;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token invalido",
    });
  }

  next();
};

module.exports = { validateJwt };
