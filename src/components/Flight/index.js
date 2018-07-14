import React, { Component } from 'react';

import FlightItem from './FlightItem';

const CONSEQUENCE_LOAD = 'CONSEQUENCE_LOAD';
// const CONSEQUENCE_BLOCK_LOAD = 'CONSEQUENCE_BLOCK_LOAD';
// const CONSEQUENCE_NON_BLOCK_LOAD = 'CONSEQUENCE_NON_BLOCK_LOAD';

class Flight extends Component {
  render() {
    return (
      <div>
        <FlightItem loadType={CONSEQUENCE_LOAD} />
      </div>
    );
  }
}

export default Flight;
