import axios from 'axios';
import api from '../config/api';
import { Apis, API_URL } from '../config/config';


const Registerbook = async (data) => {
    console.log("data", data)
    try {
        let result = await api.post(API_URL, data)

        if (result.data.error) {
            return null;
        }
        console.log("result")
        return "saved";
    } catch (error) {
        console.log(error.response)
        return (JSON.stringify(error.response.data));
    }
};

const Listbook = async (data) => {

    try {
        let result = await api.post(API_URL, data)

        if (result.data.error) {
            return null;
        }
        return result.data;
    } catch (error) {
        return (JSON.stringify(error.response.data));
    }
};






export default {
    Registerbook,
    Listbook
};

