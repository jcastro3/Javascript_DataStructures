'use strict';

function Node(data, next) {
    this.data = data;
    this.next = next;
}

function Stack() {
    this.size = 0;
    this.next = null;
    this.top = null;
    
    this.push = function (data) {
        
        this.next = this.top; 
        var n = new Node (data, this.next);   
        this.top = n;
        this.size++;
        
    };
    
    this.pop = function () {
        
        var tmp = this.top.data;
        this.top = this.next;
        this.size--;
        return tmp;
        
    };
    
    this.isEmpty = function () {
    
    };
    
    this.getSize = function () {
        return this.size;
    };
    
}



var mystack = new Stack();

mystack.push('hola');
mystack.push('hello');
mystack.push('salut');
var kicked = mystack.pop();
console.log("this greeting was kicked " + kicked);

console.log(mystack);
