'use strict';
var stack = new Stack();
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
        console.log(this);
        
        
    };
    
    this.pop = function () {
        
        var tmp = this.top.data;
        this.top = this.next;
        this.size--;
        return tmp;
        
    };
    
    this.isEmpty = function () {
        return this.top == null
    };
    
    this.getSize = function () {
        return this.size;
    };
    
    this.peek = function () {
        return this.top.data;
    }
    
}


function pushValue(){
    var stack_data = document.getElementById('stack_data');
    var data = stack_data.value;
    stack.push(data);

}


//mystack.push('hola');
//mystack.push('hello');
//mystack.push('salut');
//var kicked = mystack.pop();
//var peek = mystack.peek();
//console.log("this greeting was kicked " + kicked);
//console.log("first element in the stack " + peek);
//
//console.log(mystack);


