var http = require('http');
const calc
 = require('./calc');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + calc.myDateTime());

 res.writeln("addition: "+calc.add(100,2));
  res.end();
}).listen(8080);
console.log("addition of 100,2="+calc.add(100,2));
console.log("subtraction of 100,2="+calc.sub(100,2));
console.log("multiplication of 100,2="+calc.mul(100,2));
console.log("Division of 100,2="+calc.div(100,2));