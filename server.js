const https = require('https');

var macaddrpath = '/v1?apiKey=at_D7J4WtYNagBtjGcaOtaW33nzeYp5x&output=json&search=';


/*
const readline = require('readline-sync');
var macaddrpath = '/v1?apiKey=at_D7J4WtYNagBtjGcaOtaW33nzeYp5x&output=json&search=';
let macaddrinfo = readline.question('Provide the MAC Address for which you want to know the Company details?');
macaddrpath += macaddrinfo;
console.log('STDIN Entry is: '+ macaddrinfo);
console.log('MAC Addr path is: '+ macaddrpath);*/

var length = process.argv.length;
if(length != 3){
    console.log('Invalid argument provided, pass MAC address as parameter to the program!!');
    console.log('Proper Example is: node server.js <MAC ADDRESS>');
    process.exit(1);
}

var myArgs = process.argv.slice(2);
macaddrinfo = myArgs[0];
var regexp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
var bool = regexp.test(macaddrinfo);
if(!bool){
    console.log('Invalid MAC Address provided to the program!!');
    process.exit(1);
}
macaddrpath += macaddrinfo;

const options = {
  hostname: 'api.macaddress.io',
  port: 443,
  path: macaddrpath,
  method: 'GET'
}

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
         var jsonObject = JSON.parse(data);
         var CompanyName = jsonObject.vendorDetails.companyName;
         var CompanyAddress = jsonObject.vendorDetails.companyAddress;
         console.log('Vendor Details of the provided MAC Address <' + macaddrinfo +  '> is: '  + CompanyName + ' having Address: ' + CompanyAddress);
         //console.log(jsonObject.vendorDetails);
    });
  });
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  req.end();