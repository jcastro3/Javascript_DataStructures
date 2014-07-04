var collections = (function ($, c) {
    'use strict';
    function UI() {

        function clearTxt() {
            $('.clearTxt').val('');
        }
        //PRIVATE MEMBERS
        function createNewObj(name, typeSelected, item) {
            var key, tmp, stack;

            switch (typeSelected) {
            case 'stack':
                item.data('collection', { type: 'stack', name: name, value: new collections.Stack() });
                $("#stack_ul").text('');
                break;

            case 'queue':
                item.data('collection', { type: 'queue', name: name, value: new collections.Queue() });
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

            item = $('<li class=obj_li>' + name + ' [' + selected + ']</li>').data('flag', 'on');

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
            item = $('<p id="li">' + push_val + '</p>');
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
            $('#stack_value').val('');
        });

        $('#enqueue_btn').click(function () {
            var queue_val,
                item,
                c = $('.queue-active').data('collection').value;
            queue_val = $('#queue_value').val();
            if (queue_val === '') { 
                return alert('empty field, please insert value');
            }
            item = $('<p id="li">' + queue_val + '</p>');
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