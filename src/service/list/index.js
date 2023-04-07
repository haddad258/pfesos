import axios from 'axios';
import api from '../config/api';
import { Apis, API_URL } from '../config/config';


const getProduct = async (data) => {
    try {
        let result = await api.get(API_URL+"?action=get_products",data);
        if (result.data.error) {
            return null;
        }
        return result.data;
    } catch (error) {
        console.log("error");
        return(error.response.data);
    }
};






export default {
   getProduct,
};

