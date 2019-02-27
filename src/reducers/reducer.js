export function testReducer(state = {}, action) {
  switch (action.type) {
    case "TEST_REDUCER":
      return {
        ...state
      };
    default:
      return state;
  }
}

export function bookData(state = {}, action) {
  switch (action.type) {
    case "SAVE_BOOK_DATA":
      return {
        ...state,
        bookData: action.bookData
      };
    default:
      return state;
  }
}
