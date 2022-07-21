class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(item) {
        let contain = false;
        for (var i = 0; i < this.heap.length; i++) {
            if (this.heap[i] < item) {
                // Once the correct location is found it is
                // enqueued
                this.heap.splice(i, 0, item);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.heap.push(item);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        return this.heap.shift();
    }

    front() {
        if(this.isEmpty()) {
            return 'No element in the queue';
        }

        return this.heap[0];
    }

    isEmpty(){
        return this.heap.length == 0;
    }

    printQueue() {
        console.log(this.heap);
    }
}

const maxHeap = new MaxPriorityQueue();

maxHeap.enqueue(2);
maxHeap.enqueue(1);
maxHeap.enqueue(5);
maxHeap.printQueue();
console.log(maxHeap.front());
maxHeap.dequeue();
maxHeap.printQueue();
console.log(maxHeap.front());