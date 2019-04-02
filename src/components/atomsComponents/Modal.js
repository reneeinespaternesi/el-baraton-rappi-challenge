import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer} from '../../context';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { name, img, price } = value.modalProduct;

          if(!modalOpen) {
            return null;
          }
          
          return (<ModalContainer>
              <Container>
                <Row>
                  <Col id="modal" xs={8} md={6} lg={4} className="mx-auto text-center text-capitalize p-5 mt-1">
                    <h5>item added to the cart</h5>
                    <Image src={img} fluid alt="product"/>
                    <h4>{name}</h4>
                    <h5 className="text-muted">price: {price}</h5>
                    <Link to="/" >
                      <Button className="mr-2 text-capitalize" onClick={()=> closeModal() } variant="secondary">
                        continue shopping
                      </Button>
                    </Link>
                    <Link to="/cart" >
                      <Button className="text-capitalize" onClick={()=> closeModal()}>
                        go to cart
                      </Button>
                    </Link>

                  </Col>
                </Row>
              </Container>
          </ModalContainer>
          );
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-item: center;
  justify-content: center;
  
  #modal {
    background: var(--white);
    margin-top: 20% !important;
  }
`;
