$(document).ready(function() {

    $('.mainMenu .navBar li').on('click', function() {

        let dataName = $(this).attr('data-name'),
            offset = $(`div[data-name= ${dataName}]`).offset().top;

        $(this).addClass('active').siblings().removeClass('active');

        $('html').animate({

            scrollTop : `${offset}`
        });
    })
})