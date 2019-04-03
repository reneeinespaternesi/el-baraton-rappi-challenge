import React, { Component } from "react";
import { Col, Form, Container, Row, Button } from "react-bootstrap";
import styled from "styled-components";
import { ProductConsumer } from "../context";

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
            hideFilter
          } = value;
          const {
            setSorter,
            toogleFilters,
            setAvailableFilter,
            setPriceFilter,
            setQtyFilter,
            clearFilters
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
                        <Col sm={6}>
                          <h5 className="mb-2 mt-2">
                            <strong>Categories</strong>
                          </h5>
                          <button
                            type="button"
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            onClick={() => clearFilters()}
                          >
                            clear filters
                          </button>
                        </Col>
                        <Col sm={6}>
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
`;

export default Filter;
