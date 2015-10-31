/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     
     //$(document).ready(function(){
         //$("#lst").append('<li class="widget uib_w_6 ui-li-static ui-body-inherit ui-first-child" data-uib="jquery_mobile/listitem" data-ver="0"><span>New Ticket</span></li>');
        // $("#lst").append('<li class="widget uib_w_7 ui-li-static ui-body-inherit ui-last-child" data-uib="jquery_mobile/listitem" data-ver="0"><span>Existing Ticket</span></li>');
     //});
    
    
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
         //activate_page("#mainpage"); 
        window.location.href='Map.html';
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
