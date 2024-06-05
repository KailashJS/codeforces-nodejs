const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    let index = 0;
    const T = parseInt(inputLines[index++], 10);
    const results = [];

    for (let t = 0; t < T; t++) {
        const [n, k] = inputLines[index++].split(' ').map(BigInt);
        const a = inputLines[index++].split(' ').map(BigInt);
        let possible = true;

        // This set keeps track of which powers of k have been used
        const usedPowers = new Set();

        for (let num of a) {
            let power = 0n;
            while (num > 0n) {
                const remainder = num % k;
                if (remainder > 1n) {
                    possible = false;
                    break;
                }
                if (remainder === 1n) {
                    if (usedPowers.has(power)) {
                        possible = false;
                        break;
                    }
                    usedPowers.add(power);
                }
                num = num / k;
                power++;
            }
            if (!possible) break;
        }

        if (possible) {
            results.push("YES");
        } else {
            results.push("NO");
        }
    }

    console.log(results.join('\n'));
});
