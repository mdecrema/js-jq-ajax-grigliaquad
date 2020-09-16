$(document).ready(function() {


//$(document).on("click", ".arrow", function() {
  $(document).on("click", ".quad", function() {
    var elemento = $(this);
    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
      var valore = data.response;
      maggioreCinque(valore, elemento);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })
  })

// Funzione di controllo numero
  function maggioreCinque(num, el){
    el.html(num);
    if (num <= 5) {
      el.addClass("yellow");
    } else {
      el.addClass("green");
    }
  }

//var num = Math.floor(Math.random() * 10)+1;

  var quad = {
    "quadratino": "quad",
    "numero": "",
  }

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(quad);

  $(".griglia-row").append(contenuto);

})
