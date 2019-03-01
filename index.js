$(document).ready(function(){

    $("#logo").click(function(){
        showHide("#home","#services","#about","#contact");
    })
    $("#servicesbutt").click(function(){
        showHide("#services","#home","#about","#contact");
    })
    $("#aboutbutt").click(function(){
        showHide("#about","#services","#home","#contact");
    })
    $("#contactbutt").click(function(){
        showHide("#contact","#services","#about","#home");
    })
    
    
    
    
    })
    
    var showHide = function(a,b,c,d){
    $(a).slideDown();
    $(b).slideUp();
    $(c).slideUp();
    $(d).slideUp();
    
    }