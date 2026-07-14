


exports.auth = (req,res,next) => {
    try{

    } catch (err) {
        res.status(401).json({ error: 'Token is not valid' });
    }
}