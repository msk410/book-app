import { fork, all } from "redux-saga/effects";

import * as testMySaga from "./saga";
export default function* rootSaga() {
  yield all[fork(testMySaga.testActionSaga)];
}
