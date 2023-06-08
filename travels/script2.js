function validation()
{
var username = document.getElementById("mail").value;
var password = document.getElementById("pwd").value;

var user = "sandeep@gmail.com";
var pass = "12345678";
var attempt=3;

if(username != user || password != pass)
{
alert("Please enter correct Credentials!!!!");
}
if(password==pass && username==user)
{
window.location.href ="maya.html";
}
}