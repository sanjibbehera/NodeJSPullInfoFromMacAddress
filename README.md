# NodeJSPullInfoFromMacAddress
Call a REST API via Command Line and Retrieve Information from MAC ADDRESS!!

## Information about the approach to the solution.
    URL 'https://macaddress.io/' provides information about MAC ADDRESS.  
    We can retrieve information via REST API hosted at 'https://api.macaddress.io/v1'  
    Either by Query Based Authentication or Header Based Authentication.  
    I have used Header Based Authentication here to retrieve the details via MAC Address.  
    Also an appropriate API_TOKEN has to be provided to get the details or the call will fail.
    
    This is simple representation to achieve the requirement via MAC Address.  
    This Repository can be extended to incorporate more functionality, such as  
     i) Check the feasibility if we can incorporate JWT here instead of directly passing Token in HTTPS Header.
     ii) Use options like get/set methods to dynamically apply/retrieve MAC Address or API Tokens   
     iii) To add separate logging file and as well as redirect logging to stdout.  
     iv) To add debugging capabilities  
     v) To extend error handling capabilities  
     vi) To add testing capabilities that check the source code for any flaws and prepare test report.  

### Steps to execute the code in normal Linux VM.
    Below is the example, how to retrieve the Company info by providing MAC Address in command line. 
    How to run this program in Linux Server.  
    Pre-requisite:  
    Node.js & GIT must be installed in the Linux environment and access to Internet is a must.  
    Download the Git Repo from GITHUB using the below URL.  
    git clone https://github.com/sanjibbehera/NodeJSPullInfoFromMacAddress.git   
    cd NodeJSPullInfoFromMacAddress; npm install  
    node server.js 44:38:39:ff:ef:57 <API_TOKEN>  
    If we do not provide any arguments, below Error can be seen.   
    Invalid argument provided, pass MAC address & the API_TOKEN as parameter to the program!!   
    Proper Example is: node server.js <MAC ADDRESS> <API_TOKEN> 
    

### Steps to execute the code in normal Docker Host.
    How to run this program in Docker Host.  
    Pre-requisite:  
    Docker & GIT must be installed in the Unix environment and access to Docker Hub is a must.  
    Download the Git Repo from GITHUB using the below URL.  
    git clone https://github.com/sanjibbehera/NodeJSPullInfoFromMacAddress.git  
    Execute the below 2 command steps to run as Dockerized Container.  
    cd NodeJSPullInfoFromMacAddress; docker build -t macapps .  
    docker run -it macapps 44:38:39:ff:ef:57 <API_TOKEN>

#### Output of the Program for a valid Mac Address should look below:-   
<b> Vendor Details of the provided MAC Address <44:38:39:ff:ef:57> is: Cumulus Networks, Inc having Address: 650 Castro Street, suite 120-245 Mountain View CA 94041 US</b>
