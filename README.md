# NodeJSPullInfoFromMacAddress
Call a REST API via Command Line and Retrieve Information from MAC ADDRESS!!

<b> The actual REST API used in this program.</b>  
https://api.macaddress.io/v1?apiKey=at_D7J4WtYNagBtjGcaOtaW33nzeYp5x&output=json&search=<MAC ADDRESS>

<b> the below is example of how to get the Company info by providing MAC Address.</b>  
node server.js 44:38:39:ff:ef:57

<b> How to run this program in Docker Host.</b>  
<b> Pre-requisite:</b>  
<b> Docker & GIT must be installed in the Unix environment and access to Docker Hub is a must.</b>  
<b> Download the Git Repo from GITHUB using the below URL.</b>  
<b> git clone https://github.com/sanjibbehera/NodeJSPullInfoFromMacAddress.git</b>  
<b> Execute the below 2 command steps to run as Dockerized Container.</b>  
<b> cd NodeJSPullInfoFromMacAddress; docker build -t macapps .</b>  
<b> docker run -it macapps 44:38:39:ff:ef:57</b>

### Output of the Program for a valid Mac Address should look below:-   
### Vendor Details of the provided MAC Address <44:38:39:ff:ef:57> is: Cumulus Networks, Inc having Address: 650 Castro Street, suite 120-245 Mountain View CA 94041 US
