let PokemonRepository = (function () {
  let PokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    let PokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemonDisplay.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    PokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemonDisplay);
    });
  }

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
  function showModal( Type,Height) {

      let modal= document.createElement('div');
      modal.classList.add('modal');
       let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText ='X';
      closeButtonElement.addEventListener('click',hideModal);
      let TypeElement = document.createElement ('h1');
      let HeightElement = document.createElement('p');
      modal.appendChild(closeButtonElement);
      modal.appendChild(TypeElement);
      modal.appendChild(HeightElement);

      modalContainer.classList.add('is-visible');

    }
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

  function showDetails(item) {
    PokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  document.querySelector('#show-modal').addEventListener ('click',()=> {
  showModal();
});

  window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


PokemonRepository.loadList().then(function () {
  PokemonRepository.getAll().forEach(function (pokemonDisplay) {
    PokemonRepository.addListItem(pokemonDisplay);
  });
});
