import { listGames } from '../pages/home.js';
import { gameDescription } from '../pages/info-gaming.js';
import { homePage } from '../pages/view-gaming.js';


const container = document.getElementById('container');
const id = localStorage.getItem('card-id')

const init = () => window.addEventListener('hashchange', renderPage);

const validateHash = (hash) => hash === "" ? '/' : hash.replace('#', '');

const renderPage = async () => {
  const page = validateHash(window.location.hash);

  if (page === '/') {
    localStorage.removeItem('card-id');
    await homePage();
  }else if(page.startsWith('games')){
    localStorage.removeItem('card-id');
    listGames()
  } else if (page.startsWith('game/')) {
    const gameId = page.split('/')[1];
    if (gameId === id) {
      container.replaceChildren(await gameDescription());
    } else {
      localStorage.setItem('card-id', gameId);
      window.location.reload();
    }
  }
};

window.addEventListener('hashchange', () => {
  renderPage();
  init();
});

renderPage()
