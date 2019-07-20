function answerNames () {
     var input = document.getElementById("birthdate").value;
     var gender= document.getElementById("selection").value;
     var cc=document.getElementById("")
     console.log(gender);
     var a = new Date(input);
     yyy = a.getFullYear();
     mm = a.getMonth();
     mm=mm+1;
     dd =a.getDay();
     console.log(yyy);
     console.log(mm);
     console.log(dd);
     

    var d=( (( (cc/4) -2*cc-1) + ((5*yyy/4) ) + ((26*(mm+1)/10)) + dd ) %7);
     var day=Math.floor(d);

     if(day===0 && gender==='male'){
     document.getElementById("name").innerHTML="Kwasi"
     }
     else if(day===1 && gender==='male'){ 
     document.getElementById("name").innerHTML="Kwadwo"
     }
     else if(day===2 && gender=='male'){
     document.getElementById("name").innerHTML="kwabena"
     }
     else if(day===3 && gender==='male'){
     document.getElementById("name").innerHTML ="Kwaku"
     }
     else if (day==4 && gender==='male'){
     document.getElementById("name" ).innerHTML="Yaw"
     }
     else if(day===5 && gender==='male'){
     document.getElementById("name").innerHTML = "Kofi"
     }
     else if(day===6 && gender==='male'){
     document.getElementById("name").innerHTML  ="Kwame"
    }
     else if(day===0 && gender==='female'){
     document.getElementById("name").innerHTML = "Akosua"
     }
    
     else if(day===1 && gender==='female'){
     Document("name").innerHTML= "Adwoa"
     }
     else if(day===2 && gender==='female'){
     Document.getElementById("name") ="Abenaa"
    }
     else if(day===3 && gender==='female'){
     document.getElementById("name")= "Akua"
    
     }
    else if(day===4 && gender=='female'){
    document("name") = "Yaa"
    
    }
     else if(day===5 && gender==='female'){
    document.getElementById("name") .innerHTML= "Afua"
     }
     else if(day===6 && gender==='female'){
     document.getElementById("name")= "Ama"
     
     }
    
}