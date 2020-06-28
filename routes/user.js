const login = require("../handlers/user/login");
const register = require("../handlers/user/register");
const follow = require("../handlers/user/follow");
const feed = require("../handlers/user/feed");
const get = require("../handlers/user/get");
const router = require("express").Router();
const verify = require("../utils/verify");

router.post("/login", login);

router.post("/register", register);

router.get("/follow", verify, follow);

router.get("/feed", verify, feed);

router.get("/profile/:login", get);

module.exports = router;