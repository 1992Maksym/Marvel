import './Charters.css';
import { getDataApi } from '../../utils/getDataApi';
import { IMG_STANDARD_XLARGE } from "../../constants/api";
import { ROOT_MODAL } from '../../constants/root'

class Charters {
    chartersAvailable(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail:{path, extension}}) => {
            const img = path + IMG_STANDARD_XLARGE + extension;
            htmlContent += `
                <li class='charters__item'>
                    <img class="charters__img" src="${img}"/>
                    <span class="charters__name">${name}</span>
                </li>
            `;
        })
        const htmlWrapper = `
            <div class="charters__wrap">
                <ul class="charters__container">${htmlContent}</ul>
                <button 
                    class="charters__close"
                    onclick="modal.innerHTML=''"
                ></button>
            </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }
    chartersEmpty() {
        const emptyCharters = `
            <div class="empty__charters__wrap">
                <div class="empty__charters__container">
                    <span class="empty__charters__text">Информация по даному комиксу отсутствует</span>
                </div>
                <button 
                    class="charters__close"
                    onclick="modal.innerHTML=''"
                ></button>
            </div>
        `;
        ROOT_MODAL.innerHTML = emptyCharters;
    }
    async render(uri){
        const data = await getDataApi.getData(uri);
        data.length ? this.chartersAvailable(data) : this.chartersEmpty();
    }
}
export default new Charters();