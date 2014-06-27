


var Queue = function () {
    'use strict';
    var size = 0,
        front = null,
        back = null,
        n;
    
};
   
Queue.prototype = (function () {
    'use strict';
    var enqueue = function (data) {
        
            var tmp = this.back;
            this.back = new Node(data, null);
            if (this.isEmpty()) {
                this.front = this.back;
                this.size += 1;
                return;
            }
            tmp.next = this.back;
            this.size += 1;
        
        },
        dequeue = function () {
            
            var tmp = this.front;
            this.front = tmp.next;
            this.size -= 1;
            return tmp.data;
            
        },
        peek = function () {
            
            return this.front.data;
        },
        isEmpty = function () {
            
            return !this.front;
            
        },
        getSize = function () {
            
            return this.size;
            
        };
    
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        peek: peek,
        isEmpty: isEmpty,
        getSize: getSize
    };
}());


