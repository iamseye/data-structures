class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    contrucutre() {
        this.root = null;
        this.tail = this.root;
    }
    
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let curr = this.root;
            while(curr) {
                if(value < curr.value){
                    if(!curr.left) {
                        curr.left = newNode;
                        return this;
                    }
                    curr = curr.left;
                } else {
                    if(!curr.right) {
                        curr.right = newNode;
                        return this;
                    }
                    curr = curr.right;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return false;
        }

        let curr = this.root;

        while(curr) {
            if(curr.value === value) {
                return true;
            }

            if(value < curr.value) {
                if(!curr.left) {
                    return false;
                }
                if(curr.left === value) {
                    return true;
                }
                curr = curr.left;
            } else {
                if(!curr.right) {
                    return false;
                }
                if(curr.right === value) {
                    return true;
                }
                curr = curr.right;
            }
        }

        return false;
    }
    
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(JSON.stringify(tree));

console.log(tree.lookup(6));
console.log(tree.lookup(20));
console.log(tree.lookup(25));

//       9
//   4      20
// 1   6  15  170
