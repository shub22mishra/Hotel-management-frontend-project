const http=require('http');
const fs=require('fs');

fs.readFile('home.html',function(err,data){
    if(err)
        throw err;
    http.createServer(function(request,response){
    //    response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
    }).listen(8080);
});
console.log("server running at http://localhost:8080/");