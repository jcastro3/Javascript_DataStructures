function pushValue () {
    
        var stack_data = document.getElementById('stack_data').value;
        if(stack_data == ''){
            return alert('emtpy field, please insert value');
        }
        stack.push(stack_data);
        var t1 = document.getElementById('stackTable');
        var row = t1.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = stack_data;
        document.getElementById('stack_data').value = "";
    
    
}

function popValue () {
    
    
    if (!stack.isEmpty()) {
        var pop = stack.pop();
        var t2 = document.getElementById('popTable');
        var row = t2.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = pop;
        document.getElementById('stackTable').deleteRow(0);
    }
    else {
        alert('the stack is empty!!');
    }
    document.getElementById('stack_data').value = "";
    
}

function peekValue () {
    if (!stack.isEmpty()) {
    var peek = stack.peek();
    alert('current value in the top is : ' + peek);
    }
    else {
        alert('the stack is empty!!');
    }
    
    document.getElementById('stack_data').value = "";
}
