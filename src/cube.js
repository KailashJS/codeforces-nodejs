// "use strict";

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let input = [];
// rl.on('line', line => {
//     input.push(line);
// });
// rl.on('close', () => {
//     const t = parseInt(input[0]);
//     let output = [];
//     let index = 1;
//     for (let i = 0; i < t; i++) {
//         let result = "";
//         const [n, f, k] = input[index].split(' ').map(Number);
//         let rawArr = input[index + 1].split(' ').map(Number);
//         let fValue = rawArr[f - 1];
//         let sortedArr = rawArr.slice().sort((a, b) => b - a);
//         let favoriteIndex = sortedArr.indexOf(fValue);
//         let allSame = rawArr.every(val => val === rawArr[0]);
//         if (allSame || favoriteIndex < k) {
//             result = "NO";
//         } else if (favoriteIndex >= k) {
//             result = "YES";
//         } else {
//             result = "MAYBE";
//         }
//         output.push(result);
//         index += 2;
//     }
//     output.forEach(item => {
//         console.log(item);
//     });
// });


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solve = () => {
    let [n, f, k] = inputLines.shift().split(' ').map(Number);
    f -= 1;
    k -= 1;
    let a = inputLines.shift().split(' ').map(Number);
    let x = a[f];
    a.sort((x, y) => y - x);
    if (a[k] > x) {
        console.log("NO");
    } else if (a[k] < x) {
        console.log("YES");
    } else {
        console.log(k === n - 1 || a[k + 1] < x ? "YES" : "MAYBE");
    }
}

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    const t = parseInt(inputLines.shift(), 10);
    for (let i = 0; i < t; i++) {
        solve();
    }
});
