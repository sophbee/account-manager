import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';

class PayorCard extends Component {

  // building out the remittance information into a table template and passing props down from the parent
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Payor Name</th>
              <th>PayorID</th>
              <th>InvoiceNo</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.name}</td>
              <td>{this.props.payorId}</td>
              <td>{this.props.invoice}</td>
              <td>{this.props.description}</td>
              <td>{this.props.amount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PayorCard;