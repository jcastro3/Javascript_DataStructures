var stack = new Stack();

//function pushValue() {
//    
//        var stack_data = document.getElementById('stack_data').value;
//        if(stack_data == ''){
//            return alert('emtpy field, please insert value');
//        }
//        stack.push(stack_data);
//        var t1 = document.getElementById('stackTable');
//        var row = t1.insertRow(0);
//        var cell = row.insertCell(0);
//        cell.innerHTML = stack_data;
//        document.getElementById('stack_data').value = "";
//    
//    
//}
//
//function popValue () {
//    
//
//    if (!stack.isEmpty()) {
//        var pop = stack.pop();
//        var t2 = document.getElementById('popTable');
//        var row = t2.insertRow(0);
//        var cell = row.insertCell(0);
//        cell.innerHTML = pop;
//        document.getElementById('stackTable').deleteRow(0);
//    }
//    else {
//        alert('the stack is empty!!');
//    }
//    document.getElementById('stack_data').value = "";
//    
//}
//
//function peekValue () {
//    if (!stack.isEmpty()) {
//    var peek = stack.peek();
//    alert('current value in the top is : ' + peek);
//    }
//    else {
//        alert('the stack is empty!!');
//    }
//    
//    document.getElementById('stack_data').value = "";
//}

$(document).ready(function(){
    
    $('#push_btn').click(function(){
        var push_val = $('#value').val();
        if(push_val === '') return alert('empty field, please insert value');
        var item = $('<li>' + push_val + '</li>');
        stack.push(item);
        $('ul').prepend(item);
        $("#value").val('');
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
        $('#value').val('');
        
    });
    
    $('#peek_btn').click(function(){
        var peek;
        if(!stack.isEmpty()) {
            peek = stack.peek();
            console.log(peek);
            alert('current value in top is: ' + peek.text());
        }
        else {
            alert('the stack is empty!!');
        }
        $('#value').val('');
    })
});