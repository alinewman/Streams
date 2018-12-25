import axios from 'axios';


export default axios.create({
    BaseURL: `http://worldclockapi.com/api/json/est/now/?id`
});