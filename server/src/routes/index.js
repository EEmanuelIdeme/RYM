const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser")
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav")

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", login);
router.post("/user", postUser)
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;