'use strict'
import {
    fecthImages,
    fetchGames,
    fetchInfoGame
} from "../js/request.js";

import { attributeSwiper } from "../js/configSwiper.js";


const id = localStorage.getItem('card-id')
const desc = await fetchInfoGame(id)
const images = await fecthImages(id)

const aboutCardGame = async () => {
    const aboutCardGame = document.createElement('desc-gaming')

    const aboutGame = desc.description_raw

    const developers = desc.developers.map(devs => {
        return devs.name
    })

    const genres = desc.genres.map(genre => {
        return genre.name
    })

    const ratingsTitle = desc.ratings.map(rate => {
        return rate.title
    })

    const platformsGame = desc.parent_platforms.map(platforms => {
        return platforms.platform.name
    })

    aboutCardGame.about = aboutGame;
    aboutCardGame.genres = genres;
    aboutCardGame.platforms = platformsGame;
    aboutCardGame.developers = developers;

    return aboutCardGame
}

export const gameDescription = async () => {

    const container_description = document.createElement('div')
    container_description.classList.add('container-description')

    const imageAbout = document.createElement('div')
    imageAbout.classList.add('imageAbout')

    const headerDescription = document.createElement('div')
    headerDescription.classList.add('header-description')

    const titleGame = document.createElement('h1')
    titleGame.style.color = 'white'
    titleGame.textContent = desc.name

    const iconBackStore = document.createElement('a')
    iconBackStore.classList.add('iconBackStore')
    iconBackStore.innerHTML = '<i class="fas fa-arrow-left"></i>'
    iconBackStore.href = '#games'

    imageAbout.append(await swiperGame(), await aboutCardGame())
    headerDescription.append(iconBackStore, titleGame)
    container_description.append(headerDescription, imageAbout)

    return container_description

}

const swiperGame = async () => {
    const swiperContainer = document.createElement('swiper-container');
    attributeSwiper(swiperContainer);


    images.map((source) => {
        const swiperSlide = document.createElement('swiper-slide')
        swiperSlide.classList.add('swiper-slide')

        const imageGame = document.createElement('img')
        imageGame.classList.add('swiper-image-game')
        imageGame.src = source

        swiperSlide.append(imageGame)
        swiperContainer.append(swiperSlide)
        return swiperContainer
    });


    const script = document.createElement('script')
    script.setAttribute('src', "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js")
    document.body.append(script)

    return swiperContainer
}


