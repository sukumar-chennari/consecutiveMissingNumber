# consecutiveMissingNumber

Problem : Given an array of consecutive numbers with one missin, find the missing number.
Test case 1: 
input [1,2,4,5]
output :[3]


1. The total sum of numbers from the first to the last number in the array (including the missing number) is calculated using the formula:

Total Sum=𝑛 ×(first number+ last number)/2
where ,
𝑛
n is the count of numbers including the missing one.

2. The actual sum of the numbers in the array is calculated using reduce.

3. The missing number is the difference between the total sum and the actual sum.