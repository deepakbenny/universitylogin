chrome.browserAction.onClicked.addListener(jarviS);

window.onbeforeunload = function() {
  localStorage.setItem("log",false);
  return '';
}

//check internet connection
function checkConnection(){
  if (navigator.onLine) {
    return true;
  }
  else {
    return false;
  }
}
//check fields
function checkFields(){
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  if (username == undefined || password == undefined){
    return false;
  }
  else
    return true;
}
//login logout function
function checkLog(){
  return localStorage.getItem("log");
}

//JARVIS
function jarviS(){
  var logstring;
  var message;
  var url;
  var conn = checkConnection();
  var field = checkFields();
  if(conn){
    if(field){
      var checkL = checkLog();
      if(checkL == "running"){
        localStorage.setItem("log",false);
        logstring = makeLogString("193");
        message = "logged out";
        url = "http://192.168.100.100:8090/logout.xml";
      } 
      else{
        localStorage.setItem("log","running");
        logstring = makeLogString("191");
        message = "connected";
        url = "http://192.168.100.100:8090/login.xml";
      }
      userLogin(url,logstring,message);
    }
    else{
      alert("fill username and password in options page")
    }
  }
  else{
    alert("Not connected to network");
  }
}

function makeLogString(mode){
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  var params = "mode=" + mode + "&";
  params += "username=" + username + "&password=" + password;
  params += "&producttype=0";
  return params;
}

function userLogin(url,params,message){ 
  xhttp = new XMLHttpRequest();
  xhttp.open("POST",url,true);
  xhttp.send(params);
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4) {
      if(xhttp.responseText.indexOf("successfully") != -1)
        alert(message);
      else 
        alert("Wrong username or password");
    }
  }
}