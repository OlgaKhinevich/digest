jQuery(function(f){
    f(window).scroll(function(){
        var element = f('#howitworks .animation-1, #howitworks .animation-2'); 
        element['fade'+ (f(this).scrollTop() > 30 ? 'In': 'Out')](800); 
        element = f('#textSlide1 .number1');
    });
});

$(window).scroll(function(){  
    if ($(window).scrollTop() > 430){
        $(".number1 p").css("color", "#235859");
        $(".paragraph1 h3").animate("transform", "scaleX(1)");
    }
    if($(window).scrollTop() > 490){
        $(".number2 p").css("color", "#235859");
        $(".number1 p").css("color", "#ffffff");
    }
    if($(window).scrollTop() > 690){
        $(".number3 p").css("color", "#235859");
        $(".number2 p").css("color", "#ffffff");
    }
    if($(window).scrollTop() > 1000){
        $(".number3 p").css("color", "#ffffff");
    }
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











  
