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
//        console.log(this);
        
        
    };
    
    this.pop = function () {
        
        var tmp = this.top.data;   
        this.top = this.top.next;
        
        this.size--;
        return tmp;
        
    };
    
    this.isEmpty = function () {
       return this.top === null;
    };
    
    this.getSize = function () {
        return this.size;
    };
    
    this.peek = function () {
        return this.top.data;
    }
    
}


function pushValue () {
    
        var stack_data = document.getElementById('stack_data').value;
        stack.push(stack_data);
        var t1 = document.getElementById('stackTable');
        var row = t1.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = stack_data;
        document.getElementById('stack_data').value = "";
    
    
}

function popValue () {
    if (!stack.isEmpty()) {
        var pop = stack.pop();
        var t2 = document.getElementById('popTable');
        var row = t2.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = pop;
        document.getElementById('stackTable').deleteRow(0);
    }
    else {
        alert('the stack is empty!!');
    }
    
    
}

function peekValue (){
    if (!stack.isEmpty()) {
    var peek = stack.peek();
    console.log(peek);
    }
    else {
        alert('the stack is empty!!');
    }
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


