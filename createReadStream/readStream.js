var fs = require('fs');

var readable = fs.createReadStream('./file.txt');
var count = 0;
var myText = "";
readable.on('data', function(text){
    count += 1;
    console.log('Buffer count: ' + count);
    myText += text;
});

readable.on('end', function(){
    console.log('all done');
    console.log(myText);
});