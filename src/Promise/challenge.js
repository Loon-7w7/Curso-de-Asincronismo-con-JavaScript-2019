const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => { //Primer llamado
        console.log(data.info.count); //Presento información en consola sobre cantidad
        return fetchData(`${API}${data.results[0].id}`)//Nueva petición
    })
    .then(data => {
        console.log(data.name) //Presento información en consola sobre el nombre
        return fetchData(data.origin.url)//Nueva petición
    })
    .then(data => {
        console.log(data.dimension) // Presento información en consola sobre la dimensión
    })
    .catch(err => console.error(err)); //Mostrar el error

// Si me da algún error, aplicar técnica del patito de Hule.