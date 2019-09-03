export const state = () => ({
    products: [],
    purchased: false,
});

export const mutations = {
    addProductToCart(state, product) {
        const productAdded = state.products.find(
            elem => elem.id === product.id
        );
        if (!productAdded) {
            state.products.push({ ...product, quantity: 1 });
        } else {
            productAdded.quantity++;
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
    },
    quantityChanged(state, payload) {
        const product = state.products.find(elem =>
            elem.id === payload.product.id);
        product.quantity = payload.quantity;
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
    },
    quantityChanged({ commit }, payload) {
        if (+payload.quantity === 0) {
            commit('removeProductFromCart', payload.product);
            return;
        }
        commit('quantityChanged', payload);
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
            const productsPrices = state.products.map(elem =>
                parseFloat(elem.price) * elem.quantity
            );
            const totalPrice = productsPrices.reduce((accumulator, elem) => {
                return accumulator + elem;
            });
            return `${totalPrice.toFixed(2)}лв.`;
        } else {
            return 0;
        }
    },
    getProductQuantity: (state) => (product) => {
        const productToCheck = state.products.find(elem => elem.id === product.id);
        return productToCheck ? productToCheck.quantity : 0;
    }
};