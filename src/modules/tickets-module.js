import axios from 'axios'
const state = {
    tickets: []
};
const getters = {
    ticketsList: state => state.tickets
};
const actions = {
    async fetchTickets({ commit },page) {
        const response = await axios.get(`http://127.0.0.1:8000/api/ticket/search?page=${page}`);
        const tickets = response.data.routeWithTickets;
        commit("setTickets", tickets)
    },
};
const mutations = {
    setTickets: (state, tickets) => (
        state.tickets = tickets
    ),
};
export default {
    state,
    getters,
    actions,
    mutations
}