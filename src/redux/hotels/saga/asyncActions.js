import { createAction } from '@reduxjs/toolkit';

const hotelsAsyncAction = {
    getHotelsAction: createAction('GET_HOTELS_ASYNC'),
};

export default hotelsAsyncAction;