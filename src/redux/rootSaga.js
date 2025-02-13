import { all, call } from 'redux-saga/effects';
import { destinationWatcher } from './destination/saga/watchers';
import { hotelsWatcher } from './hotels/saga/watchers';

export function* rootSaga() {
    yield all([
        call(destinationWatcher),
        call(hotelsWatcher),
    ])
}
