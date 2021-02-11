let PokemonList = [
    {name:'Pikachu',height:0.9,types:['electric']},
    {name:'Clefairy',height:0.5,types:['fairy']},
    {name:'Jigglypuff',height:1.8,types:['normal','fairy']}
  ]
  for (let i=0; i < PokemonList.length; i++){

    if(PokemonList[i].height > 1){
    console.log (`Name: ${PokemonList[i].name} (height: ${PokemonList[i].height})
    'Oh! It is a big one!'`)
    }else{
      console.log(`Name: ${PokemonList[i].name} (height: ${PokemonList[i].height})`)
    }

     document.write (`Name: ${PokemonList[i].name} (height: ${PokemonList[i].height}) `)
    }
