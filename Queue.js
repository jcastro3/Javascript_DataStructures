'use strict';


var Queue = function() {
    var size = 0,
        front = null,
        back = null;
    return {
        
        enqueue: function(data){
            var tmp = this.back
            this.back = new Node(data, null);
            if(this.isEmpty()) {
                this.front = this.back;
                size+=1;
                return;
            }
                tmp.next = this.back;
                size+=1;
        },
        dequeue: function(){
            var tmp = this.front;
            this.front = tmp.next;
            size-=1;
            return tmp.data;
        },
        peek: function(){
            return this.front.data;
        },
        isEmpty: function(){
           return this.front == null; 
        },
        getSize: function(){
           return size;
        }
        
    };
};


