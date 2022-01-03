import { all  } from "redux-saga/effects";
import noodle_saga from "./noodle_saga";

export default function* rootSaga(){
    yield all(
        [noodle_saga()]
    )
}