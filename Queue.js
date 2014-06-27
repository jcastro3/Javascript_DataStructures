'use strict';

var Queue = function() {
    var size = 0,
        front = null,
        n;
    return {
        
        enqueue: function(data){
            n = new Node(data, this.front);
            if(this.isEmpty()) {
                this.front = n;
                size+=1;
            }
            else{
                this.front.next = n;
                size+=1;
            }
        },
        dequeue: function(){
            var tmp = this.front;
            this.front = this.front.next;
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


