import products from '../static/products';

export const state = () => ({});

export const actions = {
	nuxtServerInit({ commit }) {
		commit('products/setProducts', products);
	}
};
