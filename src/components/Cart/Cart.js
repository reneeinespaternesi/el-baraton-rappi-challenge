import React, { Component } from 'react';
import Title from '../atomsComponents/Title';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"/>
                  <Container fluid className="text-center d-none d-lg-block">
                    <Row>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">products</p>
                      </Col>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">name</p>
                      </Col>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">price</p>
                      </Col>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">quantity</p>
                      </Col>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">remove</p>
                      </Col>
                      <Col xs={10} lg={2} className="mx-auto">
                        <p className="text-uppercase">total</p>
                      </Col>
                    </Row>        
                  </Container>
                  <CartList value={value}/>
                  <CartTotals value={value} history={this.props.history}/>
                </React.Fragment>
              );
            } else {
              return (
                <Container fluid className="mt-5">
                  <Row>
                    <Col xs={10} className="mx-auto text-center text-title text-capitalize">
                      <h1>your cart is currently empty</h1>
                    </Col>
                  </Row>
              </Container>
              );
            }
          }}          
        </ProductConsumer>        
      </section>
    )
  }
}
