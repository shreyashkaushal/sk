const fs = require('fs');
const readline = require('readline-sync');
const num = parseInt(readline.question('Enter the number to be searched '));
let out = false;
function getInput() {
    return new Promise((resolve, reject) => {
        fs.readFile('input2.txt', (err, data) => {
            if (err) return reject(err);
            let input = data.toString().split(',').map((ele) => {
                return parseInt(ele)
            });
            return resolve(input.sort((a, b) => { return a - b }))
        })

    })
}
//getInput().then(input=>console.log(input))
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(value) {
        this.head = new Node(value, this.head)
        this.size++

    }

    insertAt(value, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.head = new Node(value, this.head);
            return;
        }
        const node = new Node(value);
        let current, previous;
        current = this.head;
        let count = 0; 0
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    deleteElement(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;

    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const ll = new LinkedList();
getInput().then((input) => {
    let temp = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        ll.insertFirst(input[i])
        if (num === input[i]) {
            out = true;
            temp = i;

        }
    }
    console.log('the list is - ')
    ll.printList();
    console.log('element found at ' + temp);
    if (out != true) {
        for (let i = 0; i < input.length; i++) {
            if (num < input[i]) {
                ll.insertAt(num, i);
                break;

            }
            else {
                ll.insertAt(num, (input.length))
                break;

            }
        }

        console.log('list after inserting');
        ll.printList();
    }
    else {
        ll.deleteElement(temp);
        console.log('list after deleting');
        ll.printList();
    }

})
// ll.insertFirst(30);
// ll.insertFirst(40);
// ll.insertFirst(50);
// ll.insertFirst(60);
// ll.insertAt(100,2);
// ll.insertAt(300,3);
// ll.printList()