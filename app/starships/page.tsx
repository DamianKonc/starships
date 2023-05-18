import type { Metadata } from "next"
import Link from "next/link"
import StarShipsBody from "../components/StarShipsBody/StarShipsBody"
import getAllFilms from "@/lib/getAllFilms"
import getAllShips from "@/lib/getAllShips"

export const metadata: Metadata={
    title: 'StarShips'
}

export default async function StarShipsPage() {
    const filmsData: Promise<AllFilms> = getAllFilms()

    const films = await filmsData;
    

    const content = (
        <section>
            <h2>
                <Link href="/"> Back to Home</Link>
            </h2>
            <br/>
            <StarShipsBody films={films.results}/>
        </section>
    )

  return content
}
