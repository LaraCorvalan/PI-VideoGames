const { Router } = require("express");
const { Videogame, Genre } = require("../db");
const { getAllGames } = require("../controllers/cVideogames");

const router = Router();

router.get("/videogames", async (req, res) => {
  // const {id, name, description, platform} = req.body;
  // if(!id || !name || !description || !platform){
  //     return res.status(404).send('Falta enviar datos obligatorios')
  // }
  // try {
  //     return res.json(await Videogame.create(req.body))
  // } catch (error) {
  //     return res.status(404).send('Error en alguno de los datos provistos')
  // }

  let allGames = await getAllGames();

  const { name } = req.query;
  if (name) {
    filterGames = allGames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterGames.length > 0) {
      return res.status(200).send(filterGames);
    } else {
      return res.status(404).send("No games found");
    }
  } else {
    return res.status(200).send(allGames);
  }
});

router.post("/videogames", async function (req, res) {
  //recibir datos por body
  // crear vidoejuego
  // encontrar generos relacionados
  // vincular con genre (con add)
  try {
    const { name, description, releaseDate, rating, platform, genres } = req.body;

    let newGame = await Videogame.create({
      name,
      description,
      releaseDate,
      rating,
      platform,
    });

    let genreDB = await Genre.findAll({
      where: { name: genres },
    });

    newGame.addGenre(genreDB);
    res.status(200).json(newGame);

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;