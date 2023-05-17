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


// name: 'Rebel transport',
// model: 'GR-75 medium transport',
// manufacturer: 'Gallofree Yards, Inc.',
// cost_in_credits: 'unknown',
// length: '90',
// max_atmosphering_speed: '650',
// crew: '6',
// passengers: '90',
// cargo_capacity: '19000000',
// consumables: '6 months',
// hyperdrive_rating: '4.0',
// MGLT: '20',
// starship_class: 'Medium transport',
// pilots: [],
// films: [
//   'https://swapi.dev/api/films/2/',
//   'https://swapi.dev/api/films/3/'
// ],
// created: '2014-12-15T12:34:52.264000Z',
// edited: '2014-12-20T21:23:49.895000Z',
// url: 'https://swapi.dev/api/starships/17/'