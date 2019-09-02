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
  setFilters(state, obj) {
    state.filters = {
      category: obj.c,
      manufacturer: obj.m,
    };
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
      return state.filters.manufacturer.includes(elem.manufacturer)
        && !state.filters.category.length // ONLY MANUFACTURERS
        ? elem : false ||
          state.filters.category.includes(elem.category)
          && !state.filters.manufacturer.length // ONLY CATEGORIES
          ? elem : false ||
            state.filters.category.includes(elem.category)
            && state.filters.manufacturer.includes(elem.manufacturer) // BOTH FILTERS
            ? elem : false;
    });

    this.app.router.push({
      path: '/products',
      query: {
        ...state.filters
      }
    });
  },
  filterResults(state, criterias) {
    let catFilters, manFilters;

    for (let category of criterias.category) {
      catFilters = state.products.map(elem => {
        if (elem.category === category) {
          if (!state.filteredByCategory.includes(elem)) {
            state.filteredByCategory.push(elem);
          }
        }
      });
    };

    for (let manufacturer of criterias.manufacturer) {
      manFilters = state.products.map(elem => {
        if (elem.manufacturer === manufacturer) {
          if (!state.filteredByManufacturer.includes(elem)) {
            state.filteredByManufacturer.push(elem);
          }
        }
      })
    };
    state.filteredByCategory = catFilters;
    state.filteredByManufacturer = manFilters;
    console.log(state.filteredByCategory);
    console.log(state.filteredByManufacturer);
    // searchCriterias = this.app.router.history.current.query;
    // for (let category of searchCriterias.category) {
    //   console.log(category);
    //   test = state.products.filter(elem => {
    //     if (elem.category === category) {
    //       return elem;
    //     }
    //   });

    // }
    // state.filteredProducts = test;
    // console.log(test);


  },
  findProduct(state, id) {
    state.product = state.products.find(elem => elem.id === id);
  },
  setFilters(state, products) {
    state.filteredProducts = products;
  }
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
