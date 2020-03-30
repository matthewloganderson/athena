import _ from 'lodash'
export const PokemonEndpoints = {
	getPokemon: function (nameOrId) {
		return `/pokemon/${nameOrId}`
	},
	getAllPokemon: '/pokemon',
	getPokemonSpecies: function (nameOrId) {
		return `/pokemon-species/${nameOrId}`
	},
	getEvolutionChain: function (url) {
		return `/evolution-chain/${_.replace (url, 'https://pokeapi.co/api/v2/evolution-chain/', '')}`
	}
}

export const PokemonTypeEndpoints = {
	getPokemonType: function (nameOrId) {
		return `/type/${nameOrId}`
	},
	getAllPokemonTypes: '/type'
}

export const PokemonAbilityEndpoints = {
	getAbility: function (nameOrId) {
		return `/ability/${nameOrId}`
	}, 
	getAllAbilities: '/ability'
}

export const MoveEndpoints = {
	getMove: function (nameOrId) {
		return `/move/${nameOrId}`
	},
	getAllMoves: '/move'
}