const https = require('https');

const hostname = '127.0.0.1';
const port = 3001;
const fs = require('fs');
const homedir = require('os').homedir();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('server.crt')
};

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:4200")
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', '*');
res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Content-Type', 'application/json');

  var fs = require('fs');
  const homedir = require('os').homedir();
const baseUrl = '/ng/payouts/v1';

  console.log('url: ' + req.url);
  console.log('method : ' + req.method);
if ((req.url == baseUrl + '/payees') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/payee-response.json', 'utf8');
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/users') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/user-response.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
})
server.listen(port, hostname, () => {
  console.log(`Server1 running at https://${hostname}:${port}/`);
})
const http = require('http');
const server = http.createServer((req, res)=>{
   const url = req.url;
   if(url === '/'){
      res.write('<html>');
      res.write('<head> <title> Hello TutorialsPoint </title> </head>');
      res.write(' <body> <form action="/username" method="POST"> <input type="text" name="username"/>       <button type="submit">Submit</button> </body>');
      res.write('</html>');
      return res.end();
   }
   res.write('<html>');
   res.write('<head> <title> Hello TutorialsPoint </title> </head>');
   res.write(' <body> Hello </body>');
   res.write('</html>');
   res.end();
});
server.listen(3000);;
