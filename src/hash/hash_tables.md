# Hash Table
A hash table is a data structure that implements an associative array abstract data type, that can map keys to values.

Data structure that is used to store information.

The Hash table data structure stores elements in key-value pairs where: 
* Key: Unique integer that is used for indexing the values.
* Value: Data that are associated with keys.

Instead of lineraly searching an array every time to determine if an element is present, which takes O(n) time, we can traverse the array once and hash all the elements into a hash table.

<b>Hashing (Hash Function)</b>:
Hashing is a new index is processed using the keys. And, the element corresponding to that key is stored in the index

<b>Hash Collision</b>: When the hash function generates the same index for mutliple keys, there will be a conflict.
This can be resolved using:

(a) Collision resolution by chaining.
If a hash function produces the same index for mutliple elements, these elements are stored in the same index by using a doubly-linked list. 

This is to say that the worst case occurs when all the values are in the 
same index or linked list, making the search complexity linear.

This technique is best applied when we do not know the how many keys will 
be there or how frequently the delete/insert operations will take place.

The running time of chaining is a defined below:

Insert
Best: O (1)
Worst: O (n) (if insertions are always at the end of the linked list)

Find
Best: O (1)
Worst: O(n)

Delete
Best: O (1)
Worst: O(n)


The technique is simple; however, it requires additional memory outside the table.

(b) Open Addressing: Linear/Quadratic Probing and Double Hashing

Unlike chaining, open addressing doesn't store multiple elements into the same slot. Each slot is either fillwed with a single key or left NIL.

The idea follows storing the values being stored in the hash table.

In the event of a collision, we look for the next available spot through an algorithm.
It is important to note that the size of the table should always be greater 
than the number of keys. 

Point to note in delete operations, the deleted slot needs to be marked in 
some way so that during searching, we don’t stop probing at empty slots.

### Types of Open Addressing Techniques
* Linear Probing

Collision is resolved by checking the next slot.

> h(k, i) = (h'(k) + i) mod m

where

> i= {0,1,.....}

> h'(k) is a new hash function

If a collision occurs at h(k, 0), then h(k, 1) is checked. In this way, the value of i is incremented linearly.

Disadvantage of using linear:
1. Time is added to perform operations on the hash table beacuse when inserting a new element, the entire cluster must be traversed.

* Quadratic Probing


* Double Hashing


