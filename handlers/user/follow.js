const User = require("../../models/user");
const mongoose = require("mongoose");

/* User которого мы хотим фолловить req.query.id */
/* User который фолловит req.user <= token */

module.exports = async (req, res) => {
    if(!req.query.id){
        return res.json({
            success: false,
            error: "no id"
        })
    }

    const user = await User.findById(req.query.id);

    if(!user){
        return res.json({
            success: false,
            error: "no such user"
        })
    }

    const saved = await User.findByIdAndUpdate(req.user, {
        $push: {
            following: mongoose.Types.ObjectId(req.query.id)
        }
    }, {
        new: true
    })

    return res.json({
        success: true,
        user: saved
    })
}