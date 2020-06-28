const User = require("../../models/user")
const Twit = require("../../models/twit")

module.exports = async (req, res) => {
    const user = await User.findById(req.user);
    const twits = await Twit.find({
        user: {
            $in: user.following
        }
    })
    return res.json({
        success: true,
        twits
    })
}