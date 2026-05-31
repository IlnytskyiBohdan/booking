import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createHashHistory } from "history";
import { rootSaga } from "./rootSaga";
import destination from "./destination/slice";
import hotels from "./hotels/slice";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destination: destination.reducer,
    hotels: hotels.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
