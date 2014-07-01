var objArray = [],
    stack,
    queue;

$(document).ready(function () {
    'use strict';
    
    $('#create_btn').click(function () {
        var name,
            key,
            item,
            selected;
        
        name = $('#create_newInstance').val();
        selected = $('#typeSelector').val();
        alert(selected);
        if (name === '') { 
            return alert('empty field, please insert value');
        }
        
        
        objArray.push({
            key: name,
            stack_val: stack = new collections.Stack(),
            queue_val: queue = new collections.Queue()
        });
        
        for (key in objArray) {
            if (objArray[key] === name) {
                
                name = objArray[key].key;
                stack = objArray[key].stack_val;
                queue = objArray[key].queue_val;
                
            }
        }
        item = $('<li class="obj_li">' + name + '</li>');
        $('#obj_ul').prepend(item).bind();
        $(".new_name").text(name);
        $("#stack_ul").text('');
        $("#queue_ul").text('');
        $("#create_newInstance").val('');
    });
    
    
    var updateStack = function (stack) {
        var tmp = stack.top;
        $('#stack_ul').text('');
        while (tmp) {
            $('#stack_ul').append(tmp.data);
            tmp = tmp.next;
            
        }
        
        
        
    },
    
        updateQueue = function (queue) {
            var tmp = queue.front;
            $('#queue_ul').text('');
            while (tmp) {
                $('#queue_ul').append(tmp.data);
                tmp = tmp.next;

            }
        };

    
    $(document).on('click', '.obj_li', function () {
        var i,
            name = $(this).text(),
            length = objArray.length;
        for (i = 0; i < length; i += 1) {
            if (objArray[i].key === name) {
                stack = objArray[i].stack_val;
                queue = objArray[i].queue_val;
                updateStack(stack);
                updateQueue(queue);
                break;
            }
        }
        $(".new_name").text(name);
    });
    
    
    $('#push_btn').click(function () {
        var push_val, item;
        push_val = $('#stack_value').val();
        if (push_val === '') { 
            return alert('empty field, please insert value');
        }
        item = $('<li id=li>' + push_val + '</li>');
        stack.push(item);
        $('#stack_ul').prepend(item);
        $("#stack_value").val('');
    });
    
    
    $('#pop_btn').click(function () {
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
        item = $('<li id=li>' + queue_val + '</li>');
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
  