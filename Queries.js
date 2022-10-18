const { async } = require('q');
const { Movie, Person, Actormovie } = require('./src/db');

//Consulta de Movie con lista completa de Personas.
const getMovieById = async (id)=>{
    const movies = await Movie.findAll({
        where : {
            id
        },
        include : {
            model: Actormovie,
            include : Person
        }
    });
    return movies;
};

const getPersonById = async (id)=>{
    const people = await Person.findAll({
        where : {
            id
        },
        include : {
            model : Actormovie,
            include : Movie
        }
    });
    return people;
};
