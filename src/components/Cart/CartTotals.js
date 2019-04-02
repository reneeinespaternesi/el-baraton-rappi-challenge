import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
  const {cartSubtotal, cartTax, cartTotal, clearCart} = value;

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={10} sm={8} className="mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
          <Link to="/">
            <button  type="button" className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>
              clear cart
            </button >
          </Link>
          <h5>
            <span className="text-title">subtotal: </span><strong>$ {cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax: </span><strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total: </span><strong>$ {cartTotal}</strong>
          </h5>
          </Col>
        </Row>
      </Container>
      
    </React.Fragment>
  )
}

