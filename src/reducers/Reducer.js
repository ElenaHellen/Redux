import {GET_POSTS, PENDING, SUCCESS, ERROR} from "../src/actions/actionsTypes";


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action = {}){
    switch (action.type){
        case GET_POSTS + SUCCESS:
            return action.payload;
        case GET_POSTS + PENDING:
            return state;
        case GET_POSTS + ERROR:
            return state;
        default:
            return state;
    }

}