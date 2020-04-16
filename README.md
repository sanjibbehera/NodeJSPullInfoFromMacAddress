# NodeJSPullInfoFromMacAddress
Call a REST API via Command Line and Retrieve Information from MAC ADDRESS!!

## Information about the approach to the solution.
    URL 'https://macaddress.io/' provides information about MAC ADDRESS.  
    We can retrieve information via REST API hosted at 'https://api.macaddress.io/v1'  
    Either by Query Based Authentication or Header Based Authentication.  
    I have used Header Based Authentication here to retrieve the details via MAC Address.  
    Also an appropriate API_TOKEN has to be provided to get the details or the call will fail.

    
    This is simple representation to achieve the requirement via MAC Address.  
    This Repository can be extended to invcorporate more functionality, such as   
      i) Use options like get/set methods to dynamically apply/retrieve MAC Address or API Tokens   
      ii) To add separate logging file and as well as redirect logging to stdout.  
      iii) To add debugging capabilities  
      iv) To extend error handling capabilities  


<b> Below is the example, how to retrieve the Company info by providing MAC Address in command line.</b> 
<b> How to run this program in Linux Server.</b>  
<b> Pre-requisite:</b>  
<b> Node.js & GIT must be installed in the Linux environment and access to Internet is a must.</b>  
<b> Download the Git Repo from GITHUB using the below URL.</b>  
<b> git clone https://github.com/sanjibbehera/NodeJSPullInfoFromMacAddress.git</b> 
<b> node server.js 44:38:39:ff:ef:57 <API_TOKEN></b>

<b> How to run this program in Docker Host.</b>  
<b> Pre-requisite:</b>  
<b> Docker & GIT must be installed in the Unix environment and access to Docker Hub is a must.</b>  
<b> Download the Git Repo from GITHUB using the below URL.</b>  
<b> git clone https://github.com/sanjibbehera/NodeJSPullInfoFromMacAddress.git</b>  
<b> Execute the below 2 command steps to run as Dockerized Container.</b>  
<b> cd NodeJSPullInfoFromMacAddress; docker build -t macapps .</b>  
<b> docker run -it macapps 44:38:39:ff:ef:57 <API_TOKEN></b>

#### Output of the Program for a valid Mac Address should look below:-   
<b> Vendor Details of the provided MAC Address <44:38:39:ff:ef:57> is: Cumulus Networks, Inc having Address: 650 Castro Street, suite 120-245 Mountain View CA 94041 US</b>
