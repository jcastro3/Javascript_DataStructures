
var collections = (function (ns) {
    'use strict';
    /*jshint validthis: true */
    function Queue() {
        var top = null,
            back = null,
            n;
        this.size = 0;
    }
   
    Queue.prototype = (function () {
    
        function enqueue(data) {
        
            var tmp = this.back;
            this.back = new Node(data, null);
            if (this.isEmpty()) {
                this.top = this.back;
                this.size += 1;
                return;
            }
            tmp.next = this.back;
            this.size += 1;
        
        }
    
        function dequeue() {
            
            var tmp = this.top;
            this.top = tmp.next;
            this.size -= 1;
            return tmp.data;
            
        }
        function peek() {
            
            return this.top.data;
        }
    
        function isEmpty() {
            
            return !this.top;
            
        }
    
        function getSize() {
            
            return this.size;
            
        }
    
        return {
            enqueue: enqueue,
            dequeue: dequeue,
            peek: peek,
            isEmpty: isEmpty,
            getSize: getSize
        };
        
    }());
    
    ns.Queue = Queue;
    return ns;
    
}(collections || {}));


