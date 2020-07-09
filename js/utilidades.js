
$(document).ready(function () {
    $('#dotsbanner').show();
    $('#morebanner').hide();
});

$('#leermasbanner').click(function () {
    if ($('#leermasbanner').text() == 'Leer más') {
        $('#morebanner').fadeIn();
        $('#leermasbanner').text('Leer menos');
    } else {
        $('#morebanner').fadeOut();
        $('#leermasbanner').text('Leer más');
    }
});


$('.optionMenu').click(function () {
    var linkHref = $(this).attr("href");
    var idElement = linkHref.substr(linkHref.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(idElement).offset().top
    }, 1000);
    return false;
});