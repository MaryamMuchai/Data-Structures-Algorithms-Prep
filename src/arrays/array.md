## Arrays

### Big O of common Array Operations
1) Access
2) Set

We look at accessing from the array and setting the value at a particular index in the array. 
They have a space and time complexity O(1).
Same time for very large or small array.

3) Traverse/Search 

The time complexity is O(n) and space complexity is O(1)constant space.
No additional spaces is created.

4) Copy

Space and Time = O(n). 

A new array is created. New slots space is needed. Time is needed because we will traverse through each element in the array.

5) Insert: O(1)s-not using any space 
* at beginning: O(n)T = copy array and make a new array with required number of memory slots.
* at end: O(1)T = it allocates extra space when creating array.
* somewhere in between: O(n)T = makes a copy of the array and re-index the elements.

To store each element certain number of memory slots needed.

Dynamic array allows O(1)(constant time) insertion at the end. OS allocates almost 2 times as much memory as needed.

Static array its fixed size and the next memory slot may not be empty.

6) Remove: O(1)s-not using any space
* at beginning:O(n)T - shifts position and re-index elements
* at end: :O(1)T - doesn not require shifting any elements
* somewhere in between: :O(n)T = shift the element and re-index

![Screenshot ](https://user-images.githubusercontent.com/78798386/199032831-25f6ddd0-8f16-45f8-902c-74dfa1c10e38.png)