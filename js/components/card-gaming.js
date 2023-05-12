'use strict'

class Cards extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.image = null
    this.title_game = null
    this.genres = null
    this.platforms = null
  }


  static get observedAttributes() {
    return ['image', 'title', 'genres', 'platforms']

  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'image':
        this.image = newValue;
        break;
      case 'title':
        this.title = newValue;
        break;
      case 'genres':
        this.genres = newValue;
        break;
      case 'platforms':
        this.platforms = newValue.split(',');
        break;
      default:
        throw new Error(`O atributo ${name} não é suportado.`);
    }
  }




  styles() {
    const styles = document.createElement('style')
    styles.textContent =
      `.card{
                display: flex;
                flex-direction: column;
                gap: 10px;
                cursor: pointer;
                background-color: #2C2C44;
                border-radius: 20px 20px 0 0;
                box-shadow: 15px 5px 5px rgba(0, 0, 0, 0.5);
                width: 300px;
                height: 330px;
                text-decoration: none;
            }

            .info-gaming{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 100%;
                height: 100%;
            }

            .image-gaming{
                width: 100%;
                height: 200px;
                border-radius: 20px 20px 0 0;
            }
            
            .title-and-type-game{
                display: flex;
                flex-direction: column;
                gap: 5px;
                color: white;
                font-weight: bold;
                height:100%;
              }

            .platforms-game{
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                color: #ccc;
                margin-right: 5px;
            }`

    return styles

  }


  component() {

    const clickable = document.createElement('a')
    clickable.href = `#game/${this.id}`
  
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('image-gaming')
    img.src = this.image
    img.alt = 'Game Image'

    //Apend
    const info_game = document.createElement('div')
    info_game.classList.add('info-gaming')

    //Apend
    const title_and_type_game = document.createElement('div')
    title_and_type_game.classList.add('title-and-type-game')

    const title_game = document.createElement('span')
    title_game.classList.add('title-game')
    title_game.textContent = this.title_game

    const genres_game = document.createElement('span')
    genres_game.classList.add('genre-game')
    genres_game.textContent = `Genres: ${this.genres}`

    const platforms_game = document.createElement('div')
    platforms_game.classList.add('platforms-game')
    platforms_game.textContent = this.platforms

    title_and_type_game.append(title_game, genres_game)
    info_game.append(img, title_and_type_game, platforms_game)
    card.appendChild(info_game)
    clickable.appendChild(card)

    return clickable
  }

  connectedCallback() {
    this.shadow.appendChild(this.component())
    this.shadow.appendChild(this.styles())
  }
}

customElements.define("card-gaming", Cards);

