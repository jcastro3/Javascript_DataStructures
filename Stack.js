'use strict';

var Stack = function () {
    
    var size = 0,
        top = null,
        n;
    
    return {
         
        push: function (data) {
          
            n = new Node (data, this.top);
            this.top = n;
            this.size +=1;

        },
        
        pop: function () {
            
            var tmp = this.top;
            this.top = this.top.next;
            this.size -=1;
            return tmp.data;
        
        },
        
        isEmpty: function () {
        
            return this.top === null;
        
        },
        
        getSize: function () {
        
            return this.size;
        
        },
        
        peek: function () {
            
            return this.top.data;
        }
    };
    
};



//refactor code push function does not need the next, fre up space by setting the tmp to null 
//create a modular patter using js for the whole stack function 
//take the function Node and integrate it into a different file have a secuansial access for both Stack and Queue
//refactor the table tags to ul li list elements.
