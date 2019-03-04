import { call, takeEvery, all, put } from "redux-saga/effects";
import { fetchData } from "../apiCalls/apicalls";
import { saveBookData } from "../actions/actions";

export function* getBookDataSaga() {
  yield takeEvery("GET_BOOK_DATA", getBookData);
}

export function* getBookData(action) {
  let url =
    "https://www.googleapis.com/books/v1/volumes?q=" + action.searchParams;
  const { response, error } = yield call(fetchData, url);
  if(response) {
    yield put(saveBookData(response))
  } else if(error) {
    yield put(saveBookData("error"))
  }
}

export default function* rootSaga() {
  yield all([getBookDataSaga()]);
}
