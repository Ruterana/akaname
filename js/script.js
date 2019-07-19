
var dd=parseInt(prompt("Enter your birth  date"));
var mm=parseInt(prompt("Enter the month you born with"));
var yyy=parseInt(prompt("Enter the year you born with"));
var gender=prompt("Enter your gender ");
var cc=parseInt(prompt("Enter your century"));
 
var d=( (( (cc/4) -2*cc-1) + ((5*yyy/4) ) + ((26*(mm+1)/10)) + dd ) %7);
var day=Math.floor(d);
 
 
