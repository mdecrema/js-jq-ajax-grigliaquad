$(document).ready(function() {


//$(document).on("click", ".arrow", function() {
  $(document).on("click", "#uno", function() {
    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
      var valore = data.response;
      $("#due").html(valore);
      maggioreCinque(valore);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })
  })

// Funzione di controllo numero
  function maggioreCinque(num){
    if (num <= 5) {
      $("#due").css({backgroundColor: "yellow"});
    } else {
      $("#due").css({backgroundColor: "green"});
    }
  }

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
