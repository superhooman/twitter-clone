const validateUser = require("../../validators/user");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
    const {error} = validateUser(req.body);

    if(error){
        return res.json({
            success: false,
            error: error.details[0].message
        })
    }

    const exists = await User.findOne({
        login: req.body.login
    })

    if(exists){
        return res.json({
            success: false,
            error: "user exists"
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        login: req.body.login,
        password: hashedPassword
    })

    try{
        const saved = await user.save();
        return res.json({
            success: true,
            user: saved
        })
    }catch(err){
        console.log(err)
        return res.json({
            success: false,
            error: "DB error"
        })
    }
}