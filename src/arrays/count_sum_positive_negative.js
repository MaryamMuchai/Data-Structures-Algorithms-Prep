// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//Solution 1
function countPositivesSumNegatives(input) {
    // your code here
//1. Set two variables positiveno and negative no to 0, to return an empty array if the input is null or empty 
    let totalCount = [0,0]
    
// 2. Checks if input is an empty or is null; it returns and empty array
    if(input === null || input.length <=0) totalCount = []

//3. Checks if the numbers are greater than zero and runs a conditional experession to count the positive numbers and adds the negative numbers.
        else {
            input.forEach(number => {
                if(number > 0) totalCount[0] += 1
                else totalCount[1] += number
            })
        }
        return totalCount;
    }
