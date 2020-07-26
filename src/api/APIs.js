import axios from 'axios';
import * as c from './config/Constants';
import {authHeader} from './config/AuthHeader.js';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
 
  headers: authHeader(),
});

export default {


  sendMail:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/sendMail`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {      
      throw error;
    }
  },

}; 

