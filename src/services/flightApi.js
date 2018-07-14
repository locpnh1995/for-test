/*
 * @Author: locpnh (locpnh@cyberspace.vn) 
 * @Date: 2018-07-09 12:00:42 
 * @Last Modified by: locpnh
 * @Last Modified time: 2018-07-14 16:07:09
 */
class FlightServiceAPI {
  static getUser() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          email: 'locpnh@cyberspace.vn'
        });
      }, 3000);
    });
  }
  static getDeparture(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userID: user.email,
          flightID: 'AR1973',
          date: '10/27/2016 16:00PM'
        });
      }, 2500);
    });
  }

  static getFlight(flightID) {
    return new Promise(resolve => {
      setTimeout(
        () => {
          resolve({
            id: flightID,
            pilot: 'Jhonny Bravo',
            plane: {
              make: 'Boeing 747 RC',
              model: 'TA-889'
            },
            state: 'onTime'
          });
        },

        4500
      );
    });
  }

  static getForecast(date) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          date: date,
          forecast: 'rain'
        });
      }, 2000);
    });
  }
}

export default FlightServiceAPI;
