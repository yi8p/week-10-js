$(document).ready(function() {
    // hide
    $('.botanic').hide();

    // divs hidden
    $('.imgdiv').hide();

    $('.flower').click(function() {
        $('.botanic').hide();
        
        $(this).children('.botanic').show();
    });

    // show flowers
    $('.pic').hover(function(evt) {
        // ID
        var imgId = '#' + $(this).attr('title') + 'Img';

        // x+y
        var x = evt.pageX + 150; 
        var y = evt.pageY;

        $(imgId).css({
            top: y + 'px',
            left: x + 'px',
            position: 'absolute' 
        }).show();
    }, function() {
        // hide on mouseout
        var imgId = '#' + $(this).attr('title') + 'Img'; 
        $(imgId).hide(); 
    });

    // keypress jump to first flower
    $(document).keypress(function(evt) {
        //pressed to lowercase
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();

        // pressed key a-z
        if (keyPressed >= 'a' && keyPressed <= 'z') {
            // ID
            window.location = '#' + keyPressed;
        }
    });
});
