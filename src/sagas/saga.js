import { call, takeEvery, all } from "redux-saga/effects";
import { fetchData } from "../apiCalls/apicalls";

export function* getBookDataSaga() {
  yield takeEvery("GET_BOOK_DATA", getBookData);
}

export function* getBookData(action) {
  let url =
    "https://www.googleapis.com/books/v1/volumes?q=" + action.searchParams;
  const { response, error } = yield call(fetchData, url);
  console.log(response);
  console.log(error);
}

export default function* rootSaga() {
  yield all([getBookDataSaga()]);
}
