/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    //intel.xdk.device.addVirtualPage();
    
     /* button  Proceed */
    
    
        /* button  Proceed */
    
    
        /* button  Proceed */
    
    
        /* button  Proceed */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         var cid = document.getElementById("txtcid").value;
        if(cid === '' || cid === null){
            window.alert("Please Enter Customer ID.");
            return false;
        }
        window.location.href='Det.html';        
        //activate_page("#Details");
        //document.getElementById("txtcid").value='clicked';      
    });
    
        /* button  Exit */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         /*activate_page("#mainpage");*/ 
         navigator.app.exitApp();
        /*window.close();*/
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
  document.addEventListener("intel.xdk.device.hardware.back",function() {
//continue to grab the back button
   //intel.xdk.device.addVirtualPage();
}, false);   
})();
