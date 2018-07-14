import React, { Component } from 'react';
import { connect } from 'react-redux';

import fletchFlight from '../../actions/FlightAction';
import fetchUser from '../../actions/UserAction';
import { test } from '../../actions/UserAction';

class FlightItem extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.test();
  }
  render() {
    return (
      <div>
        <p>
          <strong>Email:</strong>
        </p>
        <p>
          <strong>Flight:</strong>
        </p>
        <p>
          <strong>Date:</strong>
        </p>
        <p>
          <strong>Weather:</strong>
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  departure: state.departure
});

const mapDispatchToProps = () => ({
  fetchUser,
  fletchFlight
});

function mapDispatchToProps2() {
  return {
    fetchUser,
    fletchFlight,
    test
  };
}

console.log(typeof mapDispatchToProps);
console.log(typeof { fetchUser, fletchFlight });

export default connect(
  mapStateToProps,
  mapDispatchToProps2
)(FlightItem);
