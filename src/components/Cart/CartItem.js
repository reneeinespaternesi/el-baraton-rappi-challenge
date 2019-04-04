import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function CartItem({ item, value }) {
  const { id, name, img, price, count } = item;
  const { increment, decrement, removeItem } = value;
  const itemPrice = parseFloat(price);
  const total = itemPrice * count;

  return (
    <Row className="my-1 text-capitalize text-center">
      <Col xs={10} lg={2} className="mx-auto">
        <Image
          src={img}
          style={{ widows: "5rem", height: "5rem" }}
          fluid
          alt="product"
        />
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <span className="d-lg-none"> product: </span>
        {name}
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <span className="d-lg-none"> price: </span>
        {price}
      </Col>
      <Col xs={10} lg={2} className="my-2 my-lg-0 mx-auto">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              {" "}
              -{" "}
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              {" "}
              +{" "}
            </span>
          </div>
        </div>
      </Col>
      <Col xs={10} lg={2} className="my-2 my-lg-0 mx-auto">
        <Button variant="primary" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </Button>
      </Col>
      <Col xs={10} lg={2} className="my-2 my-lg-0 mx-auto">
        <strong>item total: $ {total.toFixed(2)} </strong>
      </Col>
    </Row>
  );
}
