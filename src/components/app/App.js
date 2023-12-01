import { URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import './App.css';

class App {
    async render() {
        const data = await getDataApi.getData(URL_COMICS);
        console.log(data)
    }
}

export default new App();