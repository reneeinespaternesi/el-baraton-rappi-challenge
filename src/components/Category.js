/*import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CategoryConsumer } from '../context';
import { Col, Card } from 'react-bootstrap';

class Category extends Component {
  render() {
    const { id, name, img} = this.props.category;
    return (

      <Col xs={9} md={6} lg={3} className="my-3">
        <Card>
          <div className="img-container" onClick={console.log("test")}>
            <Link to="/products">
                <Card.Img variant="top" src={img} fluid alt="product" />
                <Card.Title className="text-center">{name}</Card.Title>
            </Link>
          </div>
        </Card>
      </Col>
    )
  }
}

export default Category;*/