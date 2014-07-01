var collections = (function (ns) {
    'use strict';
    function Stack() {
        var top = null,
            n;

        this.size = 0;

    }

    Stack.prototype = (function () {
    
        function push(data) {
          
            var n = new Node(data, this.top);
            this.top = n;
            this.size += 1;

        }
        
        function pop() {
            
            var tmp = this.top;
            this.top = this.top.next;
            this.size -= 1;
            return tmp.data;
        
        }
        
        function isEmpty() {
        
            return !this.top;
        
        }
        
        function getSize() {
        
            return this.size;
        
        }
        
        function peek() {
            
            return this.top.data;
        }
        
        function getAll() {
            
            var tmp = this.top;
        }
        
        return {
            push: push,
            pop: pop,
            isEmpty: isEmpty,
            getSize: getSize,
            peek: peek
        };
    }());
    
    ns.Stack = Stack;
    return ns;
}(collections || {}));


//refactor code push function does not need the next, fre up space by setting the tmp to null 
//create a modular patter using js for the whole stack function 
//take the function Node and integrate it into a different file have a secuansial access for both Stack and Queue
//refactor the table tags to ul li list elements.
