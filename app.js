var d=crypto.randomUUID();
function myfunction() {
   
    var c=alert(d)
    var e = prompt("Please enter your name", "Harry Potter");
    if(d===e){
      window.location.href = `https://chat1-ozya.onrender.com/`
      
    }
    else{
      window.location.href =`https://javascript.info/`
    }

  }
  function server(){
    var e = prompt("Please enter your name");
    if(d===e){
      window.location.href = `https://sandeshhd.github.io/enchatt/chat/?id=${d}`
      
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
  
 
    
      