import {call, put, takeLatest} from 'redux-saga/effects'
import {getAllNoodleData} from '../API'
import actions from '../actions/action'
import types from '../constants/types'

function* get_All_Noodle(){
    try{
        const data = yield call(getAllNoodleData)
    if(data){
        console.log(data)
        yield put(actions.getAllNoodleSuccsess, data)   
    }else
        yield put(actions.getAllNoodleFailure, 'Không có dữ liệu ')
    }
    catch(err){
        yield put(actions.getAllNoodleFailure,  err)
    }

}

export default function* noodle_saga(){
    yield takeLatest(types.GET_ALL_NOODLE_REQUEST, get_All_Noodle)
}