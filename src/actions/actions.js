export const SAVE_BOOK_DATA = "SAVE_BOOK_DATA";
export const GET_BOOK_DATA = "GET_BOOK_DATA";

export function testAction() {
  return {
    type:"TEST_ACTION"
  }
}
export function getBookData(searchParams) {
  return {
    type: GET_BOOK_DATA,
    searchParams
  };
}

export function saveBookData(bookData) {
  return {
    type: SAVE_BOOK_DATA,
    bookData
  };
}
