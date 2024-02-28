/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useUtil } from "@/utils/useUtils"
import { PokemonDialog } from "./PokemonDialog"
import { Button } from "./ui/button"

export const PokemonList = () => {

  const { getTypePokemon, pokemons, loadMore } = useUtil()


  return (
    <div className="min-h-screen shadow-sm flex items-center justify-center pt-2 overflow-hidden">
      <Card className="w-[960px] h-[768px] overflow-y-auto rounded-md shadow-lg">
        <CardHeader className="fixed bg-[#fff] w-[940px] shadow-md">
          <CardTitle className="text-3xl font-bold font-sans">Pokemons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mt-24">
            {pokemons.map((pokemon) => (
              <Card key={pokemon.name} className="shadow-md">
                <CardHeader>
                  <CardTitle>{pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <div className={`flex items-center justify-between w-full`}>
                      <img src={pokemon.sprites?.front_default} />
                      <img src={pokemon.sprites?.back_default} />
                    </div>
                    <div className="border border-zinc-200 px-2 pb-2 rounded-md shadow-sm">

                      <div className="flex flex-col gap-2">
                        <span>Types</span>
                        <div className="flex gap-2">
                          {pokemon.types.map((type) => (
                            <Badge key={type.type.name} variant={'default'} className={`${getTypePokemon(type.type.name)} text-black hover:${getTypePokemon(type.type.name)}`}>{type.type.name}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <PokemonDialog pokemon={pokemon} />
                </CardContent>
              </Card>
            ))}

          </div>
          <CardFooter className="flex items-center justify-center">
            <Button onClick={loadMore} variant={"default"} className="bg-zinc-950 text-white ">Load More...</Button>
          </CardFooter>

        </CardContent>
      </Card>
    </div>
  )
}
