var http=require('http');
var server=http.createServer(function(req,res)
{
  if(req.url=="/")
  {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello This is HomePage</h1>");
    res.write("<html><body>This is Home Page! URL was: "+req.url+"</body>")
  }
  else if(req.url=="/student"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello Student</h1>");
    res.write("<html><body>This is Student Page! URL was: "+req.url+"</body>")
  }
  else if(req.url=="/admin"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello Admin</h1>");
    res.write("<html><body>This is Admin Page! URL was: "+req.url+"</body>")
  }
  else{
    res.end('Invalid Request!');
  }
});

server.listen(8000);
console.log("server running");