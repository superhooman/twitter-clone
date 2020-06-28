const mongoose = require("mongoose")
const validateTwit = require("../../validators/twit");

const Twit = require("../../models/twit")

module.exports = async (req, res) => {
    const {error} = validateTwit(req.body);

    if(error){
        return res.json({
            success: false,
            error: error.details[0].message
        })
    }

    const twit = new Twit({
        body: req.body.body,
        user: mongoose.Types.ObjectId(req.user)
    })

    const saved = await twit.save();

    return res.json({
        success: true,
        twit: saved
    })
}