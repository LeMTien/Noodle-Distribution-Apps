import types from '../constants/types' 

initialData ={
    isLoading: false,
    noodles_data:[],
    error:'',

}
const noodle_reducer = (state = initialData, {type,payload}) => {
    switch (type) {
        case types.GET_ALL_NOODLE_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case types.GET_ALL_NOODLE_SUCCSESS:
            return{
                ...state,
                isLoading: false,
                noodles_data: payload,
                error:''
            }
        case types.GET_ALL_NOODLE_FAILURE:
        return{
            ...state,
            isLoading: false,
            error: payload
        }
        default:
            return state;
    }
}

export default noodle_reducer;