import React, { Component } from 'react';
import { connect } from 'react-redux';

import fletchFlight from '../../actions/FlightAction';
import fetchUser from '../../actions/UserAction';

class FlightItem extends Component {
  componentDidMount() {
    this.props.fetchUser();
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

const mapDispatchToProps = () => ({ fetchUser, fletchFlight });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightItem);
