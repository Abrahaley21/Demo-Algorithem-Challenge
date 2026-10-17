//Demo Algorithem Challenge
// 1.Given an array X, for example [2,1,6,4,-7], create an algorithm 
// that shifts each number by one to the front. 
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]., 
// write the pseudocode, before your JS code.

// START
// Create an empty array result
// FOR i from the last index to 0
//     Add X[i] to result
// RETURN result
// END

// function reverseArray(X) {
//     let result = []
//     for (let i = X.length - 1; i >= 0; i--) {
//         result.push(X[i])
//     }
//     return result
// }
// console.log(reverseArray([2, 1, 6, 4, -7]))


// 2.Given an array X, for example [1,-2,4,1], 
// remove the negative numbers, so that the output becomes: [1,4,1]. 
//  Solve this recursively. For this algorithm, 
// write the pseudocode, before your JS code.

// FUNCTION removeNegatives(arr)
// IF arr is empty
// RETURN empty array
// IF first element is negative
// RETURN removeNegatives(rest of array)
// OTHERWISE
// RETURN first element + removeNegatives(rest of array)
// END FUNCTION

// function removeNegatives(arr) {
//     if (arr.length === 0) {
//         return []
//     }
//     if (arr[0] < 0) {
//         return removeNegatives(arr.slice(1))
//     }
//     return [arr[0], ...removeNegatives(arr.slice(1))]
// }
// console.log(removeNegatives([1, -2, 4, 1]))

// 3.Given an array of integers IntAtt, for example, IntArr = [2,7,1,-2], 
// implement a function to sort this array in ascending order 
// (from lowest to largest) using the Selection Sort method. 
// For this algorithm, write the pseudocode, before your JS code.

// FOR i from 0 to array length - 2
// Set minIndex = i
// FOR j from i + 1 to array length - 1
// IF arr[j] < arr[minIndex]
// Set minIndex = j
// Swap arr[i] and arr[minIndex]
// RETURN arr

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort([2, 7, 1, -2]))

// 4.Write a program that returns an array consisting of 
// the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// The outer loop visits each sub-array.
// Set largest to the first number in that sub-array.
// The inner loop checks the remaining numbers.
// If a number is bigger, update largest.
// Add the largest number to result.



function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        result.push(largest);
    }
    return result;
}
console.log(largestOfFour([
    [4, 5, 1],
    [13, 27, 18],
    [32, 35, 37],
    [1000, 1001, 857]
]));


// 5.Declare a function titleCase(arr) that returns the provided string with 
// the first letter of each word capitalized. 
// Make sure the rest of the word is in lowercase.

// toLowerCase() makes the entire string lowercase.
// split(' ') separates the string into words.
// words[i][0].toUpperCase() capitalizes the first character.
// words[i].slice(1) takes the rest of the word.
// join(' ') combines the words into a string again.


function titleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] =
            words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(titleCase("sHoRt AnD sToUt"));