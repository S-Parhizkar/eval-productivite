'use strict'

import { fetchPokemon } from './fetchPokemon.mjs'
import { fetchPokemonAbilities } from './fetchPokemonAbilities.mjs'

window.addEventListener('DOMContentLoaded', () => {
  const pokeP = document.getElementById('pokeInfo')
  const pokeDiv = document.getElementById('pokemon-info')
  const pokeAbilityBtn = document.getElementById('ability')
  const pokeInfo = {}
  const fetchPokemonA = async () => {
    let pokemon = await fetchPokemon()
    if (pokemon) {
      try {
        console.log(pokemon)
        pokeInfo.name = `${String(pokemon.species.name)
          .slice(0, 1)
          .toUpperCase()}${String(pokemon.species.name)
          .slice(1, pokemon.species.name.length)
          .toLowerCase()}`
      } catch (error) {
        console.error(error.message)
      }
    } else {
      pokemon = 'No Pokémon found...'
    }

    if (pokeP.innerText !== '') {
      pokeP.innerText = ''
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`
    pokeAbilityBtn.removeAttribute('disabled')
  }
  const pokeAbility = document.getElementById('pokeAbility')
  let abilityToDisplay = ''
  const fetchPokemonAbilitiesA = async () => {
    let abilities = await fetchPokemonAbilities()
    console.log(abilities)

    if (abilities) {
      try {
        if (abilities.name !== '' && undefined !== abilities.name) {
          abilityToDisplay = `${String(abilities.name)
            .slice(0, 1)
            .toUpperCase()}${String(abilities.name)
            .slice(1, abilities.name.length)
            .toLowerCase()}`
        } else {
          abilityToDisplay = 'Tackle'
        }
      } catch (error) {
        console.error(error.message)
      }
    } else {
      abilities = 'No ability found...'
    }

    if (pokeAbility.innerText !== '') {
      pokeAbility.innerText = ''
    }
    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`
  }

  const invoquePokemon = () => {
    const pokeBtn = document.getElementById('pokemon')
    pokeBtn.addEventListener('click', fetchPokemonA)
    pokeDiv.appendChild(pokeP)
  }

  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilitiesA)
    pokeDiv.appendChild(pokeAbility)
  }

  ;(function startAll() {
    invoquePokemon()
    pokemonAbility()
  })()
})
