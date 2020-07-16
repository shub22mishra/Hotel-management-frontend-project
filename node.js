
var express=require('express')
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res)
{
console.log("got a GET request for homepage");
//res.send('hello home');
res.sendFile( __dirname  + '/lookin.html' );  
});



app.get('/Services',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/try.html');
});

app.get('/Mode',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/mode.html');
});

app.get('/architect',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/arch.html');
});
app.get('/Price',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/price.html');
});
var server=app.listen(3020,function()
{
    console.log('server started');
});
</body>
</html>
