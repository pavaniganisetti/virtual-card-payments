const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
   var fs = require('fs');
  const homedir = require('os').homedir();
const baseUrl = '/ng/payouts/v1';
  if ((req.url == baseUrl + '/payees') && (req.method == 'GET')) {
  	var contents = fs.readFileSync(homedir + '/mock/' + '/payee-response.json', 'utf8');
	res.end(contents); 
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
