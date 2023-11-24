const express = require('express');
const authRoute = require('./auth.route');

const router = express.Router();

router.use('/auth', authRoute);

router.get("/", function (req, res, next) {
  res.send({ msg: "server /v1 path working fine" });
});

module.exports = router;