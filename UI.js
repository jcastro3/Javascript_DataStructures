var objArray = [],
    stack,
    queue;

$(document).ready(function () {
    'use strict';
    
    var createNewObj = function (typeSelected, name) {
        var key;
        
        switch (typeSelected) {
        case 'stack':
            objArray.push({
                key: name,
                type: typeSelected, //stack
                stack_val: stack = new collections.Stack()
            });
                
            for (key in objArray) {
                if (objArray[key] === name) {
                
                    name = objArray[key].key;
                    stack = objArray[key].stack_val;
                    break;
                
                }
            }
            $("#s_name").text(name);
            break;
                
        case 'queue':
                
            objArray.push({
                key: name,
                type: typeSelected, //queue
                queue_val: queue = new collections.Queue()
            });
                
            for (key in objArray) {
                if (objArray[key] === name) {
                
                    name = objArray[key].key;
                    queue = objArray[key].queue_val;
                    break;
                }
            }
            $("#q_name").text(name);
            break;
                
        default:
            alert('Unable to process you petition');
            
        }
    };
    
    $('#create_btn').click(function () {
        var name,
            item,
            selected;
        
        name = $('#create_newInstance').val();
        selected = $('#typeSelected').val();
        
        if (name === '') {
            return alert('empty field, please insert value');
        } else {
            createNewObj(selected, name);
        }
        
        item = $('<li class=obj_li>' + name + '</li>');
        if (selected === 'stack') {
            $('#obj_ul').prepend(item);
            $("#stack_ul").text('');
        } else {
            $('#obj_ul').prepend(item);
            $("#queue_ul").text('');
        }
        
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
            if (objArray[i].key === name && objArray[i].type === 'stack') {
                stack = objArray[i].stack_val;
                $("#s_name").text(name);
                updateStack(stack);
                break;
            } else if (objArray[i].key === name && objArray[i].type === 'queue') {
                queue = objArray[i].queue_val;
                updateQueue(queue);
                $("#q_name").text(name);
                break;
            }
        }
        
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
    
    $('#enqueue_btn').click(function () {
        var queue_val, item;
        queue_val = $('#queue_value').val();
        if (queue_val === '') { return alert('empty field, please insert value');}
        item = $('<li id=li>' + queue_val + '</li>');
        queue.enqueue(item);
        $('#queue_ul').append(item);
        $("#queue_value").val('');
    });
    
    $('#dequeue_btn').click(function () {
        var dequeue;
        if (!queue.isEmpty()) {
            dequeue = queue.dequeue();
            dequeue.remove();
        } else {
            alert('the stack is empty!!');
        }
        $('#queue_value').val('');
        
    });
    
    $('#peek_btn2').click(function () {
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
  