const readline = require('readline-sync');
const exp = readline.question('Enter the expression to check balanced ');
class Stack {
    constructor() {
        this.items = []
    }
    //push()
    push(value) {
        this.items.push(value);
    }
    //pop()
    pop() {
        if (this.items.length === 0) return console.log('stack is underflow');
        return this.items.pop();
    }
    //peek()
    //isEmpty()
    isEmpty() {
        if (this.items.length === 0) return true;
        else return false;
    }
    //size()
    //print elements of stack
    printStack() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
const s = new Stack();
s.push(100);
s.push(200);
s.push(300);
s.push(400);
console.log('after pushing up element ');
s.printStack();
s.pop();
s.pop();
s.pop();
s.pop();
console.log('after poping out element');
s.printStack();
if (s.isEmpty()) {
    console.log('stack is empty');
}
else {
    console.log('stack is not empty');
}