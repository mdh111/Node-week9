function Maths(type) {
    if(type == 'add'){
        var math = function(num1, num2){
            console.log('Result is: ' + (num1 + num2));
        }
    }
    if(type == 'sub'){
        var math = function(num1, num2){
            console.log('Result is: ' + (num1 - num2));
        }
    }
    return math;
}

var a = Maths('add');
a(3,4);
var b = Maths('sub');
b(3,4);