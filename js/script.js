var dd=parseInt(prompt("Enter your birth  date"));
var mm=parseInt(prompt("Enter the month you born with"));
var yyy=parseInt(prompt("Enter the year you born with"));
 var gender=prompt("Enter your gender "); 
var cc=parseInt(prompt("Enter your century"));
var mNames=['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame']; 
 
var d=( (( (cc/4) -2*cc-1) + ((5*yyy/4) ) + ((26*(mm+1)/10)) + dd ) %7);
var day=Math.floor(d);
alert(day);
alert(gender);
 if(day===0 && gender==='male'){
 alert("your Akaname is kwasi")
 }
 else if(day===1 && gender==='male'){ 
 alert("your Akaname is Kwadwo")
 }
 else if(day===2 && gender=='male'){
 alert("your Akaname is Kwabena")
 }
 else if(day===3 && gender==='male'){
 alert("your Akaname is Kwaku")
 }
 else if(day==4 && gender==='male'){
 alert("your Akaname is Yaw")
 }
 else if(day===5 && gender==='male'){
 alert("your Akaname is Kofi")
 }
 else if(day===6 && gender==='male'){
 alert("your Akaname is Kwame")
 }
 else if(day===0 && gender==='female'){
 alert("your Akaname is Akosua")
 }
 
 else if(day===1 && gender==='female'){
 alert("your Akaname is Adwoa")
 }
 else if(day===2 && gender==='female'){
 alert("your Akaname is Abenaa")
 }
 else if(day===3 && gender==='female'){
 alert("your Akaname is Akua")
 
 }
 else if(day===4 && gender=='female'){
 alert("your Akaname is Yaa")
 
 }
 else if(day===5 && gender==='female'){
 console.log("your Akaname is Afua")
 }
 else if(day===6 && gender==='female'){
 alert("your Akaname is Ama")}
 else{
 alert("try again!")
 } 