import { all, select, put, call, takeLatest } from 'redux-saga/effects';
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

const fetchUser = function*() {
  console.log('fecthUserSaga');
  try {
    const user = yield call(loadUser);

    yield put({
      type: 'FETCH_USER_SUCCESS',
      payload: { user }
    });
  } catch (error) {
    yield put({ type: 'FLETCH_USER_FAILURE', error: error.message });
  }
};

export default function* rootSaga() {
  console.log('rootsaga');
  yield all([
    helloSaga(),
    takeLatest('FETCH_USER', fetchUser),
    takeLatest('FETCH_FLIGHT', fetchFlight)
  ]);
}
