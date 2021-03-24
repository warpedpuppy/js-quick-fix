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

      // creating lists and button in the DOM
    function addListItem(display){
        let pokemonList= document.querySelector ('.pokemon-list');
        let listPokemon = document.createElement ('li');
        let button = document.createElement('button');
        button.innerText= display.name;
        button.classList.add('button-class')
        listPokemon.appendChild(button);
        pokemonList.appendChild (listPokemon);
        //Event listner on click
        button.addEventListener ('click',function (event) {
          showDetails(display);
           });
    }

    function showDetails (display){
      let text='Woo! It is big!'
      if (display.height>1){
        console.log(display);
        console.log(text);
      }else{
       console.log (display);
       }
    }

    return {
        add:add,
        getAll:getAll,
        addListItem:addListItem
    };

  }) ();

  PokemonRepository.add ({ name:'Cledairy', height:2 , types: ['Fairy']});



  PokemonRepository.getAll().forEach(function(display){

  PokemonRepository.addListItem(display);
    });
