$(document).ready(function(){

    $('h1').click(function() {
    window.location.href = 'vista-2.html'
  });

$( "input" ).keyup(function() {

var rest1 = {
  restaurant: 'tanta',
  distrito: 'miraflores',
  comida: 'criolla'
};

var rest2 = {
  restaurant: 'olimpico',
  distrito: 'lima',
  comida: 'vegetariana'
};

var rest3 = {
  restaurant: 'rockys',
  distrito: 'lima',
  comida: 'rapida'
};

var rest4 = {
  restaurant: 'chenzu',
  distrito: 'miraflores',
  comida: 'japonesa'
};

var rest5 = {
  restaurant: 'mihan',
  distrito: 'miraflores',
  comida: 'japonesa'
};

var rest6 = {
  restaurant: 'casamama',
  distrito: 'lince',
  comida: 'criolla'
};

var rest7 = {
  restaurant: 'el huerto',
  distrito: 'lince',
  comida: 'criolla'
};

var rest8 = {
  restaurant: 'vegetales',
  distrito: 'miraflores',
  comida: 'vegetariana'
};

var rest9 = {
  restaurant: 'kentucky',
  distrito: 'lima',
  comida: 'rapida'
};

var rest10 = {
  restaurant: 'bembos',
  distrito: 'lince',
  comida: 'rapida'
};

var restaurantes = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9, rest10];

for (i = 0; i < restaurantes.length; i++) {
  if (restaurantes[i].distrito === $("input").val()) {
    $(".restaurantes").append("<p class='texto'>"+restaurantes[i].restaurant+"</p>");
  }
  else if($("input").val()==="") {
    $(".texto").remove();
  }
}

if($("div.restaurantes p.texto").text()==="rockys") {
  console.log("hola");
}

});

if($(".texto").html()==="olimpico") {
  $(".texto").addId("olimpico");
}

});
