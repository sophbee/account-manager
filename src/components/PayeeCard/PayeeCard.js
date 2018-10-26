import React, { Component } from 'react';
import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class PayeeCard extends Component {
  constructor(props, context) {
    super(props, context);

    // controls the toggle function for each payee card
    this.state = {
      open: true,
    };
  }

  // creating component/template for the payee card and passing down props from the parent component
  render() {
    return (
      <div>
        <Panel className="panel-payee" defaultExpanded>
          <Panel.Heading>
            <Panel.Title componentClass="h2" toggle>{this.props.company}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Row> 
                <Col md={6}>
                  <h4>Company Info</h4>
                  <ListGroup className="list-group-company-info">
                    <ListGroupItem header="Address"> {this.props.address1 + " " + this.props.address2} <br/> {this.props.city + ", " + this.props.state + " " + this.props.postal + " " + this.props.country}</ListGroupItem>
                    <ListGroupItem header="Phone">{this.props.phone}</ListGroupItem>
                    <ListGroupItem header="Fax">{this.props.fax}</ListGroupItem>
                    <ListGroupItem header="Attn">{this.props.attn}</ListGroupItem>
                    <ListGroupItem header="Last Submission Date">{this.props.submissionDate}</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h4>Payment Info</h4>
                  <ListGroup>
                    <ListGroupItem header="PAN">{this.props.PAN}</ListGroupItem>
                    <ListGroupItem header="CVV">{this.props.CVV}</ListGroupItem>
                    <ListGroupItem header="Exp">{this.props.EXP}</ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    )
  }
}

export default PayeeCard;