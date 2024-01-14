var d=crypto.randomUUID();
document.getElementById('myField').value = d

function myfunction() {
   
    var c=alert(d+"  <-- copy this link")
    var e = prompt("Paste the link below");
   
    if(d===e){
      window.location.href = `https://chat1-ozya.onrender.com/?id=${d}`
      
    }
    else{
      window.location.href =`https://javascript.info/`
    }

  }
 
  ScrollReveal({ 
    reset: true ,
    distance:'180px',
    duration:2000,
    delay:50                 
});
ScrollReveal().reveal('.header',{delay:100,origin:'top',interval:600});
ScrollReveal().reveal('.main',{delay:100,origin:'bottom',interval:600});
ScrollReveal().reveal('.first',{delay:100,origin:'bottom',interval:600});
ScrollReveal().reveal('.second',{delay:100,origin:'bottom',interval:600});
ScrollReveal().reveal('.third',{delay:100,origin:'bottom',interval:600});

let popup =document.getElementById("popup")
let makeblur =document.getElementById("makeblur")
let main=doucment.getElementById("main")
let first=doucment.getElementById("first")
let header=document.getElementById("header")

function openpopup(){
  
  popup.classList.add("open-popup")

// makeblur.classList.add()
 
//   first.classList.add("first-blur")
//   header.classList.add("header-blur")


}
function closepopup(){
  var e = prompt("Paste the link below");
  var e = prompt("Paste the link below");
   
  if(d===e){
    window.location.href = `https://chat1-ozya.onrender.com/?id=${d}`
    
  }
  else{
    window.location.href =`https://javascript.info/`
  }

 
}







  
 
    
      