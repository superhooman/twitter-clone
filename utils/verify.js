const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header("Authorization") && req.header("Authorization").split(" ")[1];
    if (!token)
        return res.json({
            success: false,
            error: "No token"
        });
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        if (verified) {
            req.user = verified._id;
            return next();
        }
        return res.json({
            success: false,
            error: "Bad token"
        });
    }catch(err){
        return res.json({
            success: false,
            error: "Bad token"
        });
    }
};