var expression = '';
function ac(){
    document.getElementById('ans').innerHTML = 0;
    expression = '';
}
function add(x){
    expression = expression + x;
    document.getElementById('ans').innerHTML = expression;
}
function calculate(){
    result = eval(expression);
    document.getElementById('ans').innerHTML = result;
    expression = result;
}