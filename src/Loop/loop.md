# Loops and Iteration
Loops are one of the main control structures of Javascript.

Loops offer a quick and easy way to do something repeatedly.

## Javascript iterate through loops in:
* while loops
* for loops
* break statement
* continue statement
* for...in statement
* for..of loops

### <u>for</u>
Repeats until a specified condition evaluates to false.
> for (initialization; condition; finalExpression) {
  // code
}
> Example iterate through integers from 0-8:

> for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }
  console.log('Total elephants: ' + i);
}

### <u>do...while</u>
The do...while statement repeats until a specified condition evaluates to false.

### <u>while (condition);</u>
`Statement` is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

### <u></u>
