'use strict'

class Description extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.genres = null;
        this.platforms = null;
        this.about = null;
        this.developers = null;
    }

    static get observedAttributes() {
        return ['genres', 'platforms', 'genres', 'developers', 'about']

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        switch (name) {
            case 'developers':
                this.developers = newValue.split(',');
                break;
            case 'genres':
                this.genres = newValue.split(',');
                break;
            case 'platforms':
                this.platforms = newValue.split(',');
                break;
            case 'about':
                this.about = newValue;
            default:
                throw new Error(`O atributo ${name} não é suportado.`);
        }
    }




    styles() {
        const styles = document.createElement('style')
        styles.textContent =
            `
        *{
            text-decoration: none;
        }
        
        .all-description{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }
        
        .image{
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .description{
            background-color: black;
            width: 700px;
            height: 500px;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
        }
        
        .about, .informations{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;
            color: white;       
        }

        .text-about{
            font-size: 12px;
            height: 200px;
            overflow-y: auto;    
        }

        .text-about::-webkit-scrollbar-track {
            background-color:#ccc;
            border-radius: 15px;
          }
          
        .text-about::-webkit-scrollbar {
            width: 2px;
            background: black;  
        }
        
        .text-about::-webkit-scrollbar-thumb {
            height: 40px;
            background: #005baa;
            border-radius: 15px;
          }
        
        .title-informations, .title-about{
            font-size: 32px;
        }

        .platforms, .genres, .developers{
            font-size: 12px;
        }

        @media (max-width: 640px) {
            .title-about, .title-informations{
                font-size: 24px
            }
        }

        `

        return styles

    }


    component() {

        const container = document.createElement('div')
        container.classList.add('card-about')

        const all_description = document.createElement('div')
        all_description.classList.add('all-description')

        const description = document.createElement('div')
        description.classList.add('description')

        const about_game = document.createElement('div')
        about_game.classList.add('about')

        const titleAbout = document.createElement('h1')
        titleAbout.classList.add('title-about')
        titleAbout.textContent = 'About'

        const textAbout = document.createElement('span')
        textAbout.classList.add('text-about')
        textAbout.textContent = this.about

        const informations = document.createElement('div')
        informations.classList.add('informations')

        const title_informations = document.createElement('h3')
        title_informations.classList.add('title_informations')
        title_informations.textContent = 'Informations'

        const platforms = document.createElement('p')
        platforms.classList.add('platforms')
        platforms.textContent = `Platforms: ${this.platforms}`

        const genres = document.createElement('p')
        genres.classList.add('genres')
        genres.textContent = `Genres: ${this.genres}`

        const developers = document.createElement('p')
        developers.classList.add('developers')
        developers.textContent = `Developers: ${this.developers}`


        about_game.append(titleAbout, textAbout)
        informations.append(title_informations, platforms, genres, developers)
        description.append(about_game, informations)
        all_description.append(description)
        container.append(all_description)

        const scriptFont = document.createElement('script');
        scriptFont.src = 'https://kit.fontawesome.com/324b71f187.js';
        

        const linkSlider = document.createElement('link')
        linkSlider.href= "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        linkSlider.rel = "stylesheet"

        const scriptSlider = document.createElement('script')
        scriptSlider.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';

        container.append(scriptFont, linkSlider, scriptSlider);

        return container
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
}

customElements.define("desc-gaming", Description);