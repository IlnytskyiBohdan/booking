import { call, put } from 'redux-saga/effects';
import api from "../../../utils/api";
import hotels from '../slice';
import { push } from 'redux-first-history';
import { routes } from '../../../constants/routes';

export function* callGetHotelsWorker(action) {
  const { payload } = action;

  try {
    yield put(hotels.actions.setError(null));
    yield put(hotels.actions.setLoading(true));
    const { data } = yield call(api.getHotels, payload);

    yield put(hotels.actions.setItems(data));
    yield put(push(routes.hotels.path));
    yield put(hotels.actions.setLoading(false));
  } catch (e) {
    yield put(hotels.actions.setLoading(false));
    yield put(hotels.actions.setError('Failed to load hotels. Please try again.'));
    console.error(e);
  }
}
