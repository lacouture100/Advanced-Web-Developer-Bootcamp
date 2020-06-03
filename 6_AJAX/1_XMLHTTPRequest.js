var XHR = new XMLHttpRequest();

//My API endpoint
var myAPI = 'https://api.github.com/zen';

XHR.onreadystatechange = function() {
    //Log every state change
    console.log(`READY STATE CHANGE IS...${XHR.readyState}`);
    //When the XHR state is DONE
    if(XHR.readyState ===4){
        //Check if the request went through
        if(XHR.status == 200){
            console.log('REQUEST WENT THROUGH');
            console.log(XHR.responseText);
        }else{
            console.log('REQUEST FAILED');
        }
    }
}
//We tell it what type of request to make
XHR.open("GET", myAPI);

XHR.send();
