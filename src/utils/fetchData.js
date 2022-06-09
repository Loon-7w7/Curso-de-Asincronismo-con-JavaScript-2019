let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//La forma de instanciarla en nuestro proyecto.
//Función para traer la información desde la API mediante un CallBack con ECMAScript 6

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); //Generar la referencia que yo necesito.
        xhttp.open('GET', url_api, true); // Petición de la URL y que se maneje de forma asíncrona.
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText)) //El valor ternario no necesita If.
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}

// Se utiliza .exports porque se está trabajando con node.
module.exports = fetchData;