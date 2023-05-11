http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(req,res){
    var path=url.parse(req.url).pathname;
    console.log('request for'+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    res.write('hello'+name+', your email'+email);
    res.end();
    
}
http.createServer(onRequest).listen(8000);
console.log('Server Has Started');