import "regenerator-runtime/runtime";
import { URL_COMICS } from './constants/api';
import { getDataApi } from './utils/getDataApi'


(async () => {
    const data = await getDataApi.getData(URL_COMICS);
    console.log(data)
})();