const create = require("../handlers/twit/create");
const verify = require("../utils/verify");
const router = require("express").Router();

router.post("/create", verify, create);

module.exports = router;