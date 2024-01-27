const pokeApiDetail = {}

function backHome() {
    location.replace("./index.html")
}

function openOtherHtml(element) {
    localStorage.setItem("number", element.getAttribute('value'))
    location.replace("./poke-details.html")
}
function clickIdTest() {
    let idNumber = localStorage.getItem("number")
    console.log(idNumber)
}

function convertPokemonToDetail(detailPoke) {
    const pokemonD = new PokemonDetail();
    pokemonD.number = detailPoke.id
    pokemonD.name = detailPoke.name

    const types = detailPoke.types.map((typeSlot) => typeSlot.type.name)
    const [typePrincipal] = types

    pokemonD.type = typePrincipal
    pokemonD.types = types

    pokemonD.photo = detailPoke.sprites.other["official-artwork"]["front_default"]
    pokemonD.species = detailPoke.species.name
    pokemonD.height = detailPoke.height
    pokemonD.weight = detailPoke.weight
    pokemonD.abilities = detailPoke.abilities.map((abilitySlot) => abilitySlot.ability.name)

    return pokemonD
}

pokeApiDetail.getPokemon = (number = localStorage.getItem("number")) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}/`

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokemonToDetail)
        .then((detailRequest) => Promise.resolve(detailRequest))
        .then((pokeDetails) => {
            console.log(pokeDetails)
            return pokeDetails
        })
        .catch((error) => console.error(error))
}
// pokeApiDetail.getPokemon()