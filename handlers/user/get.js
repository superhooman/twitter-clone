const User = require("../../models/user");
const Twit = require("../../models/twit");

/* /user/:id */

/* /user/hello@uenify.com */

module.exports = async (req, res) => {
    if(!req.params.login){
        return res.json({
            success: false
        })
    }
    console.log(req.params.login)
    const user = await User.findOne({login: req.params.login}, {
        password: false
    });
    const twit = await Twit.find({user: user._id});
    return res.json({
        success: Boolean(user),
        user,
        twit
    })
}