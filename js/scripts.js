let PokemonRepository =(function () {
  let PokemonList = [
    {name:'Pikachu',height:0.9,types:['Electric']},
    {name:'Clefairy',height:0.5,types:['Fairy']},
    {name:'Jigglypuff',height:1.8,types:['Normal','Fairy']}
  ];

  function add(pokemonDisplay) {
    PokemonList.push(pokemonDisplay);
  }

  function getAll () {
    return PokemonList;
  }

  function addListItem(pokemonDisplay){
    let pokemonList= document.querySelector ('.pokemon-list');
    let listPokemon = document.createElement ('li');
    let button = document.createElement('button');
    button.innerText= pokemonDisplay.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild (listPokemon);
    button.addEventListener ('click',function (event) {
      showDetails(pokemonDisplay);
    });
  }
  function showDetails (pokemonDisplay){
    let text='Woo! It is big!'
    if (pokemonDisplay.height>1){
      console.log(pokemonDisplay.name);
      console.log(text);
    }else{
      console.log (pokemonDisplay.name);
    }
  }
  return {
    add:add,
    getAll:getAll,
    addListItem:addListItem
  };
}) ();

PokemonRepository.add ({ name:'Cledairy', height:2 , types: ['Fairy']});

PokemonRepository.getAll().forEach(function(pokemonDisplay){
  PokemonRepository.addListItem(pokemonDisplay);
});
