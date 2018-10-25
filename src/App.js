import React, { Component } from 'react';
import PayeeCard from './components/PayeeCard/PayeeCard';
import PayorCard from './components/PayorCard/PayorCard';
import Header from './components/Header/Header';
import { Grid, Row, Panel } from 'react-bootstrap';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // need the state to control the toggle function for the react bootstrap panels
    this.state = {
      open: true,
    };
  }

  // dropped in components: header, payee card, and payor card. payee card is grabbing necessary data from the json file to build panels for the payee information via map.
  // mapping through the payeeInfo array to grab the remittance information for each company and dropping into the table template from payorCard component. 
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          {data.map((payeeInfo, index) => (
            <Row className='show-grid'>
              <Panel>
                <Panel.Body>
                  <PayeeCard
                    company = {payeeInfo.Payee.Name}
                    address1 = {payeeInfo.Payee.Address.Address1}
                    address2 = {payeeInfo.Payee.Address.Address2}
                    city = {payeeInfo.Payee.Address.City}
                    state = {payeeInfo.Payee.Address.StateOrProvince}
                    postal = {payeeInfo.Payee.Address.PostalCode}
                    country = {payeeInfo.Payee.Address.Country}
                    phone = {payeeInfo.Payee.Phone}
                    fax = {payeeInfo.Payee.Fax}
                    attn = {payeeInfo.Payee.Attention}
                    submissionDate = {payeeInfo.Payee.SubmissionDate}
                    PAN = {payeeInfo.Payment.PAN}
                    CVV = {payeeInfo.Payment.CVV}
                    EXP = {payeeInfo.Payment.Exp}
                  />
                  <Panel id='collapsible-panel'>
                    <Panel.Heading>
                      <Panel.Title toggle>
                        <h3>Remittance</h3>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        {payeeInfo.Remittance.map((remits) => (
                          <PayorCard
                            key = {remits.PayorId}
                            name = {remits.PayorName}
                            payorId = {remits.PayorId}
                            invoice = {remits.InvoiceNo}
                            description = {remits.Description}
                            amount = {remits.Amount}
                          />
                        ))}
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                </Panel.Body>
              </Panel>
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
