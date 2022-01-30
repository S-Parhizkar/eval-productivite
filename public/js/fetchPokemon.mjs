/**
 * @description fetchPokemon, Exported Module should find a random Pokemon name and return the name and send to mainFetchData
 *
 * @param {any}
 * @return {Array} pokemon from foundPokemon.json() that we fetched from pokeapi url/api.
 */

export const fetchPokemon = async () => {
  const pokedexNum = Math.floor(Math.random() * 897)
  let foundPokemon = ''

  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error(error.message)
  }
  const pokemon = await foundPokemon.json()
  return pokemon
}
