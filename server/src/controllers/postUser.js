const User = require("../DB_connection").User;

async function postUser (req, res) {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({message: "Faltan datos"})
    }

    try {
        const [user, created] = await user.findOrCreate({where: {email}, defaults:{password}})
        if(created){
            return res.json(user)
        }else{
            return res.status(400).json ({message: "El usuario ya existe"})
        }
    }catch (error){
        return res.status(500).json ({message: error.message})
    }
};

module.exports = postUser;