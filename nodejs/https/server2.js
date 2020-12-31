const http = require('http');
const server = http.createServer((req, res)=>{
   const url = req.url;
   res.write('<html>');
   res.write('<head> <title> Hello TutorialsPoint </title> </head>');
   res.write(' <body> Hello </body>');
   res.write('</html>');
   res.end();
});
server.listen(4000);
 console.log(`Server4 running at https:`);

