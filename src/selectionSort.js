function selectionSort(arr) {
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                // [arr[i + start], arr[j]] = [arr[j], arr[i + start]]
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
        start++;
    }
    // return arr;
    console.log(arr, " : sorted Arr");
}

selectionSort([3, 6, 1, 4, 4, 5, 6, 76, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1])