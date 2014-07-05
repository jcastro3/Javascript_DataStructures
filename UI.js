var collections = (function ($, c) {
    'use strict';
    function UI() {

        function clearTxt() {
            $('.clearTxt').val('');
        }
        //PRIVATE MEMBERS
        function createNewObj(name, typeSelected, item) {
           
            switch (typeSelected) {
                    
            case 'stack':
                    
                item.data('collection', { type: 'stack', name: name, value: new collections.Stack() });
                item.css({marginTop: '3px', backgroundColor: '#f0bf5d'});
                $("#stack_ul").text('');
                break;

            case 'queue':
                item.data('collection', { type: 'queue', name: name, value: new collections.Queue() });
                item.css({marginTop: '3px', backgroundColor: '#c5e63a'});
                $("#queue_ul").text('');
                break;

            default:
                alert('Unable to process you petition');
            }

            $('.' + typeSelected + '-active').removeClass(typeSelected + '-active');
            item.addClass(typeSelected + '-active');
            $('#' + typeSelected + '_name').text(name);
            $('#obj_ul').prepend(item);
            clearTxt();

        }


        function updateList(c) {

            var tmp = c.value.top;
            $('#' + c.type + '_ul').text('');
            $('#' + c.type + '_name').text(c.name);
            while (tmp) {
                $('#' + c.type + '_ul').append(tmp.data);
                tmp = tmp.next;
            }
        }

        $(document).on('click', '.obj_li', function () {
            var c = $(this).data('collection');
            $('.' + c.type + '-active').removeClass(c.type + '-active');
            $(this).addClass(c.type + '-active');
            updateList(c);

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

            item = $('<li class=obj_li>' + name + ' [' + selected + ']</li>');

            createNewObj(name, selected, item);

        });



        $('#push_btn').click(function () {
            var push_val,
                item,
                c = $('.stack-active').data('collection').value;

            push_val = $('#stack_value').val();
            if (push_val === '') {
                return alert('empty field, please insert value');
            }
            item = $('<li id="li_s">' + push_val + '</li>');
            c.push(item);
            $('#stack_ul').prepend(item);
            clearTxt();
        });


        $('#pop_btn').click(function () {
            var pop,
                c = $('.stack-active').data('collection').value;
            if (!c.isEmpty()) {
                pop = c.pop();
                pop.remove();
            } else {
                alert('the stack is empty!!');
            }
            clearTxt();

        });


        $('#peek_btn').click(function () {
            var peek,
                c = $('.stack-active').data('collection').value;
            if (!c.isEmpty()) {
                peek = c.peek();
                console.log(peek);
                alert('current value in top is: ' + peek.text());
            } else {
                    alert('the stack is empty!!');
            }
            clearTxt();
        });

        $('#enqueue_btn').click(function () {
            var queue_val,
                item,
                c = $('.queue-active').data('collection').value;
            queue_val = $('#queue_value').val();
            if (queue_val === '') { 
                return alert('empty field, please insert value');
            }
            item = $('<li id="li_q">' + queue_val + '</li>');
            c.enqueue(item);
            $('#queue_ul').append(item);
            clearTxt();
        });

        $('#dequeue_btn').click(function () {
            var dequeue,
                c = $('.queue-active').data('collection').value;
            if (!c.isEmpty()) {
                dequeue = c.dequeue();
                dequeue.remove();
            } else {
                alert('the stack is empty!!');
            }
            clearTxt();

        });

        $('#peek_btn2').click(function () {
            var peek,
                c = $('.queue-active').data('collection').value;
            if (!c.isEmpty()) {
                peek = c.peek();
                console.log(peek);
                alert('current value in top is: ' + peek.text());
            } else {
                alert('the stack is empty!!');
            }
            clearTxt();
        });

    }
    
    c.UI = UI;
    return c;
}(jQuery, collections || {}));