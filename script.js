



// Make a for cycle that outputs from 0 to 20 even numbers

// for (let i = 0; i <= 20; i += 2) {

//   console.log(i);

// }


// Make a function that gets an array and get the second largest number

const arrOfNum = [20, 10, 0, 5, 1, 40, 26, 2];
function secondLargest(arr) {

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest]; // Swap if out of order
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return largest === secondLargest ? null : secondLargest; // Return null if no second largest
}

console.log(secondLargest(arrOfNum)); // Output: 26
