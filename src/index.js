import "regenerator-runtime/runtime";
import App from './components/app/App';
import Comics from './components/comics/Comics'

(async () => {
    await App.render();
    Comics.getCharacters();
})();


