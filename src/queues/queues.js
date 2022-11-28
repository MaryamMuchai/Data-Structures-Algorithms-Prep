// Implementation of Queue in Javascript

// Functions to be implemented
class Queue {
    constructor() {
        this.elements = [];
    }
//Enqueue(item)
enqueue(element) {
    // 1.adding element to the queue
    this.items.push(element);
}

//Dequeue() - Removes an element from the queue
dequeue() {
    // 1. Remove the elements from the queue.
    // 2. Returns 'empty' when called on empty queue
    if(this.isEmpty())
        return "Underflow situation";
    return this.items.shifts();

}

// Front() - returns the Front element of the queue without removing it
front() {
    if(this.isEmpty())
        return "The Queue is empty!";
    return this.items[0];
}

// isEmpty()
isEmpty() {
// return true if the queue is empty
return this.items.length == 0;
}

// Print Queue Function
printQueue() {
    var str = "";
    for(var i=0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
print() {
    return this.elements;
}

// Reversing a Queue - Change the order of the queue from back to front
reverse(){
//Declare an empty array
    const reversed = [];
// iterate through the array using a while loop
    while (this.queu.lenght > 0) {
        reversed.push(this.queue.pop());
    }
    // set queu using the new array
    this.queue = reversed;
    return this.queue;
}

}