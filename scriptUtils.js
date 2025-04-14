const path = require('path');
const fs = require('node:fs');

function getRedirectionsFilePath() {
    return path.resolve(__dirname + '/src/pages/redirects.json');
}

function readRedirectionsFile() {
    const redirectionsFilePath = getRedirectionsFilePath();
    return JSON.parse(fs.readFileSync(redirectionsFilePath)).data; 
}

function writeRedirectionsFile(data) {
    let redirectionsData = 
    {
        "total" : data.length,
        "offset": 0,
        "limit": data.length,
        "data" : data,
        ":type": "sheet"
    };

    let redirectionsFilePath = getRedirectionsFilePath();
    fs.writeFileSync(redirectionsFilePath, JSON.stringify(redirectionsData));
}

module.exports = {
    getRedirectionsFilePath,
    readRedirectionsFile,
    writeRedirectionsFile
};