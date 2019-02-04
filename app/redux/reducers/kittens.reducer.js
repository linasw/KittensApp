import {GET_KITTEN} from '../actions/kitten.action';

const kittens = (state = {}, action) => {
    switch (action.type) {
        case GET_KITTEN: {
            return {...state, data: action.payload.data};
        }
        default:
            return state;
    }
};

export default kittens;