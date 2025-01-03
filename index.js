function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const totalSum = (n * (arr[0] + arr[arr.length - 1])) / 2; 
    const currentSum = arr.reduce((sum, num) => sum + num, 0); 
    return totalSum - currentSum; 
}

// Test case
const input = [1, 2, 4, 5];
const missingNumber = findMissingNumber(input);
console.log(missingNumber); // Output: 3
