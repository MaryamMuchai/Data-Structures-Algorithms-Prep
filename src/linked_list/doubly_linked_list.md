# Doubly Linked List
A linked list where each node has two pointers, `next` which points to the next nod and `prev` which points to the previous node.

The `Prev` pointer of the first node and the `Next` pointer of the last node point to null.

![double](https://user-images.githubusercontent.com/78798386/202160088-2e6c82e8-9eab-485e-afff-2dfb5534b856.png)

A Doubly linked node contains two fields: one to store data and another to store address of the next node

We add a pointer to the previous node in a double-linked list. Thus we can go in either direction: forward or backward.

Having said that, Double linked list consist of 3 components: 
> prev: Address of the prvious node

> data: data item

> address of next node

![double2](https://user-images.githubusercontent.com/78798386/202161602-64c3d28b-6643-4cd1-b3fa-03b314bcd5f1.png)

## Insertion on a Doubly Linked List
1. Insertion at the beginning
* It allocates memory for `newNode`.
* Assign the data to `newNode`.
* Point `next` of `newNode` to the first node of the doubly linked list.
* Points `prev` to null.
* Point `prev` of the first node to `newNode` (now the previous `head` is the second node).
* Point `head` to `newNode`.

2. Insertion in-bettween(in the middle) of nodes
* Point `prev` of the first node to newNode (now the previous head is the second node)
* assign the data to `newNode`.
* assign the value of next from previous node to the `next` of _newNode_
* assign the address of newNode to the `next` of previous node.
* assign the value of prev of `next` node to the prev of newNode
* assign the address of newNode to the `prev` of next node

3. Insertion at the end
* Traverse to the end of the doubly linked list

## Deletion on a Doubly Linked List
1. Delete the First Node of Doubly Linked List
2. Deletion of the Inner Node
* If del_node is an inner node (second node), we must have to reset the value of `next` and `prev` of the nodes before and after the del_node
3. Delete the Last Node of Doubly Linked List
* We simply delete the del_node and make the next of node before del_node point to NULL.

## Complexity of Insertion / Deletion Operation
O(1) - The time complexity is constant, It will run in the same amount of time, no matter the input size.
O(n) - The algorithm take proportionally longer to complete as the input increases.

The time and space complexity of Insert Opeartion is O(1) or O(n) if it requires traversal insertion.

The time and space complexity of Deletion Opeartion is O(1).

## Why use a Doubly Linked List
* Reverse Look-up
