/* eslint-disable no-console */
import FlightServiceAPI from './flightApi';

export const loadUser = () => {
  console.log('loading user');
  return FlightServiceAPI.getUser().then(res => res);
};

export const loadDeparture = user => {
  console.log('loading departure');
  return FlightServiceAPI.getDeparture(user).then(res => res);
};

export const loadFlight = flightID => {
  console.log('loading flight');
  return FlightServiceAPI.getFlight(flightID).then(res => res);
};

export const loadForecast = date => {
  console.log('loading forecast');
  return FlightServiceAPI.getForecast(date).then(res => res);
};
