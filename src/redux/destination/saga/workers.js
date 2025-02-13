import { call, put } from 'redux-saga/effects';
import api from "../../../utils/api";
import destination from '../slice';

export function* callGetDestinationWorker() {
  try {
    yield put(destination.actions.setLoading(true));
    const { data } = yield call(api.getDestination);

    yield put(destination.actions.setItems(data));
    yield put(destination.actions.setLoading(false));
  } catch (e) {
    yield put(destination.actions.setLoading(false));
    console.error(e);
  }
}
