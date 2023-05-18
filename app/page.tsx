import type { Metadata } from "next";
import StarShipsBody from "./components/StarShipsBody/StarShipsBody";
import getAllFilms from "@/lib/getAllFilms";

export const metadata: Metadata = {
  title: "StarShips",
};

export default async function StarShipsPage() {
  const filmsData = getAllFilms();

  const films = await filmsData;

  return (
    <section>
      <StarShipsBody films={films.results} />
    </section>
  );
}
