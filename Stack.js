var Stack = function () {
    'use strict';
    var top = null,
        n;
    
    this.size = 0;

};

Stack.prototype = (function () {
    'use strict';
    
    var push = function (data) {
          
            var n = new Node(data, this.top);
            this.top = n;
            this.size += 1;

        },
        
        pop = function () {
            
            var tmp = this.top;
            this.top = this.top.next;
            this.size -= 1;
            return tmp.data;
        
        },
        
        isEmpty = function () {
        
            return !this.top;
        
        },
        
        getSize = function () {
        
            return this.size;
        
        },
        
        peek = function () {
            
            return this.top.data;
        };
    
    return {
      push: push,
        pop: pop,
        isEmpty: isEmpty,
        getSize: getSize,
        peek: peek
    };
    
    
}());



//refactor code push function does not need the next, fre up space by setting the tmp to null 
//create a modular patter using js for the whole stack function 
//take the function Node and integrate it into a different file have a secuansial access for both Stack and Queue
//refactor the table tags to ul li list elements.
