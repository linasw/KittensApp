import {getKitten} from '../../utils/kittenAPI.utils';

export const GET_KITTEN = 'GET_KITTEN';

export const getKittens = () => {
    const request = axios.get('https://placekitten.com/200/300');
    return {
        type: GET_KITTEN,
        payload: request,
    };
}