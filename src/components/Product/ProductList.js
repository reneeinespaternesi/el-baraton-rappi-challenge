import React, { Component } from "react";
import Title from "../atomsComponents/Title";
import { Container, Row, Col } from "react-bootstrap";
import { ProductConsumer } from "../../context";
import Product from "./Product";
import Filter from "../Filter";

class ProductList extends Component {
  static applySort(products, sort) {
    let result = products;

    result =
      sort === "price up" ? result.sort((a, b) => b.price - a.price) : result;
    result =
      sort === "price down" ? result.sort((a, b) => a.price - b.price) : result;
    result =
      sort === "quantity up"
        ? result.sort((a, b) => b.quantity - a.quantity)
        : result;
    result =
      sort === "quantity down"
        ? result.sort((a, b) => a.quantity - b.quantity)
        : result;

    return result;
  }

  static applyFilters(
    products,
    availableFilter,
    priceFilter,
    quantityFilter,
    selectedCategory,
    searchText
  ) {
    let result = products;

    result = availableFilter
      ? result.filter(product => product.available === true)
      : result;
    result = priceFilter
      ? result.filter(product => parseFloat(product.price) >= priceFilter)
      : result;
    result = quantityFilter
      ? result.filter(product => product.quantity >= quantityFilter)
      : result;
    if (selectedCategory) {
      let sublevelSet = new Set(); //set to store unique values
      ProductList.getSublevelIdsByCategory(sublevelSet, selectedCategory);
      const sublevelIds = Array.from(sublevelSet);
      result = result.filter(product =>
        sublevelIds.includes(product.sublevel_id)
      );
    }

    result =
      searchText != ""
        ? result.filter(
            product =>
              product.name.toLowerCase().indexOf(searchText.toLowerCase()) !==
              -1
          )
        : result;

    return result;
  }

  /**
   * recursive category leaft search
   * @param {*} sublevelIds
   * @param {*} category
   */
  static getSublevelIdsByCategory(sublevelIds, category) {
    if (category.sublevels) {
      category.sublevels.forEach(childCat => {
        ProductList.getSublevelIdsByCategory(sublevelIds, childCat);
      });
    } else {
      sublevelIds.add(category.id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Container>
            <Title name="our" title="products" />
            <Row>
              <Filter />
            </Row>
            <Row>
              <ProductConsumer>
                {value => {
                  const {
                    products,
                    selectedSorter,
                    availableFilter,
                    priceFilter,
                    quantityFilter,
                    selectedCategory,
                    searchText
                  } = value;
                  let filterProducts = ProductList.applyFilters(
                    products,
                    availableFilter,
                    priceFilter,
                    quantityFilter,
                    selectedCategory,
                    searchText
                  );
                  filterProducts = ProductList.applySort(
                    filterProducts,
                    selectedSorter
                  );

                  if (filterProducts.length > 0) {
                    return filterProducts.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  } else {
                    return (
                      <Container fluid className="mt-5">
                        <Row>
                          <Col
                            xs={10}
                            className="mx-auto text-center text-title text-capitalize"
                          >
                            <h1>
                              there are no products matching current filters
                            </h1>
                          </Col>
                        </Row>
                      </Container>
                    );
                  }
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
