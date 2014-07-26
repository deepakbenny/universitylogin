var button = document.getElementById('save');
button.onclick = hello;

function hello(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(!username.trim() || !password.trim() ){
    document.getElementById("status").innerHTML = "Enter All fields";
  }else{
    document.getElementById("status").innerHTML = "Enter All fields";
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);   
  }
}