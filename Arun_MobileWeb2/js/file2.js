const info = `Fall 2022 Assignment #2 for Arun from  India`;
document.getElementById('information').innerHTML = info;

const info2 = `My Login: Arun Kumar / My ID: 991617387 / My Program: PCPRG`;
document.getElementById('footerinfo').innerHTML = info2;


var url = "myjson3.json";

var data;


$.getJSON(url, function (_data) {
    data = _data;
    $.each(data, function (index, value) {
        $('#albata').append('<option value="' + index + '">' + value.name + 
'</option>');
});
});




$("select").change(function(){
    $(this).find("option:selected").each(function(){
         optionValue = $(this).attr("value");
      
        if(optionValue){ 
            
          details= data[optionValue].details;
          course1= data[optionValue].course1;
          course2= data[optionValue].course2;
          course3= data[optionValue].course3;
        //   longitude = data[optionValue].longitude;
        //   latitude = data[optionValue].latitude;
        //   city= data[optionValue].cities;
       
        //   $('#one').text(details);
        //   $('#two').text(longitude);
        //   $('#three').text(latitude);

        localStorage.setItem("details",details);
        localStorage.setItem("course1",course1);
        localStorage.setItem("course2",course2);
        localStorage.setItem("course3",course3);
       

        window.location="page4.html";
        } 
    });
}).change();


function loadValues4()
{
    var details = localStorage.getItem("details");
    var course1 = localStorage.getItem("course1");
    var course2 = localStorage.getItem("course2");
    var course3 = localStorage.getItem("course3");

    $('#one').text(details);
    $('#two').text(course1);
    $('#three').text(course2);
    $('#four').text(course3);
}


