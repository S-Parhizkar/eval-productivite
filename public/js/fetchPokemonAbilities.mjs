export const fetchPokemonAbilities = async () => {
  const pokedexNum = Math.floor(Math.random() * 266)
  let foundAbilities = ''

  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error(error.message)
  }
  console.log(foundAbilities)
  const abilities = await foundAbilities.json()
  return abilities
}
