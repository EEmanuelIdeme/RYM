const Favorite = require("../DB_connection").Favorite;

async function postFav (req, res){
    const {name, origin, status, image, species, gender} = req.body;

    if(!name || !origin || !status || !image || !species || !gender){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{
        const [favorite, created] = await Favorite.findOrCreate({
            where: {name, origin, status, image, species, gender},
            defaults: {name, origin, status, image, species, gender}
        });

        const favorites = await Favorite.findAll()
        return res.json(favorites)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postFav;