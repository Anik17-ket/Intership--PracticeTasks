// server.mjs

 var http = require('http');
 var fs = require('fs');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const url = req.url;
  if(url == '/about'){
    fs.readFile('about.html', function(err,data){
        res.write(data);
        return res.end();
    });
  }

  else if(url=='/test'){
    fs.readFile('test.html',function(err,data){
        res.write(data);
        return res.end();
    });
}
else {
    fs.readFile('contact.html',function(err,data){
        res.write(data);
        return res.end();
    });
}
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
