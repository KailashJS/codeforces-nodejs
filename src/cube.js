const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
rl.on('line', line => {
    input.push(line)
})

rl.on('close', () => {
    const t = parseInt(input[0]);
    let output = [];

    let index = 1;

    for (let i = 0; i < t; i++) {
        let result = "";
        const [n, ft, k] = input[index].split(' ').map(Number);
        let rawArr = input[index + 1].split(' ').map(Number);
        let f = rawArr[ft - 1];
        rawArr.sort();
        rawArr.reverse();
        let leftArr = rawArr.slice(0, k);
        let rightArr = rawArr.slice(k, rawArr.length);
        console.log(leftArr, " : LeftArr");
        console.log(rightArr, " : RightArr");
        let testOne = -1;
        let testTwo = -1;
        testOne = leftArr.indexOf(f);
        testTwo = rightArr.indexOf(f);
        console.log(testOne, " : testOne");
        console.log(testTwo, " : testTwo");
        if ((testOne !== -1) && (testTwo !== -1)) {
            result = 'Maybe';
        } else if (testOne !== -1) {
            result = 'Yes';
        } else {
            result = 'No';
        }
        output.push(result);
        index += 2;
    }

    output.forEach((item) => {
        console.log(item);
    })
})