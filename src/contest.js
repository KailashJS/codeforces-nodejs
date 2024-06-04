const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', line => {
    input.push(line);
});

rl.on('close', () => {
    const t = parseInt(input[0]);
    let output = [];

    let index = 1;

    for (let i = 0; i < t; i++) {
        let result = 0;
        const [n, m] = input[index].split(' ').map(Number);
        const a = input[index + 1].split('');
        let alphaObj = { "A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0 };
        a.forEach((item) => alphaObj[item]++);
        // 
        (alphaObj, " : alphaObj");
        if (m > alphaObj.A) { result += (m - alphaObj.A) };
        if (m > alphaObj.B) { result += (m - alphaObj.B) };
        if (m > alphaObj.C) { result += (m - alphaObj.C) };
        if (m > alphaObj.D) { result += (m - alphaObj.D) };
        if (m > alphaObj.E) { result += (m - alphaObj.E) };
        if (m > alphaObj.F) { result += (m - alphaObj.F) };
        if (m > alphaObj.G) { result += (m - alphaObj.G) };
        output.push(result);
        index += 2;
    }
    // console.log(output, " : ****");
    output.forEach((item) => {
        console.log(item);
        // console.log();
    })
})

