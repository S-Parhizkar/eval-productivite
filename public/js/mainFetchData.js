'use strict'

/**
   * @description mainFetchData, importe 2 module that we exported  from fetchPokemon & fetchPokemonAbilities Modules
   */

import { fetchPokemon } from './fetchPokemon.mjs'
import { fetchPokemonAbilities } from './fetchPokemonAbilities.mjs'

window.addEventListener('DOMContentLoaded', () => {
  /** @constant {id} pokeP sibling the P tag by his ID where Pokemon's name will print */
  const pokeP = document.getElementById('pokeInfo')
  /** @constant {id} pokeP sibling the P tag  by his ID where Pokemon's abilities will print */
  const pokeDiv = document.getElementById('pokemon-info')
  /** @constant {Button} sibling the button tag  by his ID where the 'on click' event/function will execute */
  const pokeAbilityBtn = document.getElementById('ability')
  const pokeInfo = {}

  /**
   * @description fetchPokemonA, imported from fetchPokemon Module / fetching Pokemon name
   *
   * @param {Array} fetchPokemonA a async function which is waiting for the pokemon name from his module.
   * @return {string} pokemon name found from module and pass to PokeP where is empty and waiting by pokeP.innerText.
   */

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

  /** @constant {id} pokeAbility sibling the P tag where Pokemon's Abilities will print */
  const pokeAbility = document.getElementById('pokeAbility')
  let abilityToDisplay = ''

  /**
   * @description fetchPokemonAbilitiesA, imported from fetchPokemonAbilities Module / Pokemon's Abilities
   *
   * @param {Array} fetchPokemonAbilitiesA a async function which is waiting for the Pokemon's Abilities from his module.
   * @return {string} Pokemon's Abilities found from module and it pass to pokeAbility where is empty and waiting by pokeP.innerText.
   */
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

  /**
   * @param {Function} invoquePokemon function to execute 'click on' event, once clicked the fetchPokemonA function execute in order to add the chassed Pokémon.
   * @return {string} the chassed pokemon/pokeP will print it out into the dive pokeDiv by appendChild syntax.
   */

  const invoquePokemon = () => {
    /** @constant {Button} pokeBtn, by clicking on button, the function invoquePokemon will execute */
    const pokeBtn = document.getElementById('pokemon')
    pokeBtn.addEventListener('click', fetchPokemonA)
    pokeDiv.appendChild(pokeP)
  }

  /**
   * @param {Function} pokemonAbility function to execute 'click on' event, once clicked the fetchPokemonAbilitiesA function execute in order to add the Pokemon's abilities.
   * @return {string} the chassed abilities/pokeAbility will print it out into the dive pokeDiv by appendChild syntax.
   */

  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilitiesA)
    pokeDiv.appendChild(pokeAbility)
  }

  ;(function startAll () {
    invoquePokemon()
    pokemonAbility()
  })()
})
