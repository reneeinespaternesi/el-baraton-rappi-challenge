/*import React, { Component } from 'react'
import Title from './atomsComponents/Title'
import { Container, Row } from 'react-bootstrap';
import { CategoryConsumer } from '../context'
import Category from './Category'

class CategoryList extends Component {
  render() {
    return (
     <React.Fragment>
       <div className="py-5">
          <Row className="mt-5">
            <CategoryConsumer>
              {value => {
                return value.categories.map( category => {
                  return <Category key={category.id} category={category}/>;
                })
              }}
            </CategoryConsumer>
          </Row>
       </div>
     </React.Fragment>   
    );
  }
}

export default CategoryList;*/
