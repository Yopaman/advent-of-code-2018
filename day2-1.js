const readInput = require('./readInput');

readInput('day2.txt')
.then(input => {
    
    let threeTimes = 0,
    threeTimesAlreadyDone = false,
    twoTimes = 0,
    twoTimesAlreadyDone = false,
    count = 0;

    input.split('\n').forEach(id => {
        twoTimesAlreadyDone = false;
        threeTimesAlreadyDone = false;
        id.split('').forEach(letter => {
            count = 0;
            id.split('').forEach(element => {
                if (letter == element) count++;
            });
            if (count == 2 && twoTimesAlreadyDone == false) {
                twoTimes ++;
                twoTimesAlreadyDone = true;
            } else if (count == 3 && threeTimesAlreadyDone == false) {
                threeTimes++;
                threeTimesAlreadyDone = true;
            }
        });
    });

    console.log(twoTimes * threeTimes);

});