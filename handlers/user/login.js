const validateUser = require("../../validators/user");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
    const {error} = validateUser(req.body);

    if(error){
        return res.json({
            success: false,
            error: error.details[0].message
        })
    }

    const user = await User.findOne({
        login: req.body.login
    })

    if(!user){
        return res.json({
            success: false,
            error: "No user"
        })
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) {
        return res.json({
            success: false,
            error: "Wrong password"
        });
    }

    const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.TOKEN_SECRET
    );
    return res.json({
        success: true,
        token //token: token
    })
}