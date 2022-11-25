# Queues
A queue is a linear collection of different data types that allow insertion at one end and deletion at another.

Queue follows the <b>First in First out</b> (FIFO) rule - the item that goes in is the first item that comes our first.


### Basic Operations of Queue
<b>Enqueue:</b> Adding of elements at one end of the sequence/queue

<b>Dequeue:</b> Removal of elements at one end of the sequence/queue

<b>isEmpty/isNull:</b> Check if the queue is empty

<b>isFull:</b> Check if the queue is full

<b>Peek:</b> Get the value of the front of the queue without removing it

The end at which insertion takes place is called <b> REAR</b>

The end at which deletion takes place is called <b> Front</b>

### Algorithm
(1) Check if the queue is full.

(2) if the queue is full, produce overflow error and exit.

(3) If the queue is not full, increment  REAR pointer to the next empty space.

(4) Add data element to the queue location, where the REAR is pointing.


