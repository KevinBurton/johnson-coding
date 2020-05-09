# JavaScript Knowledge Quiz

## Instructions

1. Put your code in this document in the places marked by "[verb] me!".
2. The questions can be answered in about 5 or 10 lines of code; no solution should be over 20 lines.
3. Explanations should be 1 to 3 sentences.
4. Place any explanations inside comments.
5. Use clear variable names.
6. Test your code.  It will be eyeballed and tested.
7. Your code doesn't need to be robust; leave out try-catch blocks and validation code.  Just solve the problem cleanly.
8. Feel free to use any available resources.
9. It's ok if you don't answer everything.  Just explain what you know and where you're stuck.  Don't provide broken code.

### QUESTION 1

Implement this function: filterValuesByKeys() takes in an object of key/value pairs and a filter function that accepts one argument and returns a boolean. It returns an array containing the *values* from the object for which filter(*key*) is true.  The array is in no particular order. You do not need to validate anything.

> function filterValuesByKeys(obj, filter) {  // returns array
>
> // implement me!
>
> }

### QUESTION 2

Implement and explain this function: buildBoundsDetector() takes numeric upper and lower bounds and returns a function that accepts a single numeric argument and returns true if the argument is inside the bounds and false if it is outside.  In other words, it could be used like this:
>      var isPercentage = buildBoundsDetector(0, 100);
>      if (isPercentage(4)) { ...
>
Use <= and >= for the comparisions. Explain why this works.

> function buildBoundDetector(lowerBound, upperBound) {  // returns function
>
> // implement me!
>
> }
>
> // explain me!

### QUESTION 3

This function should create a 2 dimension array pre-populated with zeros.  The output appears correct, but it has a bug. Explain what's wrong and fix it.

> // diagnosis me!
>
> function defaultMatrix(size) { // returns array
>
>// fix me!
>
>     var defaultValue = 0;
>     var row = [];
>     var matrix = [];
>     for (var i=0; i < size; i++) { row.push(defaultValue); }
>     for (var i=0; i < size; i++) { matrix.push(row); }
>     return matrix;
> }

### QUESTION 4

Write a javascript function that prints (console.log) the numbers from 1 to 100. For multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'.

### QUESTION 5

Write a javascript function that sorts a list of numbers and returns the sorted
list without using any built-in sorting functions. The function would be called like
custom_sort([1, 5, 2, 8, 9, 5, 3, 7]) and return [1, 2, 3, 5, 5, 7, 8, 9]

### QUESTION 6

Write a javascript function that simulates rolling one or more dice. It will accept
a string argument in the format {digit}d{digit} where the first digit represents 
the number of dice and the second digit represents the number of sides. The returned
value would be the sum or the dice. So if the string argument was 1d6 I would expect
a resulting random number 1-6.

* The function must be able to roll dice for any number of sides (2-100)
* The function must be able to roll any number of dice (1-1000)
* The function return the sum of the dice
* Your code must handle and sanitize bad user input gracefully
