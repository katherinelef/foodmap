$(document).ready(function() {
  $('h1').click(function() {
    window.location.href = 'vista-1.html'

  });
});



var rest1 = {
  restaurant: 'tanta',
  distrito: 'lima',
  comida: 'criolla'
};

var rest2 = {
  restaurant: 'olimpico',
  distrito: 'lima',
  comida: 'vegetariana'
};

var rest3 = {
  restaurant: 'rockys',
  distrito: 'miraflores',
  comida: 'criolla'
};

var rest4 = {
  restaurant: 'chenzu',
  distrito: 'miraflores',
  comida: 'japonesa'
};

var rest5 = {
  restaurant: 'mihan',
  distrito: 'lince',
  comida: 'japonesa'
};

var restaurantes = [rest1, rest2, rest3, rest4, rest5];

for (i = 0; i < restaurantes.length; i++) {
  if (restaurantes[i].distrito === 'lima') {
    console.log(restaurantes[i].restaurant);
  }
}
