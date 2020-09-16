$(document).ready(function() {

  $("#uno").click(function() {
    $.ajax({
    url: "http://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
      console.log(data);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })
  })

var num = Math.floor(Math.random() * 10)+1;

  var quad = {
    "quadratino": "qua",
    "numero": num,
  }

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(quad);

  $(".griglia-row").append(contenuto);

})
