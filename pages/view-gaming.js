'use strict'

import { attributeSwiper } from "../js/configSwiper.js";

const images = [
    "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
]

export const homePage = async () => {
    const container = document.getElementById('container')
    container.classList.add('container')

    const intoStore = document.createElement('div')
    intoStore.classList.add('into-store')
    
    const titleStore = document.createElement('div')
    titleStore.classList.add('title-store')

    const discover = document.createElement('span')
    discover.textContent = 'Discover'

    const newGames = document.createElement('h1')
    newGames.textContent = 'New Games'

    const textStore = document.createElement('span')
    textStore.textContent = "If you are a gamer and looking for a new game store to explore, you've come to the right place. Our store offers a wide variety of games from different genres, platforms, and styles, all in one place."
    textStore.classList.add('text-store')
    typeWriter(textStore)

    const buttonStore = document.createElement('a')
    buttonStore.href = '#games'
    buttonStore.textContent = 'Acess the Store'
    buttonStore.classList.add('acess-store')


    titleStore.append(discover, newGames)
    intoStore.append(titleStore, textStore, buttonStore)
    container.replaceChildren(intoStore, await swiperGame())

    return container
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

const typeWriter = (element) => {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.map((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 30 * i)  
    })
}

