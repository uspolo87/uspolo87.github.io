
/* show and hide navigation*/



$(document).ready(function(){



  'use strict';

  $(window).scroll(function(){

      'use strict';

      if ($(window).scrollTop() > 20) {


              $('.navbar').css({

                    'background-color':'#129CF3',
                      
                });

              $('.navbar-nav li a').css({
                      
                    'color':'#fff'

                 })
              

                 $('.navbar-brand img').css({

                    'height':'105px',
                    
                   

                 });

               
      }
      else{

               $('.navbar').css({

                    'background-color':'white'
                });


                 $('.navbar-nav li a').css({
                      
                      'padding-top':'15px',
                      'color':'#129CF3'

                 })


                 


      }



  });



});

$('document').ready(function(){

    'use strict';


  $('.navbar-nav li a').click(function(){

    $('.navbar-nav li a').parent().removeClass('active');
    $(this).parent().addClass('active');
         


  });

})



$(document).ready(function(){
      $('.bxslider').bxSlider({
        
       slideWidth:650.5,
        auto:true,
        minSlides:1,
        maxSlides:1,
        sliderMargin:50

      });
    });


$(document).ready(function(){

    $('.counter-number').counterUp({
         
         delay:10,
         time:2000

    });



});

$(document).ready(function(){
    'use strict';

    new WOW().init();
})