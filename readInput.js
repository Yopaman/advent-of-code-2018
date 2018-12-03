const fs = require('fs');
let data = '';

module.exports = filename => {
    return new Promise((resolve, reject) => {
        fs.createReadStream("./inputs/" + filename, "utf8")
        .on('data', chunk => {
            data += chunk;
        }) 
        .on('end', () => {
            resolve(data);
        });
    });
}