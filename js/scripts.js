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
  //   let PokemonList = document.querySelector(".pokemon-list");
  //   let listpokemon = document.createElement("li");
  //   let button = document.createElement("button");
  //      button.innerText = pokemonDisplay.name;
  //      button.classList.add("button-class");
    
  //      listpokemon.appendChild(button);
  //      PokemonList.appendChild(listpokemon);
       
  //      button.addEventListener("click", function(event) {
  //     showDetails(pokemonDisplay);
  //   });
  // }


    let PokemonList = $(".pokemon-list");
    let PokemonListItem = $('<li></li>'); 
    let button = $("button");
    button.innerText = pokemonDisplay.name;
    button.addClass("btn btn-primary");
  
    button.attr("data-target", "#pokemonModal", "data-toggel", "modal-content");
  
   PokemonListItem.append(button);
    PokemonList.append(PokemonListItem);
  
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
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let pokemonDisplayNameElement = $("<h1>" + pokemon.name + "<h1>");
    // let pokemonDisplayNameElement = document.createElement('h1'); 
    // pokemonDisplayNameElement.innerHTML = pokemon.name
    
    let pokemonDisplayTypesElement= $("<p>" + pokemon.height + "<p>");
 
    // let pokemonDisplayTypesElement = document.createElement('h2');
    // pokemonDisplayTypesElement.innerHTML = "Height:" + " " + pokemon.height

    let pokemonDisplayImageElement= $('<img class= "modal-img" style= "width:50% ">')
    pokemonDisplayImageElement.attr("src", pokemon.imageUrl);

    // let pokemonDisplayImageElement =  document.createElement('img');
    // pokemonDisplayImageElement.setAttribute('src', pokemon.imageUrl)
      
      let closeButtonElement = $("button");
      closeButtonElement.addClass("modal-close");
      closeButtonElement.innerText ="X";
      closeButtonElement.on("click",hideModal);
      
      
      modalHeader.append(closeButtonElement);
      modalTitle.append(pokemonDisplayNameElement);
      modalBody.append(pokemonDisplayImageElement);
      modalBody.append(pokemonDisplayTypesElement);
      
      let modalContainer= $('#modal-container');
      modalContainer.append(modal);
      modalContainer.addClass('is-visible');
 }
    function hideModal() {
      
      let modalContainer=('#modal-container');
      modalContainer.innerHTML = ""; 
      modalContainer.removeClass('is-visible');
    }



  // document.querySelector('#show-modal').addEventListener ('click',()=> {
  // showModal();
// });

//   window.on('keydown', (e) => {
//    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//     hideModal();
//   }
// });
// modalContainer.on('click', (e) => {
//   let target = e.target;
//   if (target === modalContainer) {
//     hideModal();
//   }
// });

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
