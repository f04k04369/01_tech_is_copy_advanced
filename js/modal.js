'use strict' ;
$(document).ready(function() {
    $('#sp-menu').on('click', function(){
        $('#nav-sp-wrapper__list').addClass('nav-sp-wrapper__list--show');
        $('#sp-menu-background').addClass('sp-menu-background--show');
    })
})

$(document).ready(function() {
    $('#sp-menu-background').on('click', function(){
        if($('#nav-sp-wrapper__list').hasClass('nav-sp-wrapper__list--show')){
            $('#nav-sp-wrapper__list').removeClass('nav-sp-wrapper__list--show');
            $('#sp-menu-background').removeClass('sp-menu-background--show');
        }
    })
})

