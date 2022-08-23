const request = require('request');

const options = {
    uri: "http://127.0.0.1:50569/api/carrer/frontenddeveloper"
};

request.get(options, function (error, response, body){
    // callback
    console.error(error);
    console.log(response && response.statusCode);
    console.log(body);
});