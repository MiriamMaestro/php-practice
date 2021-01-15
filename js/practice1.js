$(document).ready(() => {
    const $btnRun = $('#btnRun');
     const $btnRun2 = $('#btnRun2');
$btnRun.on('click', () => {
    //var selectedCountry = $("#selCountry :selected").val();
   //var selectedLatitud = $("#selCountry :selected").attr("data-latitud").val();
  // var selectedAltitud = $("#selCountry :selected").attr("data-altitud").val();
  
   $.ajax({
    url: "php/TimeZone.php",
    type: 'POST',
    dataType: 'json',
    data: {
        //latitud: $("#selCountry :selected").attr("data-latitud").val(),
        //altitud: $("#selCountry :selected").attr("data-altitud").val()
        latitud: $("#selCountry").find('option:selected').attr("data-latitud"),
        altitud: $("#selCountry").find('option:selected').attr("data-altitud")
    },
    success: function(result) {

        console.log(result);

        if (result.status.name == "ok") {

            $('#sunrise').html('Sunrise: ' + result['data']['sunrise']);
            $('#sunset').html('Sunset: '+result['data']['sunset']);
            //$('#txtLanguages').html(result['data'][0]['languages']);
            //$('#txtPopulation').html(result['data'][0]['population']);
            //$('#txtArea').html(result['data'][0]['areaInSqKm']);

        }
      
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // your error code
        console.log("no quena");
    }
}); 


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

            $('#sunrise').html('Ocean name: ' + result['data']['name']);
            

        } 

    },
    error: function(jqXHR, textStatus, errorThrown) {
        
        $('#sunset').html('No hay oceano');
    }
}); 


});
});


