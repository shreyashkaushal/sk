const fs = require('fs');
const readline = require('readline-sync');
let input = [];
let out = false;
let word = readline.question(' Enter the word to be searched ')
 function getInput() {
    return new Promise((resolve, reject) => {
       // let input = [];
        fs.readFile('input.txt',(err,data)=>{
            if(err) return reject(err);
            let input = data.toString().split(' ');
           // let size = data.length;
            return resolve(input);
        })
    });
}

//getInput().then(input => console.log(input));


class Node {
    constructor(value,next=null)
    {
        this.value = value;
        this.next = next;

    }
}
class LinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0
    }
    insertFirst(value){
        this.head = new Node(value,this.head)
        this.size++
    }
    deleteElement(index){ 
        if(index>0&&index>this.size){
            return;
        }          
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        } else{
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }                         
     this.size--;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
}
const ll = new LinkedList();
 getInput().then((input)=>{
     let temp = 0;
 for(let i = 0; i<input.length ; i++){
     ll.insertFirst(input[i])
     if(word===input[i])
     {
         out = true;
         temp = i;
         
     }
    
 }
 if(out!=true)
     {
         ll.insertFirst(word);
         ll.printList();      
     }
     else{
         ll.deleteElement(temp); 
         ll.printList();
     }
 
 console.log(temp);
 })
// ll.insertFirst(200);
// ll.insertFirst(100);
// ll.insertFirst(900);
// ll.insertFirst(600);
// ll.printList();
// ll.deleteElement(1);
// ll.printList();