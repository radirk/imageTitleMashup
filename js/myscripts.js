function onBefore() {
    $(this).children("dd").hide();
}

function onAfter() {
   // $("dd").fadeOut("slow");
   $(this).children("dd").fadeIn("slow");
}
$(document).ready(function(){
     
    $('#captioned-images').show();
    $('#captioned-images').cycle({
        fx: 'scrollLeft',
        timeout: 5000,
        after: onAfter,
        before: onBefore       
    });   
});
        