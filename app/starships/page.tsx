import type { Metadata } from "next"
import getAllShips from "@/lib/getAllShips"
import Link from "next/link"

export const metadata: Metadata={
    title: 'StarShips'
}

export default async function StarShipsPage() {
    const shipsData: Promise<AllStarShips> = getAllShips()

    const starShips = await shipsData


    const content = (
        <section>
            <h2>
                <Link href="/"> Back to Home</Link>
            </h2>
            <br/>
            {starShips.results.map(starShip=>{
                console.log(starShip.url)
                return(
                    <>
                    <p key={starShip.url}>
                        <Link href={`/starships/${starShip.url.slice(31)}/`}>{starShip.url}</Link>
                    </p>
                    </>
                )
            })}
            <br/>
        </section>
    )

  return content
}
