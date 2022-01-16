module.exports = {
    /**
     * @param url
     * @param callback
     */
    get: (url, callback) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(JSON.parse(xmlHttp.responseText));
        }
        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}
