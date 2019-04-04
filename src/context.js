import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data/products";
import { categories } from "./data/categories";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    categories: categories,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    sorters: ["price up", "price down", "quantity up", "quantity down"],
    selectedSorter: "",
    filters: ["available", "not available", "price", "quantity"],
    availableFilter: false,
    priceFilter: "",
    quantityFilter: "",
    hideFilter: false,
    selectedCategory: ""
  };

  componentDidMount() {
    if (!localStorage.getItem("myCart")) {
      this.setProducts();
    } else {
      const storedData = !localStorage.getItem("myCart")
        ? []
        : JSON.parse(localStorage.getItem("myCart"));
      this.setState(() => {
        return {
          cart: storedData.cart ? storedData.cart : [],
          cartSubtotal: storedData.cartSubtotal ? storedData.cartSubtotal : 0,
          cartTax: storedData.cartTax ? storedData.cartTax : 0,
          cartTotal: storedData.cartTotal ? storedData.cartTotal : 0
        };
      });
    }
  }

  setProducts = () => {
    this.setState(() => {
      return { products: JSON.parse(JSON.stringify(storeProducts)) };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    const quantity = product.quantity;
    product.quantity = quantity - product.count;
    product.count = 1;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);

    if (tempCart[index].quantity > tempCart[index].count) {
      const product = tempCart[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    } else {
      return;
    }
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.quantity -= removedProduct.count;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
        localStorage.setItem("myCart", []);
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      const itemPrice = parseFloat(item.price);
      return (subTotal += itemPrice * item.count);
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(
      () => {
        return {
          cartSubtotal: subTotal.toFixed(2),
          cartTax: tax.toFixed(2),
          cartTotal: total.toFixed(2)
        };
      },
      () => {
        const unified = Object.assign(
          {},
          { cart: this.state.cart },
          { cartSubtotal: this.state.cartSubtotal },
          { cartTax: this.state.cartTax },
          { cartTotal: this.state.cartTotal }
        );
        localStorage.setItem("myCart", JSON.stringify(unified));
      }
    );
  };

  setSorter = sorter => {
    this.setState(() => {
      return {
        selectedSorter: sorter
      };
    });
  };

  setAvailableFilter = value => {
    this.setState(() => {
      return {
        availableFilter: value
      };
    });
  };

  setPriceFilter = value => {
    this.setState(() => {
      return {
        priceFilter: value
      };
    });
  };

  setQtyFilter = value => {
    this.setState(() => {
      return {
        quantityFilter: value
      };
    });
  };

  setCategory = category => {
    this.setState(() => {
      return {
        selectedCategory: category
      };
    });
  };

  clearFilters = () => {
    this.setState(() => {
      return {
        selectedSorter: "",
        availableFilter: false,
        priceFilter: "",
        quantityFilter: "",
        selectedCategory: ""
      };
    });
  };

  toogleFilters = () => {
    const currentFilterState = this.state.hideFilter;
    this.setState(() => {
      return { hideFilter: !currentFilterState };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          setSorter: this.setSorter,
          setAvailableFilter: this.setAvailableFilter,
          setPriceFilter: this.setPriceFilter,
          setQtyFilter: this.setQtyFilter,
          toogleFilters: this.toogleFilters,
          clearFilters: this.clearFilters,
          setCategory: this.setCategory
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
