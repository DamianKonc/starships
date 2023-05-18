import getShip from "@/lib/getShip";
import { Metadata } from "next";
import SingleStarshipPage from "@/app/components/SingleStarShipPage/SingleStarshipPage";

type Params = {
  params: {
    starShipUrl: string;
  };
};

export async function generateMetadata({
  params: { starShipUrl },
}: Params): Promise<Metadata> {
  const starShipData = getShip(
    `https://swapi.dev/api/starships/${starShipUrl}`
  );
  const starShip = await starShipData;

  return {
    title: starShip.name,
    description: `This is the page of ${starShip.name}`,
  };
}

export default async function StarShipPage({
  params: { starShipUrl },
}: Params) {
  const starShipData = getShip(
    `https://swapi.dev/api/starships/${starShipUrl}`
  );
  const starShip = await starShipData;

  return <SingleStarshipPage starShip={starShip} />;
}
