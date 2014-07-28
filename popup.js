chrome.browserAction.onClicked.addListener(userLogin);

function userLogin(){ 
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  var url = "http://192.168.100.100:8090/login.xml";
  var params = "mode=191&";
  if(username == null || password == null ){
    //document.getElementById("redstatus").innerHTML = "Error </br>Fill in options page";
  }
  else{
    params += "username=" + username + "&password=" + password;
    params += "&producttype=0";
    xhttp = new XMLHttpRequest();
    xhttp.open("POST",url,true);
    xhttp.send(params);
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == 4) {
        if(xhttp.responseText.indexOf("logged in") != -1)
          alert("Connected");
        else
          alert("Wrong username or password");
      }
    }
    //add id status=200 then okay
   // document.getElementById("login").innerHTML = "Logged In";
    //document.getElementById("greenstatus").innerHTML = "Connected";
  }
}