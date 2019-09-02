export const state = () => ({
    products: [],
    purchased: false,
});

export const mutations = {
    addProductToCart(state, product) {
        if (!state.products.includes(product)) {
            state.products.push(product);
        }
    },
    removeProductFromCart(state, product) {
        let removeIndex = state.products.findIndex(elem => {
            return elem.id === product.id
        });

        state.products.splice(removeIndex, 1);
    },
    purchaseProducts(state) {
        state.purchased = !state.purchased;
    },
    clearCart(state) {
        state.products = [];
    }
};

export const actions = {
    addProductToCart({ commit }, product) {
        commit('addProductToCart', product);
    },
    removeProductFromCart({ commit }, product) {
        commit('removeProductFromCart', product);
    },
    purchaseProducts({ commit }) {
        commit('purchaseProducts');
    },
    clearCart({ commit }) {
        commit('clearCart');
    }
};

export const getters = {
    getProducts(state) {
        return state.products;
    },
    isPurchased(state) {
        return state.purchased;
    },
    getProductsCount(state) {
        return state.products.length;
    },
    getProductsPrice(state) {
        if (state.products.length) {
            const productsPrices = state.products.map(elem => parseFloat(elem.price));
            const totalPrice = productsPrices.reduce((accumulator, elem) => {
                return accumulator + elem;
            });
            return `${totalPrice.toFixed(2)}лв.`;
        } else {
            return 0;
        }
    }
};