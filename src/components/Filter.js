import React, { Component } from "react";
import { Col, Form, Container, Row, Button, Image } from "react-bootstrap";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import TreeView from "react-treeviewer";

class Filter extends Component {
  static hideFilters() {}

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            sorters,
            selectedSorter,
            availableFilter,
            priceFilter,
            quantityFilter,
            hideFilter,
            categories,
            selectedCategory
          } = value;
          const {
            setSorter,
            toogleFilters,
            setAvailableFilter,
            setPriceFilter,
            setQtyFilter,
            clearFilters,
            setCategory
          } = value;
          return (
            <Container fluid>
              <FilterWrapper>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => toogleFilters()}
                  className="filter-btn"
                >
                  {hideFilter ? (
                    <i className="fas fa-plus-circle" />
                  ) : (
                    <i className="fas fa-minus-circle" />
                  )}
                </Button>

                <Form className="form-wrapper">
                  <h3 className="mb-4">
                    <strong>Refine Results:</strong>
                  </h3>
                  {!hideFilter && (
                    <fieldset>
                      <Form.Group as={Row}>
                        <Col sm={6}>
                          <Form.Group as={Row}>
                            {/* filter by*/}
                            <Col sm={12}>
                              <h5 className="mb-2 mt-2">
                                <strong>Filter By:</strong>
                              </h5>
                              <Form.Group as={Row}>
                                <Col sm={12} className="mb-2">
                                  <Form.Check
                                    type="radio"
                                    label="Available"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    checked={availableFilter}
                                    onChange={event => {
                                      setAvailableFilter(event.target.value);
                                    }}
                                  />
                                </Col>
                                <Col sm={4}>
                                  <Form.Label>Price From</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Price From"
                                    value={priceFilter}
                                    onChange={event =>
                                      setPriceFilter(Number(event.target.value))
                                    }
                                  />
                                </Col>
                                <Col sm={4}>
                                  <Form.Label>Quantity</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Quantity From"
                                    value={quantityFilter}
                                    onChange={event =>
                                      setQtyFilter(Number(event.target.value))
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Col>
                            {/* sort by*/}
                            <Col sm={12}>
                              <h5 className="mb-2 mt-2">
                                <strong>Sort By:</strong>
                              </h5>
                              <Form.Group as={Row}>
                                <Col sm={8}>
                                  <Form.Control
                                    as="select"
                                    value={sorters}
                                    onChange={event => {
                                      setSorter(event.target.value);
                                    }}
                                  >
                                    <option value="">
                                      {selectedSorter
                                        ? selectedSorter
                                        : "Choose..."}
                                    </option>
                                    {value.sorters.map(sort => (
                                      <option key={sort} value={sort}>
                                        {sort}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </Col>
                              </Form.Group>
                            </Col>
                          </Form.Group>
                        </Col>
                        {/*categories*/}
                        <Col sm={6}>
                          <h5 className="mb-2 mt-2">
                            <strong>Categories</strong>
                          </h5>
                          <TreeView
                            data={categories}
                            selectable={true}
                            checkable={false}
                            onSelect={(event, nodeData) => {
                              setCategory(nodeData);
                            }}
                            draggable={false}
                            animation={true}
                            className="col-6"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={12} className="text-center">
                          <button
                            type="button"
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            onClick={() => clearFilters()}
                          >
                            clear filters
                          </button>
                        </Col>
                      </Form.Group>
                    </fieldset>
                  )}
                </Form>
              </FilterWrapper>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}

const FilterWrapper = styled.div`
  position: relative;

  .filter-btn {
    position: absolute;
    right: 1rem;
    border: none;
    top: 0.5rem;
    color: var(--blue);
  }

  .filter-btn:hover,
  .filter-btn:focus {
    outline: none;
    box-shadow: none;
    color: var(--blue);
    background: transparent;
  }

  .form-wrapper {
    padding: 2rem 2rem 0rem 2rem;
    border: 1px solid var(--blue);
    border-radius: 4px;
  }

  .formSortOrder {
    text-transform: capitalize;
  }

  .formFilter {
    border-right: 1pz solid var(--blue);
  }

  .category-btn {
    background: transparent;
    border: 1px solid var(--grey);
    border-radius: 100%;
    padding: 0.5rem;
    overflow: hidden;
  }

  .category-btn:hover {
    background-color: var(--lightBlue);
  }

  .category-btn.selected {
    background-color: var(--lightBlue);
    outline: none;
  }

  .btn-container span {
    display: block;
  }

  .tree-root {
    font-size: 18px;
    font-family: "Quattrocento Sans", sans-serif;
  }

  .tree-node-hovered a {
    background-color: var(--lightBlue);
    color: white;
  }
`;

export default Filter;
