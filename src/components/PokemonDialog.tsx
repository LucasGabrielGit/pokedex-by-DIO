import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pokemon } from "@/models/Pokemon"
import { DialogClose } from "@radix-ui/react-dialog"

type PokemonProps = {
  pokemon: Pokemon
}

export function PokemonDialog(props: PokemonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Show Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[768px]">
        <DialogHeader>
          <DialogTitle className="border-b border-slate-900/60 pb-4"><h1 className="text-2xl font-bold">{props?.pokemon.name.replace(/^./, props?.pokemon.name[0].toUpperCase())}</h1></DialogTitle>
          <DialogDescription>
            <div className="flex justify-between gap-3">
              <div className="flex-1 bg-gray-300 rounded-tr-[2rem] rounded-br-[2rem]">
                <img src={props?.pokemon.sprites?.front_default} alt="Front detail of pokemon" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 dark:bg-slate-500">
                <h2 className="text-3xl mb-4">Stats</h2>
                <div className="flex flex-col gap-8">
                  {props.pokemon.stats.map(stat => (
                    <div className="flex items-center justify-between w-full">
                      <span className="w-full">{stat.stat.name.toUpperCase()}</span>
                      <span className="w-full pl-8">{stat.base_stat}</span>
                      <input readOnly type="range" className="appearance-none h-4 bg-gray-200 rounded-lg" value={stat.base_stat} step={1} max={100} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <div className="flex items-center justify-end">
            <Button type="button" variant={"default"} className="bg-zinc-950 text-white ">
              Close
            </Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog >
  )
}
