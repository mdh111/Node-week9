function add(){
    result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log("Result is: " + result);
}

//add(1,2,3,4);

function highest(){
    highest = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] > highest){
            highest = arguments[i];
        }
    }
    console.log("The highest numbers is: " + highest);
}

highest(3,6,2,324,123);

function max(){
    console.log(Math.max(...arguments));
}

max(3,6,2,324,123);