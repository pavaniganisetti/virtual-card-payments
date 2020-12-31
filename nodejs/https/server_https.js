const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;
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
  const payeeId = '939899';
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
  else if ((req.url == baseUrl + '/payees/943755') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/payee-response-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/payees/939899') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/payee-response-939899.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755') && (req.method == 'PUT')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/edit-payee-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }



  else if ((req.url == baseUrl + '/payees/'+payeeId+'/payouts') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  } 
  else if ((req.url == baseUrl + '/payees/'+payeeId+'/creditaccounts') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-creditaccounts-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755/tmppayees') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-temp-payee.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755/tmpversions') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-payee-temp-version-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755/creditaccounts') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 
  else if ((req.url == baseUrl + '/payees/943755/tmpcreditaccounts') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-temp-creditaccount-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  } 

  else if ((req.url == baseUrl + '/payees/943755/creditaccounts/985655/tmpversions') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-tempversion-943755-985655.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/939899/creditaccounts/976954/tmpversions') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-tempversion-943755-985655.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

if ((req.url == baseUrl + '/payees/943755/creditaccounts/985655') && (req.method == 'PUT')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url == baseUrl + '/payees/939899/creditaccounts/976954') && (req.method == 'PUT')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755/payouts') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-payout-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }


  else if ((req.url == baseUrl + '/payees/lists') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/retrive-payee-post.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url == baseUrl + '/payees/lists') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/retrive-payee-get.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url == baseUrl + '/payees') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-payee-response.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url == baseUrl + '/partners') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/partner-data-response.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url == baseUrl + '/masterdata') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/master-data-response.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url.startsWith(baseUrl + '/masterdata/creditaccountfieldrequirements')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/creditaccounts-fields-response.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url == baseUrl + '/payees/161454/payouts') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-payout-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url == baseUrl + '/payees/161454/payouts') && (req.method == 'PUT')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-payout-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/payees/943755/payouts/616298') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755-616388.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/payees/943755/payouts/616382') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755-616388.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/payees/943755/payouts/616413') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755-616388.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url == baseUrl + '/payees/943755/payouts/616388') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755-616388.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url.startsWith(baseUrl + '/payees/939899/payouts/')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-943755-616388.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }


 else if ((req.url.startsWith(baseUrl + '/payees/'+payeeId+'/creditaccounts/') )&& (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-creditaccounts-943755-985434.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url == baseUrl + '/payees/943755/tmppayouts') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-temp-payout-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url == baseUrl + '/payees/943755/payouts/616382/tmpversions') && (req.method == 'POST')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-temp-payout-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

 else if ((req.url == baseUrl + '/payees/943755/creditaccounts/985434') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/create-creditaccount-943755.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
 else if ((req.url == baseUrl + '/settlements/lists') && (req.method == 'POST')) {
	console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
	var contents = fs.readFileSync(homedir + '/mock/' + 'get-settlements-list.json','utf8');
	console.log('contents = ' + contents);
	res.end(contents);
 }
 else if ((req.url == baseUrl + '/settlements/4128') && (req.method == 'GET')) {
	console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
	var contents = fs.readFileSync(homedir + '/mock/' + 'get-settlement-details-4128.json','utf8');
	console.log('contents = ' + contents);
	res.end(contents);
 }

 else if ((req.url == baseUrl + '/payoutfiles/lists') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payout-files-list.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url.startsWith(baseUrl + '/payoutfiles')) && (req.url.endsWith('/payouts')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-of-payout-file-6317.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url.startsWith(baseUrl + '/payoutfiles')) && (req.url.endsWith('/conversions')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-conversions-of-payout-file-6317.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
else if ((req.url == baseUrl + '/payees/payoutfiles/4128/rates') && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/rates.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

  else if ((req.url.startsWith(baseUrl + '/settlements')) && (req.url.endsWith('/payouts')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-payouts-of-payout-file-6317.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }
  else if ((req.url.startsWith(baseUrl + '/settlements')) && (req.url.endsWith('/conversions')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-conversions-of-payout-file-6317.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }

   else if ((req.url.startsWith(baseUrl + '/conversions')) && (req.method == 'GET')) {
        console.log('Sending response for : ' + req.url + ' Method : ' + req.method);
        var contents = fs.readFileSync(homedir + '/mock/' + '/get-conversion-details.json', 'utf8');
        console.log('contents = ' + contents);
        res.end(contents);
  }


  else {
        console.log('Unrecognized path : ' + req.url + '-' + req.method);
	res.end('Unrecognized path :' + req.url + '-' + req.method);
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
