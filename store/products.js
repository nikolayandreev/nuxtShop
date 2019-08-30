export const state = () => ({
  products: null,
  filteredProducts: [],
  filters: {
    category: [],
    manufacturer: [],
  },
  view: 'List',
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  insertProduct(state, product) {
    state.products.push(product);
  },
  deleteProduct(state, product) {
    const index = state.products.findIndex(elem => elem.id == product.id);
    state.products.splice(index, 1);
  },
  changeView(state, view) {
    state.view = view;
  },
  sortByPrice(state, sort) {
    state.products.sort((A, B) => {
      let priceA = parseFloat(A.price);
      let priceB = parseFloat(B.price);
      return sort == 1 ? priceA - priceB : priceA + priceB;
    });
  },
  sortyByCategory(state, category) {
    for (let key in categories) {
      state.filteredProducts = state.products.filter((elem) => {
        return elem.category === categories[key];
      });
    }
  },
  setFilters(state, obj) {
    state.filters = {
      category: obj.c,
      manufacturer: obj.m,
    };
  },

  filterResults(state, context, filters) {
    if (state.filters.category !== undefined) {
      state.filteredProducts = state.products.filter((product) => {
        if (state.filters.category.includes(product.category)) {
          return product;
        }
      });
    }
  },
  addFilterItem(state, obj) {
    let array = obj.category === "category"
      ? state.filters.category : [] ||
        obj.category === "manufacturer"
        ? state.filters.manufacturer : '';

    array.push(obj.elem);
  },
  removeFilterItem(state, obj) {
    let array = obj.category === "category"
      ? state.filters.category : [] ||
        obj.category === "manufacturer"
        ? state.filters.manufacturer : '';

    let index = array.findIndex(elem => elem === obj.elem);
    array.splice(index, 1);
  },
  filterProducts(state) {
    let products = state.products;

    state.filteredProducts = products.filter(elem => {
      if (state.filters.manufacturer.includes(elem.manufacturer) && !state.filters.category.length) {
        return elem;
      }
      if (state.filters.category.includes(elem.category) && !state.filters.manufacturer.length) {
        return elem;
      }
      if (state.filters.category.includes(elem.category) && state.filters.manufacturer.includes(elem.manufacturer)) {
        return elem;
      }
    })

    this.app.router.push({
      path: '/products',
      query: {
        ...state.filters
      }
    });
  },
};

export const actions = {
  setProducts({ commit }, products) {
    commit("setProducts", products);
  },
  insertProduct({ commit }, product) {
    commit("insertProduct", product);
  },
  deleteProduct({ commit }, product) {
    commit("deleteProduct", product);
  },
  filterProducts({ commit }, filters) {
    commit("filterProducts", filters);
  },
  changeView({ commit }, view) {
    commit('changeView', view);
  },
  sortByPrice({ commit }, sort) {
    commit('sortByPrice', sort);
  },
  setFilters({ commit }, filters) {
    commit('setFilters', filters);
  },
  addFilterItem({ commit }, elem) {
    commit('addFilterItem', elem);
  },
  removeFilterItem({ commit }, elem) {
    commit('removeFilterItem', elem);
  },
  filterProducts({ commit }, category) {
    commit('filterProducts');
  }
};

export const getters = {
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
  }
};
