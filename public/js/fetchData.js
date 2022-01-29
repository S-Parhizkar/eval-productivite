'use strict';

import fetchPokemon  from "./fetchPokemon.js";
import fetchPokemonAbilities from "./fetchPokemonAbilities"

window.addEventListener('DOMContentLoaded', () => {
  const pokeP = document.getElementById('pokeInfo')
  const pokeDiv = document.getElementById('pokemon-info')
  const pokeAbilityBtn = document.getElementById('ability')
  
  const pokeAbility = document.getElementById('pokeAbility')

  const invoquePokemon = () => {
    const pokeBtn = document.getElementById('pokemon')
    pokeBtn.addEventListener('click', fetchPokemon)
    pokeDiv.appendChild(pokeP)
  }

  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities)
    pokeDiv.appendChild(pokeAbility)
  }

  ;(function startAll () {
    invoquePokemon()
    pokemonAbility()
  })()
})
