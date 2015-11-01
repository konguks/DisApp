/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     
     /* listitem  Listitem */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #btncreatetkt */
    $(document).on("click", "#btncreatetkt", function(evt)
    {
         /*global activate_page */         
        window.location.href='Map.html';
    });
    
        /* button  #btnext */
    $(document).on("click", "#btnext", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        navigator.app.exitApp();
    });
    
        /* button  #btncrttkt */
    $(document).on("click", "#btncrttkt", function(evt)
    {
         /*global activate_page */
          window.location.href='Map.html';
    });
    
        /* button  #btnpcd */
    $(document).on("click", "#btnpcd", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        window.location.href='Map.html';
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
