
var collections = (function (ns) {
    'use strict';
    function Queue() {
        var front = null,
            back = null,
            n;
        this.size = 0;
    }
   
    Queue.prototype = (function () {
    
        function enqueue(data) {
        
            var tmp = this.back;
            this.back = new Node(data, null);
            if (this.isEmpty()) {
                this.front = this.back;
                this.size += 1;
                return;
            }
            tmp.next = this.back;
            this.size += 1;
        
        }
    
        function dequeue() {
            
            var tmp = this.front;
            this.front = tmp.next;
            this.size -= 1;
            return tmp.data;
            
        }
        function peek() {
            
            return this.front.data;
        }
    
        function isEmpty() {
            
            return !this.front;
            
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


