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
        var pwd = document.getElementById("txtpwd").value;
        if(cid === '' || cid === null){
            window.alert("Please Enter Customer ID.");
            return false;
        }
        if(pwd === '' || pwd === null){
            window.alert("Please Enter Password.");
            return false;
        }
        
        //var uri = 'http://localhost:5104/api/Login/Validate?'+'cid='+cid+'&pwd='+pwd;
        
        /*$.getJSON(uri).done(function(data){
            window.alert(data);
        });*/
        
          /* $.ajax({
        type: "GET",
        url: uri,        
        async:true,
        dataType : 'jsonp',   //you may use jsonp for cross origin request
        crossDomain:true,
        success: function(data) {
            window.alert(data);
        }
    });*/
        //$.getScript("intelxdk.js",function(){});
        intel.xdk.services.ValidateLogin({"cid":cid,"pwd":pwd}).then(function (response) {
            //var res =JSON.stringify(response);
            
            if(response.Response.resp === 'Success'){
             window.location.href='Det.html'; 
                return false;
            }
            else{
                alert(response.Response.resp);
            }
         
        });                                      
        
        
        //window.location.href=uri;
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
