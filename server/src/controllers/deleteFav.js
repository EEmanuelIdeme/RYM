const Favorite = require("../DB_connection").Favorite;

async function deleteFav ( req, res) {
    const id = req.params.id;

    try{
        await Favorite.destroy({where: {id}})
        const favorites = await findAll();
        return res.json (favorites)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = deleteFav;