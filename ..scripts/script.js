window.onload = function(){

   var button = document.querySelector(".btn");
   
   button.addEventListener( 'click', SayHello)
   function SayHello(){
      var h1 = document.querySelector(".h1");
      h1.innerHTML += "Привет Бабей!!!"
      console.log(h1.value)
   }
}