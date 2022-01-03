
import types from '../constants/types'

const getAllNoodleRequest = () => {
    return {
        type: types.GET_ALL_NOODLE_REQUEST
    };
};

//Do saga disp
const getAllNoodleSuccsess = (data) => {
    return {
        type: types.GET_ALL_NOODLE_SUCCSESS,
        payload: data
    };
};

const getAllNoodleFailure = (error) => {
    return {
        type: types.GET_ALL_NOODLE_FAILURE,
        payload: error
    };
};
const slm = (data) => {
    return {
        type: types.SO_LUOT_MUA,
        payload: data
    };
};


export default {
    getAllNoodleRequest,
    getAllNoodleSuccsess,
    getAllNoodleFailure,
    slm 
}