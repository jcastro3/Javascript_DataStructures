
var queue = new Queue();
var stack = new Stack();

$(document).ready(function(){
    
    $('#push_btn').click(function(){
        var push_val = $('#stack_value').val();
        if(push_val === '') return alert('empty field, please insert value');
        var item = $('<li>' + push_val + '</li>');
        stack.push(item);
        $('#stack_ul').prepend(item);
        $("#stack_value").val('');
    });
    
    $('#pop_btn').click(function(){
        var pop;
        if (!stack.isEmpty()) {
           pop = stack.pop();
           pop.remove();
        }
        else {
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
        }
        else {
                alert('the stack is empty!!');
        }
        $('#stack_value').val('');
    });
    
        $('#enqueue_btn').click(function(){
        var queue_val = $('#queue_value').val();
        if (queue_val === '') return alert('empty field, please insert value');
        var item = $('<li>' + queue_val + '</li>');
        queue.enqueue(item);
        $('#queue_ul').append(item);
        $("#queue_value").val('');
    });
    
    $('#dequeue_btn').click(function(){
        var dequeue;
        if (!queue.isEmpty()) {
            dequeue = queue.dequeue();
            dequeue.remove();
        }
        else {
            alert('the stack is empty!!');
        }
        $('#queue_value').val('');
        
    });
    
    $('#peek_btn2').click(function(){
        var peek;
        if(!queue.isEmpty()) {
            peek = stack.peek();
            console.log(peek);
            alert('current value in top is: ' + peek.text());
        }
        else {
            alert('the stack is empty!!');
        }
        $('#queue_value').val('');
    });
});