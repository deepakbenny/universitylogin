var button = document.getElementById('save');
button.onclick = save_contents;

window.onload = function(){ 
  var username = localStorage.getItem("username");
  var pass = localStorage.getItem("password");
  document.getElementById("username").value = username;
  document.getElementById("password").value = pass;
}


function save_contents(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(!username.trim() || !password.trim() ){
    document.getElementById("redstatus").innerHTML = "Enter All fields";
    document.getElementById("greenstatus").innerHTML = "";
  }else{
    document.getElementById("redstatus").innerHTML = "";
    document.getElementById("greenstatus").innerHTML = "Success! Click the extension";
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);   
  }
}