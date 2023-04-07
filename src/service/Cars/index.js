import axios from 'axios';
import api from '../config/api';
import { Apis, API_URL } from '../config/config';


const RegisterCars = async (data) => {
    console.log("data",data)
    try {
        let result = await api.post(API_URL,data )
     
        if (result.data.error) {
            return null;
        }
        return "saved";
    } catch (error) {
        return(JSON.stringify(error.response.data));
    }
};

const ListCars = async (data) => {
    
    try {
        let result =  await api.post(API_URL,data )
     
        if (result.data.error) {
            return null;
        }
        return result.data;
    } catch (error) {
        return(JSON.stringify(error.response.data));
    }
};






export default {
    RegisterCars,
    ListCars,
    
};

