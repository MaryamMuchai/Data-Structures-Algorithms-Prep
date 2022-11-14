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

(b) Open Addressing: Linear/Quadratic Probing and Double Hashing