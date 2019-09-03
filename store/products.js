export const state = () => ({
  products: null,
  product: null,
  filteredProducts: [],
  filteredByCategory: [],
  filteredByManufacturer: [],
  view: 'List',
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  changeView(state, view) {
    state.view = view;
  },
  sortByPrice(state, sort) {
    let array = state.filteredProducts.length
      ? state.filteredProducts
      : state.products;
    array.sort((A, B) => {
      let priceA = parseFloat(A.price);
      let priceB = parseFloat(B.price);
      return sort == 1 ? priceA - priceB : priceA + priceB;
    });
  },
  filterResults(state, criterias) {
    const filtered = [];
    let catFilters, manFilters;
    for (let category of criterias.category) {
      catFilters = state.products.filter(elem => {
        if (elem.category === category) {
          if (filtered.includes(elem)) return;
          if (!criterias.manufacturer || !criterias.manufacturer.length) {
            filtered.push(elem);
          } else if (criterias.manufacturer.includes(elem.manufacturer)) {
            filtered.push(elem);
          }
        }

      });
    };

    for (let manufacturer of criterias.manufacturer) {
      manFilters = state.products.map(elem => {
        if (elem.manufacturer === manufacturer) {
          if (filtered.includes(elem)) return;
          if (!criterias.category || !criterias.category.length) {
            filtered.push(elem);
          } else if (criterias.category.includes(elem.category)) {
            filtered.push(elem);
          }
        }
      })
    };
    if (!filtered.length && (criterias.manufacturer.length || criterias.category.length)) {
      state.filteredProducts = [{ error: 'Няма намерени резултати за това търсене' }];
    } else {
      state.filteredProducts = filtered;
    }
  },
  findProduct(state, id) {
    state.product = state.products.find(elem => elem.id === id);
  },
};

export const actions = {
  setProducts({ commit }, products) {
    commit("setProducts", products);
  },
  changeView({ commit }, view) {
    commit('changeView', view);
  },
  sortByPrice({ commit }, sort) {
    commit('sortByPrice', sort);
  },
  findProduct({ commit }, id) {
    commit('findProduct', id);
  },
  filterResults({ commit }, criterias) {
    commit('filterResults', criterias);
  }
};

export const getters = {
  getAllProducts(state) {
    return state.products;
  },
  getProducts(state) {
    return state.filteredProducts.length
      ? setImmediate.filterProducts
      : state.products;
  },
  getView(state) {
    return state.view;
  },
  getFilteredProducts(state) {
    return state.filteredProducts;
  },
  getProductsCount(state) {
    return state.filteredProducts.length || state.products.length;
  },
  getFilters(state) {
    return state.filters;
  },
  getProduct(state) {
    return state.product;
  },
  getFeaturedProducts(state) {
    return state.products.filter(elem => elem.isFeatured === true);
  }
};
