'use strict'

const api_key = 'b93e880821cc4070b21cab9e345102aa'

export const fetchGames = async () => {
    const url = `https://api.rawg.io/api/games?key=${api_key}`;
    const response = await fetch(url);
    const all_games = await response.json();
    return all_games;
}

export const fetchInfoGame = async (id) => {
    const url = `https://api.rawg.io/api/games/${id}?key=${api_key}`
    const response = await fetch(url);
    const info_game = await response.json();
    return info_game;

}

export const fecthImages = async (id) => {
    const url = `https://api.rawg.io/api/games/${id}/screenshots?key=${api_key}`;
    const response = await fetch(url);
    const images = await response.json();

    const result_images = images.results.map(index => {
        return index.image
    })

    return result_images
}