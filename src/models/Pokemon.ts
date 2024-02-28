export type Pokemon = {
  id: number
  name: string
  height: number
  abilities: {
    ability: {
      name: string
      url: string
    }
    isHidden: boolean
  }
  sprites: {
    front_default: string
    back_default: string
  }
  stats: {
    base_stat: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    type: {
      name: string
      url: string
    }
  }[]
  weight: number
}