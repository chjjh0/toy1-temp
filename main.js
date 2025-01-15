// import './style.css'
// import javascriptLogo from './images/javascript.svg'
// import viteLogo from './images/vite.svg'

async function app() {
  document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="./images/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="./images/javascript.svg" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Okay</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `
  
}

document.addEventListener('DOMContentLoaded', app);
