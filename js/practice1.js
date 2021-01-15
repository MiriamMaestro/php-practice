$(document).ready(() => {
    const $btnRun = $('#btnRun');
$btnRun.on('click', () => {
    //var selectedCountry = $("#selCountry :selected").val();
   //var selectedLatitud = $("#selCountry :selected").attr("data-latitud").val();
  // var selectedAltitud = $("#selCountry :selected").attr("data-altitud").val();
  
   $.ajax({
    url: "php/practice2.php",
    type: 'POST',
    dataType: 'json',
    data: {
        //latitud: $("#selCountry :selected").attr("data-latitud").val(),
        //altitud: $("#selCountry :selected").attr("data-altitud").val()
        latitud: $("#selCountry").attr("data-latitud"),
        altitud: $("#selCountry").attr("data-altitud")
    },
    success: function(result) {

        console.log(result);

        if (result.status.name == "ok") {

            $('#sunrise').html(result['data']['sunrise']);
            $('#sunset').html(result['data']['sunset']);
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
});


/*$(document).ready(function(){
$('#btnRun').click(function() {

    $.ajax({
        url: "php/practice2.php",
        type: 'POST',
        dataType: 'json',
        data: {
            latitud: $('#selCountry').val(),
            altitud: $('#selLanguage').val()
            //latitud: selectedLatitud,
           // altitud: selectedAltitud
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#sunrise').html(result['data']['sunrise']);
                $('#sunset').html(result['data']['sunset']);
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
});
*/