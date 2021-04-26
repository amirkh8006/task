async function checkIp(req, res, next) {
    if (req.ip === "192.168.1.1") {
        next() 
    } else {
        return res.status(403).json({
            "error": "unauthorized"
        }) 
    }
}

module.exports = {
    checkIp
} 