import React, { Component } from 'react';
import { FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // user input for search term saved as a state
    this.state = {
        payeeName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handling the state change; capturing user input
  handleChange = e => {
      this.setState({
          payeeName: e.target.value
      });
  }

  // handling sending user input to app component
  handleSubmit = e => {
      e.preventDefault();
      this.props.sendSearchTerm(this.state.payeeName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
            <Row className='show-grid'>
                <Col className='form-column' xs={12} md={4}>
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <FormControl
                        type="text"
                        value={this.state.payeeName}
                        placeholder="Search Payees"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    </FormGroup>
                </Col>
            </Row>
        </Grid>
      </form>
    );
  }
}

export default SearchBar;