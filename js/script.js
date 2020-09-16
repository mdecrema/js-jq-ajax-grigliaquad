$(document).ready(function() {

  var quad = {
    "quadratino": "qua",
    "numero": Math.floor(Math.random() * 10)+1,
  }

  //var num = Math.floor(Math.random() * 10)+1;

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(quad);

  $(".griglia-row").append(contenuto);

})
