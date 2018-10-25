import React, { Component } from 'react';
import { Panel, Button, Row, Col } from 'react-bootstrap';

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
        <Panel id="collapsible-panel" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              <h3>{this.props.company + ':'}</h3>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Row>
                <Col md={6}>
                  <h4>{'Company Info'}</h4>
                  <p>{'Address: ' + this.props.address1 + " " + this.props.address2}</p>
                  <p>{this.props.city + ", " + this.props.state + " " + this.props.postal + " " + this.props.country}</p>
                  <p>{'Phone: ' + this.props.phone}</p>
                  <p>{'Fax: ' + this.props.fax}</p>
                  <p>{'Attn: ' + this.props.attn}</p>
                  <p>{'Last Submission Date: ' + this.props.submissionDate}</p>
                </Col>
                <Col md={6}>
                  <h4>{'Payment Info'}</h4>
                  <p>{'PAN: ' + this.props.PAN}</p>
                  <p>{'CVV: ' + this.props.CVV}</p>
                  <p>{'Exp: ' + this.props.EXP}</p>
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