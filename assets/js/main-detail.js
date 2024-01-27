const mainDiv = document.getElementById("mainDiv")

function loadPokemon() {
    pokeApiDetail.getPokemon()
        .then((pokemon) => {
            mainDiv.innerHTML = `
        <section class="content ${pokemon.type}">
            <nav id="home"><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="" onclick="backHome()"></nav>
            <header>
                <div>
                    <h1 class="name">${pokemon.name}</h1>
                    <ul class="types">
                        ${pokemon.types.map((type) => `<li class ="${type}">${type}</li>`).join("")}
                    </ul>
                </div>
                <span class="number">#${pokemon.number}</span>
            </header>
            <section class="pokemonHtmlBody">
                <img class="pokemonImg" src="${pokemon.photo}" alt="${pokemon.name}">
                <article class="about">
                    <h3>About</h3>
                    <ul>
                        <li class="liFlex">
                            <span class="firstSpan">Species: </span><span>${pokemon.species}</span>
                        </li>
                        <li class="liFlex">
                            <span class="firstSpan">Height: </span><span>${pokemon.height}</span>
                        </li>
                        <li class="liFlex">
                            <span class="firstSpan">Weight: </span><span>${pokemon.weight}</span>
                        </li>
                        <li class="liFlex">
                            <span class="firstSpan">Abilities: </span><span>${pokemon.abilities.map((ability) => ability).join(", ")}</span>
                        </li>
                    </ul>
                </article>
            </section>
        </section>`
        })
        .catch((error) => console.error(error))
}
loadPokemon()