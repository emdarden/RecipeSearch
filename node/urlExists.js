var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const urlExists = function(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if(http.status != 404){
        return true;
    } else {
        return false;
    }
}

module.exports = urlExists;