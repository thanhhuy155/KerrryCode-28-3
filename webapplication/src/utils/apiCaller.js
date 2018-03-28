import axios from 'axios'
import * as Config from '../constraints/Config'

export default function callAPI(endpoint, method='GET',body){
    return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body
      }).then (reg=>reg.data).catch(err=>{
        alert (err)
    });
}
