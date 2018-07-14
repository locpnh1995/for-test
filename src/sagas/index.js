import {
  all,
  select,
  put,
  call,
  takeLatest,
  takeEvery,
  take,
  fork
} from 'redux-saga/effects';
import {
  loadUser,
  loadDeparture,
  loadFlight,
  loadForecast
} from '../services/apiCall';

const getUserFromState = state => state.user;

const helloSaga = function*() {
  console.log('hello saga');
};

const fetchFlight = function*() {
  try {
    const user = yield select(getUserFromState);

    const departure = yield call(loadDeparture, user);

    const flight = yield call(loadFlight, departure.flightID);

    const forecast = yield call(loadForecast, departure.date);

    yield put({
      type: 'FETCH_FLIGHT_SUCCESS',
      payload: { departure, flight, forecast }
    });
  } catch (error) {
    yield put({ type: 'FLETCH_FLIGHT_FAILURE', error: error.message });
  }
};

function* fetchUser() {
  console.log('xxxxfecthUserSaga');
  try {
    const user = yield call(loadUser);

    yield put({
      type: 'FETCH_USER_SUCCESS',
      payload: { user }
    });
  } catch (error) {
    yield put({ type: 'FLETCH_USER_FAILURE', error: error.message });
  }
}

function* watchIncrementAsync() {
  console.log('xxx');
  yield takeEvery('FETCH_USER', fetchUser);
}

function* watchLog() {
  while (true) {
    const action = yield take('*');
    console.log('action::', action);
  }
}

export function* rootSaga() {
  console.log('rootsaga');
  yield takeEvery('FETCH_USER', fetchUser);
  yield fork(watchLog);
}
