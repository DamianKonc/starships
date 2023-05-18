export type StarShip = {
    "MGLT": string,
    "cargo_capacity": string,
    "consumables": string,
    "cost_in_credits": string,
    "created": string,
    "crew": string,
    "edited": string,
    "hyperdrive_rating": string,
    "length": string,
    "manufacturer": string,
    "max_atmosphering_speed": string,
    "model": string,
    "name": string,
    "passengers": string,
    "films": string[],
    "pilots":string[],
    "starship_class": string,
    "url": string
}

type AllStarShips = {
         "count": 36,
        "next": 'https://swapi.dev/api/starships/?page=2',
        "previous": null,
        "results": StarShip[],
}

export type Film =  {
            title: string,
            episode_id: number,
            opening_crawl: string,
            director: string,
            producer: string,
            release_date: string,
            characters: string[],
            planets: string[],
            starships: string[],
            vehicles: string[],
            species: string[],
            created: string,
            edited: string,
            url: string
          }

type AllFilms =  {
        count: 6,
        next: null,
        previous: null,
        results: Film[]
}
