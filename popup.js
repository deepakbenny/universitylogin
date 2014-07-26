var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
var url = "http://192.168.100.100:8090/login.xml";

var params = "mode=191&";
if(!username.trim() || !password.trim() ){
  document.getElementById("status").innerHTML += "Error";
}
else{
  params += "username=" + username + "&password=" + password;
  params += "&producttype=0";
  xhttp = new XMLHttpRequest();
  xhttp.open("POST",url,true);
  xhttp.send(params);

  //add id status=200 then okay
  document.getElementById("status").innerHTML = "Connected";
}