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

  return (
    <>
    <h2>name: {starShip.name}</h2>
    <p>model: {starShip.model}</p>
    <p>manufacturer: {starShip.manufacturer}</p>
    <p>cost_in_credits: {starShip.cost_in_credits}</p>
    <p>length: {starShip.length}</p>
    <p>max_atmosphering_speed: {starShip.max_atmosphering_speed}</p>
    <p>crew: {starShip.crew}</p>
    <p>passengers: {starShip.passengers}</p>
    <p>cargo_capacity: {starShip.cargo_capacity}</p>
    <p>consumables: {starShip.consumables}</p>
    <p>hyperdrive_rating: {starShip.hyperdrive_rating}</p>
    <p>MGLT: {starShip.MGLT}</p>
    <p>starship_class: {starShip.starship_class}</p>
    {starShip.pilots && <p>starship_class: {starShip.pilots}</p>}
    <p>films: {starShip.films}</p>
    </>
  )
}