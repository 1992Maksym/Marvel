import axios from "axios";
import { API_KEY } from '../constants/api'

class GetDataApi {
    async getData(url) {
        try {
            const response = await axios.get(url, {
                params: {
                    apikey: API_KEY,
                    limit: 20
                }
            });
            return response.data.data.results;
        } catch (error) {
            return false;
        }
    }
}

export const getDataApi = new GetDataApi();