import { showAlert } from "./appReduser";

const CREATE_POST = "POST/CREATE_POST";
const spamWords = ["ggg", "ric"];
export function spamWordsMiddle({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = spamWords.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("Запретное слово"));
        }
      }
      return next(action);
    };
  };
}
