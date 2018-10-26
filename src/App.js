import React, { Component } from 'react';
import PayeeCard from './components/PayeeCard/PayeeCard';
import PayorCard from './components/PayorCard/PayorCard';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import { Grid, Row, Panel, Table } from 'react-bootstrap';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    // need the state to control the toggle function for the react bootstrap panels
    // also storing the user input from the search bar component; passing that up to app.js (parent)
    this.state = {
      open: true,
      searchTerm: ''
    };

    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
  }

  // created function to "bridge" information between parent and child
  receiveSearchTerm(searchValue) {
    this.setState({
      searchTerm: searchValue
    });
  }
  
  // dropped in components: header, payee card, and payor card. payee card is grabbing necessary data from the json file to build panels for the payee information via map.
  // filtering payee cards for search items: if searched word exists, then shows payee card associated with it; if no search entered, show all payee cards; if user searches for something that isn't available, nothing shows up.
  // mapping through the payeeInfo array to grab the remittance information for each company and dropping into the table template from payorCard component.
  render() {
    const filteredData = this.state.searchTerm === '' ? data : data.filter(payeeInfo => payeeInfo.Payee.Name.toLowerCase() === this.state.searchTerm.toLowerCase());
    return (
      <div className="App">
        <Header />
        <SearchBar sendSearchTerm={this.receiveSearchTerm} />
        <Grid>
          {filteredData.map((payeeInfo, index) => (
            <Row key={index} className='show-grid'>
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
                      <Panel.Title toggle>Remittance</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        {/* instead of looping with the table header every time, just looped the body rows only. pulled that part out of the component. refactor the table header into the component */}
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
                          </tbody>
                        </Table>
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
