jQuery(function(f){
    f(window).scroll(function(){
        var element = f('#howitworks .animation-1, #howitworks .animation-2'); 
        element['fade'+ (f(this).scrollTop() > 30 ? 'In': 'Out')](800); 
        element = f('#howitworks .heading-text'); 
        element['fade'+ (f(this).scrollTop() > 40 ? 'In': 'Out')](800); 
        element = f('#howitworks .switches');  
        element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](800);  
    });
});












  
