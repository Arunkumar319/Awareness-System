const info = `Fall 2022 Assignment #2 for Arun from  India`;
document.getElementById('information').innerHTML = info;

const info2 = `My Login: Arun Kumar / My ID: 991617387 / My Program: PCPRG`;
document.getElementById('footerinfo').innerHTML = info2;

  var url = "myjson.json";
var data;
let details, flg;
let city;
let citydesc;
var k;
var optionValue;
var x;

$.getJSON(url, function (_data) {
    data = _data;
    $.each(data, function (index, value) {
        $('#sel').append('<option value="' + index + '">' + value.name + 
'</option>');
        
});
  }); 
  $("select").change(function(){
    $(this).find("option:selected").each(function(){
         optionValue = $(this).attr("value");
      
        if(optionValue){ 
            
          details= data[optionValue].details;
          flag = data[optionValue].flg;
          city= data[optionValue].cities;
       
          localStorage.setItem("details",details);
          localStorage.setItem("flag",flag);
          localStorage.setItem("city", JSON.stringify(city));
          
          window.location="page2.html";
           
       
        } 
    });
}).change();




function loadValues()
{
  console.log(optionValue);
    var details = localStorage.getItem("details");
    var flag = localStorage.getItem("flag");
    var city = JSON.parse(localStorage.getItem("city"));
    $('#sol').text(details);
    $('#flg').text(flag);
   
    // console.log(Object.values(city));
   x= Object.values(city);
   console.log(x);
  $('#sel2').empty();
  $('#sel2').append(`<option value="">Select Any City</option>`);
for(var i=0; i<x.length; i++){
   var t=  $('#sel2').append(`<option>`+x[i]+`</option>`);
    // var n = $('#sel2').append('<option value=" '+i+'">'+' Option ' +i+' </option>');
    if(t == ''){
     var desc = (`desc:`+x[i]['citydesc']);
    }

    // $('#sel2').append(`<option>`+x[i]['cityname']+`desc:`+x[i]['citydesc']+`</option>`);
    // $('#sel2').append('<option value="' + x[i]['cityname'] + '">' + value.name + 
    // '</option>');
   
    
}

$(document).on("change", "#sel2", function() {
  console.log(desc);
  alert("You have selected: " +($(this).find("option:selected").text())+ "  city");
 
  // var s = $(this).find("option:selected").val();
 window.location="page3.html";


});
  
//   if(s){ 
            
//      //let cityname= s ;
//       console.log("okkk"+ s );
//     //  city= data[s].desc;
//     // console.log(city);
//    // localStorage.setItem("details",details);
//     // localStorage.setItem("city", JSON.stringify(city));
    
//     //window.location="page2.html";
     
 
//   } 
// });


// $(document).ready (function () {  
//   $("select.sel2").change (function () {  
//       var selectedCountry = $(this).children("option: selected").val();  
//       alert ("You have selected the country - " + selectedCountry);  
//   });  
// });





  }
  



// function loadValues2()
// {
//   var citydesc = localStorage.getItem("citydesc");
  
//   $('#third').text(details);
// }