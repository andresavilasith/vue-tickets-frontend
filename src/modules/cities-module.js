import axios from 'axios'
const state = {
    cities: []
};
const getters = {
    citiesList: state => state.cities
};
const actions = {
    async fetchCities({ commit },page) {
        const response = await axios.get(`http://127.0.0.1:8000/api/city?page=${page}`);
        const cities = response.data.cities;
        commit("setCities", cities)
    },
};
const mutations = {
    setCities: (state, cities) => (
        state.cities = cities
    ),
};
export default {
    state,
    getters,
    actions,
    mutations
}