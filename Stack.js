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

var stack = new Stack();
