function bubbleSort(arr) {
    let noSwap;
    const swap = (arr, idx1, idx2) => {
        console.log(arr, " : arr");
        console.log(arr[idx1], " : idx1");
        console.log(arr[idx2], " : idx2");
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                noSwap = false;
                swap(arr, j, j + 1);
            }
        }
        // if (noSwap) break;
    }
    console.log(arr, " : array");
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);