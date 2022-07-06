class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if(index === 0 ) {
            this.prepend(value);
            return;
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const nextNode = leader.next;
        leader.next = newNode;
        newNode.next = nextNode;

        this.length++;
        // while(currentNode !== null) {
        //     if(i === index-1) {
        //         let nextNode = currentNode.next;
        //         currentNode.next = newNode;
        //         newNode.next = nextNode;
        //         break;
        //     }
        //     i++;
        // }
    }

    delete(index) {
        if(index > this.length-1) {
            return;
        }
        if(index === 0 ) {
            this.head = this.head.next;
            return;
        }

        const preTargetNode = this.traverseToIndex(index-1);

        const newNextNode = preTargetNode.next.next;
        preTargetNode.next = newNextNode;
        this.length--;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.insert(0,991);

myLinkedList.printList();

myLinkedList.delete(0);
myLinkedList.delete(2);


myLinkedList.printList();
