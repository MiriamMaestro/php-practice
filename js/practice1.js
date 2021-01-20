$(document).ready(() => {
    const $btnRun = $('#btnRun');
    const $btnRun2 = $('#btnRun2');
    const $btnRun3 = $('#btnRun3');
$(window).on('load', function () {
    if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function () {
    $(this).remove();
    });
}})
$btnRun.on('click', () => {
 
   $.ajax({
    url: "php/TimeZone.php",
    type: 'POST',
    dataType: 'json',
    data: {
        latitud: $("#selCountry").find('option:selected').attr("data-latitud"),
        altitud: $("#selCountry").find('option:selected').attr("data-altitud")
    },
    success: function(result) {

        console.log(result);

        if (result.status.name == "ok") {

            $('#sunrise').html('Sunrise: ' + result['data']['sunrise']);
            $('#sunset').html('Sunset: '+result['data']['sunset']);

        }
      
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("it´s not working");
    }
}); 

$('.container').toggleClass('hide');

});
$btnRun2.on('click', () => {
 
   $.ajax({
    url: "php/Oceano.php",
    type: 'POST',
    dataType: 'json',
    data: {
        latitud: $("#latitud").val(),
        altitud: $("#longitud").val()
    },
    success: function(result) {

        console.log(result);

        if (result.status.name == "ok") {

            $('#ocean').html('Ocean name: ' + result['data']['name']);
            $('#sunset').html(' ');
           
        } 

    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log('No funcion');
    }
}); 
});

$btnRun3.on('click', () => {
 
    $.ajax({
     url: "php/NameStreet.php",
     type: 'POST',
     dataType: 'json',
     data: {
         word: $("#word").val(),
        
     },
     success: function(result) {
 
         console.log(result);
 
         if (result.status.name == "ok") {

            for (i=0; i<result['data'].length ; i++) {
                var tag = document.createElement("p");
                var text = document.createTextNode('Street name: ' + result['data'][i]['street']);
                tag.appendChild(text);
                var element = document.getElementById("sunrise");
                element.appendChild(tag);
            }
         } 
 
     },
     error: function(jqXHR, textStatus, errorThrown) {
         console.log('No funcion');

     }
 }); 


});
});


