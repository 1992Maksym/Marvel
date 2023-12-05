import { IMG_STANDARD_XLARGE, URL_COMICS, IMG_NOT_AVAILABLE  } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';
import Error from "../error/Error";
import Charters from "../charters/Charters";
import './Comics.css';

class Comics {

    renderComics(data) {
        let html = '';

        data.forEach(({id, title, thumbnail: {path, extension}}) => {
            const img = path + IMG_STANDARD_XLARGE + extension;

            if(path.indexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = URL_COMICS + '/' + id + '/characters';

                html += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__title">${title}</span>
                        <img class="comics__img" src="${img}" alt="img">
                    </li>
                `;
            }
        });

        const htmlContent = `<ul class="comics__container">${html}</ul>`
        ROOT_INDEX.innerHTML = htmlContent;
    }

    async render() {
        const data = await getDataApi.getData(URL_COMICS);

        data ? this.renderComics(data) : Error.render();
    }

    getCharacters() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Charters.render(uri);
            })
        })
    }
}
export default new Comics();