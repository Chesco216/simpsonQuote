import { index } from './src';
import './style.css'

document.querySelector('#app').innerHTML = `
<div>
  <h1>Guess the Simpson Character by a Quote</h1>
  <img src = ''>
</div>
  <div id = 'card'>
  </div>
  <button id = 'send'> send </button>
  <button id = 'back'> back </button>
`;
index();
