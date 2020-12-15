//Dependencia para peticiones XML (CALLBACK).
//npm install xmlhttprequest --save (instalar la dependencia).
//Crear la función XML(traer la función desde la API)

//abrir la url, obtener la petición(.open)
// readyState === 4 (valor para decir que ha sido completado) / status 200 (salió bien-web).

let XMLHttpRequest = require(`xmlhttprequest`).XMLHttpRequest;
//Petición por medio de XML, para Callback.
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(`GET`, url_api, true);
    xhttp.onreadystatechange = function(event) {
    if(xhttp.readyState === 4){
        if(xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText))
        }else {
            const error = new Error(`Error` + url_api);
            return callback(error, null)
        }
      } 
    } 
    xhttp.send();
}