export default async function getShip(starshipUrl: string) {
  const res = await fetch(starshipUrl);

  if (!res.ok) throw new Error("failed to fetch ship");

  return res.json();
}
