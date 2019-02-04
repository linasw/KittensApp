import axios from 'axios';

function getKitten() {
    return axios.get('https://placekitten.com/200/300');
}

export default {getKitten};