const readInput = require('./readInput');

readInput('day1.txt')
.then(input => {

    let results = [0],
    splittedInput = input.split("\n"),
    resultFound = false;
    while (resultFound != true) {
        splittedInput.forEach(frequency => {
            frequency = parseInt(frequency)
            if (results.includes(results[results.length-1] + frequency)) {
                console.log("Réponse : " + results[results.length-1] + frequency);
                resultFound = true;
            } else {
                results.push(results[results.length-1] + frequency);
            }
        });
    }

});


