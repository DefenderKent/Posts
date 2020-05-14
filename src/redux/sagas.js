import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POST } from "./postsReduser";
import { showLoader, hideLoader } from "./appReduser";
import { showAlert } from "./appReduser";
export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}
function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Ошибка сервера"));
    yield put(hideLoader());
  }
}
async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
