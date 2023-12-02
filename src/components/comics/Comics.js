import { IMG_STANDARD_XLARGE, URL_COMICS, IMG_NOT_AVAILABLE  } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';
import './Comics.css';

class Comics {
    async render() {
        const data = await getDataApi.getData(URL_COMICS);
        let html = ''

        data.forEach(({id, title, thumbnail: {path, extension}}) => {
            const img = path + IMG_STANDARD_XLARGE + extension;

            if(path.indexOf(IMG_NOT_AVAILABLE) === -1) {
                html += `
                    <li class="comics__item">
                        <span class="comics__title">${title}</span>
                        <img class="comics__img" src="${img}" alt="img">
                    </li>
                `;
            }
        });

        const htmlContent = `<ul class="comics__container">${html}</ul>`
        ROOT_INDEX.innerHTML = htmlContent;
    }
}
export default new Comics();