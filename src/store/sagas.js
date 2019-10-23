import { call, put, takeEvery } from "redux-saga/effects";
import Api from "./services";
import types from "./actionTypes";
function* fetchArticles() {
  try {
    const articles = yield call(Api.fetchArticles);
    yield put({ type: types.ARTICLES_FETCH_SUCCEEDED, list: articles });
  } catch (e) {
    yield put({ type: types.ARTICLES_FETCH_FAILED, errMsg: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* articleSaga() {
  yield takeEvery(types.ARTICLES_FETCH_REQUESTED, fetchArticles);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* articleSaga() {
//   yield takeLatest(types.ARTICLES_FETCH_REQUESTED, fetchArticles);
// }

export default articleSaga;
