import { FETCH_USER } from '../contants/action-types';

const initialState = {
  email: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER.SUCESS: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export default user;
