const { Router } = require('express');
const {Videogame, Genre} = require('../db')
const axios = require('axios');

const { API_KEY } = process.env;

const router = Router();

router.get('/videogame/:id', async (req, res) => {
    const {id} = req.params
    let findId = []
    let apiReq = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    try {
        if(id.length <= 6){
            findId.push(apiReq.data)
            // .then(response => {response.data.forEach(e => {
            //     findId.push( {
            //         image: e.background_image,
            //         name: e.name,
            //         description: e.description,
            //         releaseDate: e.released,
            //         rating: e.ratings,
            //         platform: e.platform.map(e => e.platform.name), 
            //     })
            // })})
        } else if(id.length > 6){
            try {
                let juegosDB = await Videogame.findAll({include: Genre})
                findId=juegosDB.filter(e => e.id === id)
            } catch (error) {
                console.error('error obteniendo games from db ->> ', error)
            }  
        }
        res.send(findId) 
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;