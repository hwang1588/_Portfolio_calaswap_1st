$(document).ready(function () { 
    $('#carousel-btn-1').addClass('trans-x-10');
});

$('#carousel-btn-1').click(function () { 
        $("#carousel-btn-1").addClass('trans-x-10');
        $("#carousel-btn-2, #carousel-btn-3, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10');
});

$('#carousel-btn-2').click(function () { 
        $("#carousel-btn-2").addClass('trans-x-10');
        $("#carousel-btn-1, #carousel-btn-3, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10');
});

$('#carousel-btn-3').click(function () { 
    $("#carousel-btn-3").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10');
});

$('#carousel-btn-4').click(function () { 
    $("#carousel-btn-4").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-3, #carousel-btn-5").removeClass('trans-x-10');
});

$('#carousel-btn-5').click(function () { 
    $("#carousel-btn-5").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-3, #carousel-btn-4").removeClass('trans-x-10');
});


