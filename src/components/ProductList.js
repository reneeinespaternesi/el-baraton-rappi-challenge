import React, { Component } from 'react';
import Title from './atomsComponents/Title';
import { Container, Row } from 'react-bootstrap';
import { ProductConsumer } from '../context';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
     <React.Fragment>
       <div className="py-5">
        <Container>
          <Title name="our" title="products"/>
          <Row>
              <ProductConsumer>
                {value => {
                  return value.products.map( product => {
                     return <Product key={product.id} product={product}/>;
                  })
                }}
              </ProductConsumer>
          </Row>
        </Container>
       </div>
     </React.Fragment>   
    );
  }
}

export default ProductList;
