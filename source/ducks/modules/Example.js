import { takeLatest, put, call } from 'redux-saga/effects';
import { getData } from '../../env';
import SagasManager from '../helpers/sagasManager';

const appName = APP_NAME;
export const GET_DATA = 'GET_DATA';
const GET_DATA_FULFILLED = `${ appName }/Articles/GET_DATA_FULFILLED`;
const GET_DATA_REJECTED = `${ appName }/Articles/GET_DATA_REJECTED`;

const initialState = {
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_FULFILLED: {
      // do something with data
      return {
        ...state,
      };
    }

    default: return state;
  }
}


export const getYourData = () => ({
  type: GET_DATA,
});

const getYourDataFulfilled = (payload) => ({
  type: GET_DATA_FULFILLED,
  payload,
});

const getYourDataRejected = (payload) => ({
  type: GET_DATA_REJECTED,
  payload,
});

function* watchGetData(action) {
  const service = GET_DATA;
  try {
    const response = yield call(getData, service, action.payload);
    yield put(getYourDataFulfilled(response));
  } catch (e) {
    yield put(getYourDataRejected(e));
  }
}


SagasManager.addSagaToRoot(function* () {
  yield takeLatest(GET_DATA, watchGetData);
});
