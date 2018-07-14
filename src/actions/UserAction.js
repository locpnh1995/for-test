// import { FLETCH_FLIGHT } from 'action-types';

export default function fetchUser(newState = {}) {
  console.log('userAction');
  return { type: 'FETCH_USER', newState };
}
