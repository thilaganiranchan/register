var emailArray=[];
var passwordArray=[];

var regBox = document.getElementById("register");
var loginBox = document.getElementById("login");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab= document.getElementById("rt");

function regTabFun()
{
  event.preventDefault();
  regBox.style.visibility="visible";
  loginBox.style.visibility="hidden";
  forgetBox.style.visibility="hidden";
  regTab.style.backgroundColor="rgb(12, 132, 189)";
  loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun()
{
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun()
{
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}

function register()
{
   event.preventDefault();
   var email = document.getElementById("re").value;
   var password = document.getElementById("rp").value;
   var passwordRetype = document.getElementById("rrp").value;
   if(email=="")
   {
    alert("Email required."); 
    return ;
   }
   else if (password == "")
   {
    alert("password required.");
    return ;
   }
   else if (passwordRetype == "")
   {
     alert("password required.");
     return ;
   }
   else if (password !=passwordRetype){
    alert("password dont't match retype your password.");
    return ;
   }
   else if (emailArray.indexOf(email) == -1)
   {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + "THanks for registration. \nTry to login Now");

    document.getElementById("re").value ="";
    document.getElementById("rp").value="";
    document.getElementById("rrp").value="";
   }
}

function login()
{
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i=emailArray.indexOf(email);
    if(emailArray.indexOf(email) == -1)
    {
       if (email ==""){

        alert("Email required.");
        return ;
       }
       alert("Email does not exist.");
       return ;
    }
    else if(passwordArray[i] !=password){
      if (password == ""){
        alert("Password required.");
        return ;
      }
      alert("Password does not match.");
      return ;
    }
    else{
      alert(email+"Login successfull welcome");
      document.getElementById("se").value ="";
      document.getElementById("sp").value ="";
    }
    
}

function forgot()
{
   event.preventDefault();
   var email = document.getElementById("fe").value;
   
   if(emailArray.indexOf(email) == -1){
   if(email == ""){
    alert("Email required.");
    return ;
   }
   alert("Email does not exist.");
   alert ;
  }

  alert("email is and to your email check it in 24hr. \n Thnaks");
  document.getElementById("fe").value ="";
}