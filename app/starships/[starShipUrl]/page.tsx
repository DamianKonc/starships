import getShip from "@/lib/getShip"
import { Metadata } from "next"

type Params = {
    params:{
        starShipUrl: string
    }
}

export async function generateMetadata({params: {starShipUrl}}: Params): Promise<Metadata>{
    const starShipData: Promise<StarShip> = getShip(`https://swapi.dev/api/starships/${starShipUrl}`)
    const starShip: StarShip = await starShipData

    return{
        title: starShip.name,
        description: `This is the page of ${starShip.name}`
    }
}

export default async function StarShipPage({params: {starShipUrl}}: Params) {
    const starShipData: Promise<StarShip> = getShip(`https://swapi.dev/api/starships/${starShipUrl}`)
    const starShip = await starShipData

    console.log(starShip)
  return (
    <h2>{starShip.name}</h2>
  )
}
