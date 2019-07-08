var add = function(num1, num2){
    result = num1 + num2;
    console.log("Result is: " + result);
}

var sub = function(num1, num2){
    result = num1 - num2;
    console.log("Result is: " + result);
}

function Maths(myFunction) {
    myFunction(2,7);
}

Maths(add);
Maths(sub);