
import { fetchGames } from '../js/request.js'

const data = await fetchGames()

const createCard = (game) => {
    const card = document.createElement('card-gaming')

    const image_game = game.background_image
    const title_game = game.name
    const genres_game = game.genres.map(element => {
        return element.name
    })
    const platforms_game = game.parent_platforms.map(index => {
        return index.platform.name
    });
    
    
    card.id = game.id
    card.addEventListener('click', () =>{
        localStorage.setItem('card-id', card.id)
    })

    card.image = image_game
    card.title_game = title_game
    card.genres = genres_game
    card.platforms = platforms_game

    return card
}

export const listGames = () => {
    const container = document.getElementById('container');
    const games = data.results.map(createCard);
    container.replaceChildren(...games);
}
