// nodejs

var rn = require('random-number');
var fs = require('fs');

var options = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    integer: true
}

var loop = 1;

do {
    
    


    var randNum = {
        value: rn(options)
    }

    fs.createWriteStream('randjs.txt', randNum,  {'flags':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log(randNum);
    loop++;
    });
} while (loop < Infinity)

/*
fs.appendFile('randjs.txt'), randNum, function (err) {
    if (err) throw err;
    console.log(randNum);
}
*/

// must fix