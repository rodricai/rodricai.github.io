$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('.boton-subir').fadeIn(); 
      } else { 
          $('.boton-subir').fadeOut(); 
      } 
  }); 
  $('.boton-subir').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});