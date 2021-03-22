let PokemonRepository =(function () {

    let PokemonList = [
    {name:'Pikachu',height:0.9,types:['Electric']},
    {name:'Clefairy',height:0.5,types:['Fairy']},
    {name:'Jigglypuff',height:1.8,types:['Normal','Fairy']}
  ];

    function add(display) {
        PokemonList.push(display);
      }
    function getAll () {
       return PokemonList;
      }
    return {
        add:add,
        getAll:getAll
    };
  }) ();

  PokemonRepository.add ({ name:'Cledairy', height:2 , types: ['Fairy']});
  console.log(PokemonRepository.getAll());


(function (){
      PokemonRepository.getAll().forEach(function(display) {

        if (display.height > 1 ) {
           document.write( display.name + ' ' + 'Height: ' + display.height + ' ' + display.types + ' ' + '-Woo, that \'s a big one!' + '<p> </p>');
      } else {
          document.write(display.name + ' ' + 'Height: ' + display.height + ' ' + display.types + ' ' + '<p> </p>');
      }});

 })();
