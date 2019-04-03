import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            name,
            price,
            inCart,
            available,
            img,
            info
          } = value.detailProduct;
          return (
            <Container className="py-5">
              <Row>
                <Col
                  xs={10}
                  className="mx-auto text-blue text-center my-5 text-capitalize"
                >
                  <h1> {name} </h1>
                </Col>
              </Row>
              <Row>
                <Col xs={10} md={6} className="mx-auto text-center">
                  <Image src={img} fluid alt="product" />
                </Col>
                <Col xs={10} md={6} className="mx-auto text-capitalize">
                  <h2>category</h2>
                  <h4 className="text-blue">
                    {" "}
                    <strong> price: {price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about this product:{" "}
                  </p>
                  <p className="text-muted lead"> {info}</p>
                  <div>
                    <Link to="/">
                      <Button className="text-capitalize" variant="secondary">
                        back to products
                      </Button>
                    </Link>

                    <Button
                      className="text-capitalize float-right"
                      disabled={available ? (inCart ? true : false) : true}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {available
                        ? inCart
                          ? "in Cart"
                          : "add to cart"
                        : "out of stock"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
