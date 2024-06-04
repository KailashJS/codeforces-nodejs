const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let position = [];
let lines = [];
let lineCount = 0;
rl.on('line', input => {
    lines.push(input.split(" "));
    lineCount++;
    if (lineCount === 5) {
        for (let i = 0; i < 5; i++) {
            let lineArr = lines[i];
            for (let j = 0; j < 5; j++) {
                if (parseInt(lineArr[j]) === 1) {
                    position.push(i + 1);
                    position.push(j + 1);
                    break;
                }
            }
        }
        main(position);
        rl.close();
    }
});

const main = test => {
    let row = 3 - parseInt(test[0]);
    let col = 3 - parseInt(test[1]);
    if (row < 0) {
        row = row * -1;
    }
    if (col < 0) {
        col = col * -1;
    }
    console.log(row + col);
};