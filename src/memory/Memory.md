# Memory
<b>Static Memory Allocation: </b>

Memory Allocated during compile time is called <u><b>Static Memory</b></u>.

The memory allocated is fixed and cannot be increased or decreased during run time.

> int main()
{
    int arr[5] = {1,2,3,4,5};   
}
## Key Notes to consider:
Since you have to allocate memory for an array during compile time then you have to fix the size at the time of declaration.

If size is fixed the user cannot increase or decrease the size of the array at run time.

If the value stored by the user in the array at run time is less than the size specified then there will be <u>wasted of memory</u>.

If the value stored by the user in the array at run time is <u>more</u> than the size specified the program will crash or misbehave.

## Here comes the Rescue:
<b>Dynamic Memory Allocation:</b> 

This is the process of allocating memory at the time of execution.


    |               |     
    | ------------- | 
    | Stack         | 
    | Heap          | 
    | Uninitialized data  | 
    | initialized data  | 
    | Code Segment  | 

Heap is the segment of memory where dynamic memory allocation takes place.
Memory is allocated and deallocated without any order or randomly unlike stack(memory is allocated or deallocated in a defined order).

## Javascript: Memory Management and Garbage Collection
When you declare a variable, object, array or function all are stored somewhere in the memory.

Example:
> Execution Starts: obj A  (read/write)

> Location (A) let obj = {
    a:10
}

## Allocation in JavaScript
* Value Initialization - JavaScript will automatically allocate memory when values are initially declared.
Example: 

> const n = 123; // allocates memory for a number

> const s = "abcd"; // allocates memory for a string

> const z = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

> function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

## Allocation via function calls
Some function calls result in object allocation.

> const d = new Date(); // allocates a Date object

> const e = document.createElement("div"); // allocates a DOM element

## Garbage Allocation
When the Program ends the data inside location is garbage which needs to be cleared.
In short Garbage Collection(GC) is the process of collecting garbage | process of finding and deleting objects which are no longer being referenced by other objects. (General Knowledge that applies to all Programming languages.)

GC Process also called <b>automatic memory management</b> with ref to JS.

## Concepts necessary for understanding the main garbage collection algorithms:

 * Mark-and-Sweep Algorithm: 

The algorithm starts from the root object and checks for references linked.
In case there is any unreachable locations, then they are removed.

This algorithm checks first if the values have references eg Global object(Root).

Mark-and-Sweep algorithm will look for unmarked locations and will clean them.

```
The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
```

* References:

An object is said to reference another object if the former has access to the latter (either implicitly or explicitly.

* Reference-counting garbage collection:

This algorithm reduces the problem from determining whether or not an object is still needed to determining if an object still has any other objects referencing it.


## Notes in reference to JavaScript
* JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
* If References exist, there will not be any cleaning or garbage collecting.
* If a location is unreachable then that will be collected/released as garbage.
* Circular references are a common cause of memory leaks.
