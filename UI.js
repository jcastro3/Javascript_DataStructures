var objArray = [],
    stack,
    queue;

$(document).ready(function () {
    'use strict';
    var UI = (function () {
        
        function clearTxt() {
            $('.clearTxt').val('');
        }
        //PRIVATE MEMBERS
        function createNewObj(name, typeSelected, obj, item) {
            var key;
            
            switch (typeSelected) {
            case 'stack':
          
                $('#obj_ul').data(name, { stack_val : obj = new collections.Stack()});
                stack = $('#obj_ul').data(name).stack_val;
                
                break;
            case 'queue':
                    
                $('#obj_ul').data(name, { queue_val : obj = new collections.Queue()});
                queue = $('#obj_ul').data(name).queue_val;
                break;
                    
            default:
                alert('Unable to process you petition');
                
            }
            $('#' + typeSelected + '_name').text(name);
            $('#obj_ul').prepend(item);
            clearTxt();

        }
        
        
        
        function updateList(obj, type, name) {
            
            var tmp = obj.top;
            $('#' + type + '_ul').text('');
            while (tmp) {
                $('#' + type + '_ul').append(tmp.data);
                tmp = tmp.next;
                $('#' + type + '_name').text(name);
            }
        }
        
        function updateQueue(queue) {
            var tmp = queue.front;
            $('#queue_ul').text('');
            while (tmp) {
                $('#queue_ul').append(tmp.data);
                tmp = tmp.next;

            }
        }

        //PUBLIC MEMBERS
        $(document).on('click', '.obj_li', function () {
            var i,
                name = $(this).attr('data-collection-name'),
                length = objArray.length,
                type = $(this).attr('type');
            
            if (type === 'stack') {
                stack = $('#obj_ul').data(name).stack_val;
                updateList(stack, type, name);
            } else {
                queue = $('#obj_ul').data(name).queue_val;
                updateList(queue, type, name);
            }
                                         
            
            
                
            
            
        });
        
        $('#create_btn').click(function () {
            var name,
                item,
                selected,
                msg;
            
            name = $('#create_newInstance').val();
            selected = $('#typeSelected').val();
            
            if (name === '') {
                return alert('empty field, please insert value');
            }
            
            item = $('<li class=obj_li>' + name + ' [' + selected + ']</li>')
                                                                            .attr('data-collection-name', name)
                                                                            .attr('type', selected);
            
            (selected === 'stack') ? createNewObj(name, selected, stack, item) : createNewObj(name, selected, queue, item);
            
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
            clearTxt();
        });
        
        
        $('#pop_btn').click(function () {
            var pop;
            if (!stack.isEmpty()) {
                pop = stack.pop();
                pop.remove();
            } else {
                alert('the stack is empty!!');
            }
            clearTxt();
        
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
    }());
});
  