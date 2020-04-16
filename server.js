const https = require('https');

var length = process.argv.length;
if(length != 4){
    console.log('Invalid argument provided, pass MAC address & the API_TOKEN as parameter to the program!!');
    console.log('Proper Example is: node server.js <MAC ADDRESS> <API_TOKEN>');
    process.exit(1);
}

var myArgs = process.argv.slice(2);
macaddrinfo = myArgs[0];
api_token = myArgs[1];
var regexp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
var bool = regexp.test(macaddrinfo);
if(!bool){
    console.log('Invalid MAC Address provided to the program!!');
    process.exit(1);
}
var macaddrpath = '/v1?output=json&search=';
macaddrpath += macaddrinfo;

const options = {
  hostname: 'api.macaddress.io',
  port: 443,
  path: macaddrpath,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Authentication-Token': api_token
  }
}

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        var jsonObject = JSON.parse(data);
        var keys = Object.keys(jsonObject);        
        if(keys != "error") {
          var CompanyName = jsonObject.vendorDetails.companyName;
          var CompanyAddress = jsonObject.vendorDetails.companyAddress;
          console.log('Vendor Details of the provided MAC Address <' + macaddrinfo +  '> is: '  + CompanyName + ' having Address: ' + CompanyAddress);
         }
         else{
           console.log('Incorrect API Token provided');
         }
    });
  });
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  req.end();