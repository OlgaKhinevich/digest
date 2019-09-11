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

$(document).ready(function() {
    $('.paragraph1-2, .paragraph2-2, .paragraph3-2, .employer').css('display','none');
    $('.paragraph1-1, .paragraph2-1, .paragraph3-1, .freelancer').css('display','block');
});

$('#button-click2').on('click', function(){
    $('.paragraph1-1, .paragraph2-1, .paragraph3-1, .freelancer').css('display','none');
    $('.paragraph1-2, .paragraph2-2, .paragraph3-2, .employer').css('display','block');
})

$('#button-click1').on('click', function(){
    $('.paragraph1-2, .paragraph2-2, .paragraph3-2, .employer').css('display','none');
    $('.paragraph1-1, .paragraph2-1, .paragraph3-1, .freelancer').css('display','block');
})











  
