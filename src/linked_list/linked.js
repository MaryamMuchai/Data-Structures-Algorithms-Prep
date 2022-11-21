// linked list Data structure in Javascript
//linking with references
const n1 = {
    data: 100
};
const n2 = {
    data: 700
};
n1.next = n2;// adding reference from n1 to n2
console.log(n1)

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size =0;
        this.tail = null;
    }


    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    //insert last node
    insertLast(data){
        let data =  new Node(data);
        let current;
        //if empty make head
        if(!this.head) {
            this.head = node;
        } else {
          current = this.head;  

          while(current.next) {
            current = current.next;
          }
          current.next = node;
        }
        this.size++;
    }
    //insert at index(in between)
    //Get at Index
    //Remove at Index
    //Clear List

    //Print list data
    printListData() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
}
const list  = new LinkedList();
list.insertFirst(100);
list.insertFirst(1200);
list.insertLast(600);
console.log(list);

list.printListData();