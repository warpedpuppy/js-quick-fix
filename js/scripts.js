let PokemonRepository = (function () {
  let PokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer= document.getElementById('modal-container');
  
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        
        let pokemonDisplay = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemonDisplay);
        console.log(pokemonDisplay);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }
  


  function add(pokemonDisplay) {
    if (
      typeof pokemonDisplay === "object" &&
      "name" in pokemonDisplay
    ) {
      PokemonList.push(pokemonDisplay);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return PokemonList;
  }

  function addListItem(pokemonDisplay) {

    let PokemonList = $(".pokemon-list");
    let PokemonListItem = $('<li></li>'); 
    let button = $("<button></button>"); 
    button.text(pokemonDisplay.name);
    button.addClass("btn btn-primary");
  
    button.attr("data-target", "#pokemonModal").attr("data-toggel", "modal-content");
   PokemonList.append(PokemonListItem);
   PokemonListItem.append(button);
   
  
    button.on("click", function(event) {
      showDetails(pokemonDisplay);
    });
  }
  
  
  
  
  
  
  function showDetails(item) {
    loadDetails(item).then(function () {
      console.log(item)
      showModal(item)
    });
  }


  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  function showModal(pokemon) {

    let modal = $("<div></div>");
    let pokemonDisplayNameElement = $("<h1>" + pokemon.name + "<h1>");
    let pokemonDisplayTypesElement= $("<p>" + pokemon.height + "<p>");
    let pokemonDisplayImageElement= $('<img class= "modal-img" style= "width:50% ">')
    pokemonDisplayImageElement.attr("src", pokemon.imageUrl);
    let closeButtonElement = $("<button></button>"); 
    closeButtonElement.addClass("modal-close");
    closeButtonElement.text("X");
    closeButtonElement.on("click",hideModal);
    modal.append(closeButtonElement);
    modal.append(pokemonDisplayNameElement);
    modal.append(pokemonDisplayImageElement);
    modal.append(pokemonDisplayTypesElement);

    let modalContainer= $('#modal-container');
    modalContainer.append(modal);
    modalContainer.addClass('is-visible');
 }
    function hideModal() {
      
      let modalContainer= $('#modal-container');
      modalContainer.empty(); 
      modalContainer.removeClass('is-visible');
    }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();


PokemonRepository.loadList().then(function () {
  PokemonRepository.getAll().forEach(function (pokemonDisplay) {
    PokemonRepository.addListItem(pokemonDisplay); {

    }
  });
});
