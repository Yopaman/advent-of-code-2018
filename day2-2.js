const readInput = require('./readInput');

readInput('day2.txt')
.then(input => {

    let differentsLettersCount = 0,
    results = [];
    
    input.split('\n').forEach(id => {
        input.split('\n').forEach(element => {
            element.split('').forEach((letter, index) => {
                if (letter != id[index]) differentsLettersCount++;
            });
            if (differentsLettersCount == 1) results.push(id, element);
            differentsLettersCount = 0;
        });
    });

    console.log(results)

})


