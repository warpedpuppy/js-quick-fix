let PokemonList = [
    {name:'Pikachu',height:0.9,types:['Electric']},
    {name:'Clefairy',height:0.5,types:['Fairy']},
    {name:'Jigglypuff',height:1.8,types:['Normal',' Fairy']}
  ];

  (function () {
      PokemonList.forEach(function(display) {

        if (display.height > 1 ) {
           document.write( display.name + ' ' + 'Height: ' + display.height + ' ' + 'Type:'+ display.types + ' ' + 'Woo, that \'s a big one!' + '<p> </p>');
      } else {
          document.write(display.name + ' ' + 'Height: ' + display.height + ' ' + 'Type:'+ display.types + ' ' + '<p> </p>');
      }});
  })();
