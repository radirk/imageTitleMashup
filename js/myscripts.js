function onBefore() {
    $("dd").hide();
}

function onAfter() {
   // $("dd").fadeOut("slow");
   $("dd").fadeIn("slow");
}
$(document).ready(function(){
     
    $('#captioned-images').cycle({
        fx: 'scrollLeft',
        timeout: 5000,
        after: onAfter,
        before: onBefore       
    });   
});
        