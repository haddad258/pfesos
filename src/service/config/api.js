import axios from 'axios';
import { API_URL } from '../config/config';
//import { getCookie } from '../jwt/function'

export default axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type":"application/json",
     
    },
})
