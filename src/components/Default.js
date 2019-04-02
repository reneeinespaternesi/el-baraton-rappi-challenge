import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

class Default extends Component {
  render() {
    
    return (
      <Container fluid>
        <Row>
          <Col xs={10} className="mx-auto text-title text-uppercase pt-5 text-center">
            <h1 className="display-3">404</h1>
            <h2>page not found</h2>
            <h3>the requested URL <span className="text-danger"> {this.props.location.pathname}</span>{" "} was not found</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Default;
