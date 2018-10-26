import React, { Component } from 'react';

class PayorCard extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.payorId}</td>
          <td>{this.props.invoice}</td>
          <td>{this.props.description}</td>
          <td>{this.props.amount}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default PayorCard;