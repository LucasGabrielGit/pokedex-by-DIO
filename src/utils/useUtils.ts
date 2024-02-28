/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/api/useAxios";
import { Pokemon } from "@/models/Pokemon";
import { useCallback, useEffect, useState } from "react";

export const useUtil = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [limit, setLimit] = useState(9)
  const [offset,] = useState(0)

  const getPokemonDetails = async (pokemonName: string) => {
    const response = await api.get(`pokemon/${pokemonName}`);
    return response.data;
  };

  const getPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonData = await Promise.all(
      response.data.results.map((p: any) => getPokemonDetails(p.name))
    );
    setPokemons(pokemonData);
  }, [limit, offset]);

  const loadMore = () => {
    setLimit(limit + 9);
  };

  const showDetails = (pokemon: Pokemon) => {
    setPokemon(pokemon);
  }

  useEffect(() => {
    getPokemons();
  }, [getPokemons, limit, offset]);

  const getTypePokemon = (type: string) => {
    switch (type) {
      case "normal":
        return 'bg-gray-300'

      case "fire":
        return 'bg-red-300'

      case "water":
        return 'bg-blue-300'

      case "electric":
        return 'bg-yellow-300'

      case "grass":
        return 'bg-green-300'

      case "ice":
        return 'bg-cyan-300'

      case "fighting":
        return 'bg-red-500'

      case "poison":
        return 'bg-purple-300'

      case "ground":
        return 'bg-yellow-700'

      case "flying":
        return 'bg-green-500'

      case "psychic":
        return 'bg-red-700'

      case "bug":
        return 'bg-green-700'

      case "rock":
        return 'bg-gray-700'

      case "ghost":
        return 'bg-purple-700'

      case "dragon":
        return 'bg-red-700'

      case "dark":
        return 'bg-gray-700'

      case "steel":
        return 'bg-gray-300'

      case "fairy":
        return 'bg-pink-300'

      default:
        return ''

    }
  }

  return {
    getTypePokemon,
    loadMore,
    pokemons,
    showDetails,
    pokemon
  }
}