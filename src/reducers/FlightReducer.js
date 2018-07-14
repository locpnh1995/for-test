import { FETCH_FLIGHT } from '../contants/action-types';

const initialState = {
  flight: '',
  date: '',
  forecast: ''
};

const departure = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT.SUCESS: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export default departure;
