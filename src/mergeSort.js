function merge(arr1, arr2) {
    let result = [];
    let counterOne = 0;
    let counterTwo = 0;
    while (counterOne < arr1.length) {
        if (counterTwo < arr2.length) {
            if (arr1[counterOne] <= arr2[counterTwo]) {
                result.push(arr1[counterOne]);
                counterOne++;
            } else {
                result.push(arr2[counterTwo]);
                counterTwo++;
            }
        } else {
            let remainder = arr1.slice(counterOne);
            result = result.concat(remainder);
            break;
        }
    }
    if (counterTwo < arr2.length) {
        let remainder = arr2.slice(counterTwo, arr2.length);
        result = result.concat(remainder);
    }
    console.log(result, " : result");
    return (result);
}

// merge([1, 10, 50], [2, 14, 99, 100]);
// merge([2, 14, 99, 100], [1, 10, 50]);


// Effecient code blog for merging sorted Array Below
// function merge(arr1, arr2) {
//     let result = [];
//     let counterOne = 0;
//     let counterTwo = 0;

//     while (counterOne < arr1.length && counterTwo < arr2.length) {
//         if (arr1[counterOne] <= arr2[counterTwo]) {
//             result.push(arr1[counterOne]);
//             counterOne++;
//         } else {
//             result.push(arr2[counterTwo]);
//             counterTwo++;
//         }
//     }

//     // If there are remaining elements in arr1, add them to the result
//     if (counterOne < arr1.length) {
//         result = result.concat(arr1.slice(counterOne));
//     }

//     // If there are remaining elements in arr2, add them to the result
//     if (counterTwo < arr2.length) {
//         result = result.concat(arr2.slice(counterTwo));
//     }

//     console.log(result, " : result");
// }

// merge([1, 10, 50], [2, 14, 99, 100]);

function mergeMethod(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) {
        result = result.concat(arr1.slice(i));
    }
    if (j < arr2.length) {
        result = result.concat(arr2.slice(j));
    }
    return result;
}


// Merge Sort Method below
// Merge sort use recursion method
// First approach ==> Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let response = merge(left, right);
    console.log(response, " : response");
    return (response);
}

let result = mergeSort([23, 1, 34, 43, 21, 12, 10, 300, 42, 46]);
console.log(result, " : *****");

// Lets discuss the Time complexity of the merge sort
// Time complexity : O(n log n) --> Because devide and conquor have O(log n) decomposition & O(n) comparison per decompositionś 
// Space Complexity : O(n) --> Maximum space at an instance we took is for the length of the arrays input