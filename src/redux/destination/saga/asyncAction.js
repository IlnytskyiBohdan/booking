import { createAction } from '@reduxjs/toolkit';

const destinationAsyncAction = {
    getDestinationAction: createAction('GET_DESTINATION_ASYNC'),
};

export default destinationAsyncAction;