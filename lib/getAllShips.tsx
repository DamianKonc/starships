export default async function getAllShips() {
  const res = await fetch("https://swapi.dev/api/starships/");

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
