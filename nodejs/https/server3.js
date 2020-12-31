const http = require('http');
const server = http.createServer((req, res)=>{
   const url = req.url;
   if(url === '/'){
      res.write('<html>');
      res.write('<head> <title> Hello TutorialsPoint </title> </head>');
      res.write(' <body> <form action="http://localhost:4000" method="POST"> <input type="text" name="username"/>       <button type="submit">Submit</button> </body>');
      res.write('</html>');

return res.end();
}});
server.listen(3000);
 console.log(`Server3 running at https:`);

