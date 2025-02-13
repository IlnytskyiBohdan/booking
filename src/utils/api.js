import axios from 'axios';
import { API_URL } from '../constants/api'

const instance = axios.create({
    baseURL: API_URL
});

const api = {
    getDestination() {
        return instance.get('destination')
    },
    getHotels(params) {
        return instance.get('hotels', {
            params
        })
    }
};

export default api;

