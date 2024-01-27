const pokedexList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
const maxRecords = 151
const limit = 12
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        pokedexList.innerHTML += pokemonList.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}" onClick="openOtherHtml(this)" value="${pokemon.number}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
        ).join('')
    })
        .catch((error) => console.error(error))
        .finally(() => console.log("Requisição finalizada"))
}

loadPokemonItens(offset, limit)
// offset += limit

loadMoreButton.addEventListener('click', () => {
    // if (offset < 151) {
    //     if ((offset + limit) > 151) {
    //         limit = 151 - offset
    //         loadPokemonItens(offset, limit)
    //         offset += limit
    //     } else {
    //         loadPokemonItens(offset, limit)
    //         offset += limit
    //     }
    // }

    offset += limit

    const qtdRecords = offset + limit

    if (qtdRecords >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonItens(offset, limit)
    }

})