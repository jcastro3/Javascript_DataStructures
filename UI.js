var objArray = [],
    stack,
    queue;

$(document).ready(function () {
    'use strict';
    
    $('#create_btn').click(function () {
        var name,
            key;
        
        name = $('#create_newInstance').val();
        
        objArray.push({
            key: name,
            stack_val: stack = new Stack(),
            queue_val: queue = new Queue()
        });
        
        for (key in objArray) {
            if (objArray[key] === name) {
                
                name = objArray[key].key;
                stack = objArray[key].stack_val;
                queue = objArray[key].queue_val;
                
            }
        }
        
        $("#create_newInstance").val('');
    });
    
    $('#push_btn').click(function () {
        var push_val, item;
        push_val = $('#stack_value').val();
        if (push_val === '') { 
            return alert('empty field, please insert value');
        }
        item = $('<li>' + push_val + '</li>');
        stack.push(item);
        $('#stack_ul').prepend(item);
        $("#stack_value").val('');
    });
    
    $('#pop_btn').click(function(){
        var pop;
        if (!stack.isEmpty()) {
            pop = stack.pop();
            pop.remove();
        } else {
            alert('the stack is empty!!');
        }
        $('#stack_value').val('');
        
    });
    
    $('#peek_btn').click(function () {
        var peek;
        if (!stack.isEmpty()) {
            peek = stack.peek();
            console.log(peek);
            alert('current value in top is: ' + peek.text());
        } else {
                alert('the stack is empty!!');
        }
        $('#stack_value').val('');
    });
    
    $('#enqueue_btn').click(function(){
        var queue_val, item;
        queue_val = $('#queue_value').val();
        if (queue_val === '') { return alert('empty field, please insert value');}
        item = $('<li>' + queue_val + '</li>');
        queue.enqueue(item);
        $('#queue_ul').append(item);
        $("#queue_value").val('');
    });
    
    $('#dequeue_btn').click(function(){
        var dequeue;
        if (!queue.isEmpty()) {
            dequeue = queue.dequeue();
            dequeue.remove();
        } else {
            alert('the stack is empty!!');
        }
        $('#queue_value').val('');
        
    });
    
    $('#peek_btn2').click(function(){
        var peek;
        if (!queue.isEmpty()) {
            peek = stack.peek();
            console.log(peek);
            alert('current value in top is: ' + peek.text());
        } else {
            alert('the stack is empty!!');
        }
        $('#queue_value').val('');
    });
});