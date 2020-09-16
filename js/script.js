$(document).ready(function() {


//$(document).on("click", ".arrow", function() {
  $(document).on("click", ".quadratino", function() {
    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
      $(this).html(data.response);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })
  })

//var num = Math.floor(Math.random() * 10)+1;

  var quad = {
    "quadratino": "qua",
    "numero": "",
  }

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(quad);

  $(".griglia-row").append(contenuto);

})
