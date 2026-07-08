


exports.register = async (req, res) => {
    try{
        console.log(req.body);
        // let {email, password, f_name} = req.body;
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}