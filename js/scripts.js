var elBasicContent = $_('.js-pokemon-list');

pokemons.forEach(function (pokemon) {
    var pokemonsItem = createElement('li', 'pokemon__item p-2');
    
    var pokemonImg = createElement('img', 'pokemon__img');
    pokemonImg.setAttribute('src', pokemon.img);
    pokemonImg.setAttribute('width', '150');
    pokemonImg.setAttribute('height', '150');
    
    var pokemonName = createElement('h4', 'pokemon_info text-center', pokemon.name);
    
    pokemonsItem.appendChild(pokemonImg);
    pokemonsItem.appendChild(pokemonName); 
    elBasicContent.appendChild(pokemonsItem);
}); 