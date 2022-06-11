import axios from 'axios';
import api from '../config/api';
import { Apis, API_URL } from '../config/config';


const get_charging_points = async (data) => {
    try {
        let result = await api.get(API_URL+"?action=get_charging_points",data);
        if (result.data.error) {
            return null;
        }
        return result.data;
    } catch (error) {
        console.log("error");
        return(error.response.data);
    }
};
const get_ccontact = async (data) => {
    try {
        let result = await api.get(API_URL+"?action=get_contacts",data);
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
   get_charging_points,
   get_ccontact
};

