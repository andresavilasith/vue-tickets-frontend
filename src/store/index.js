import { createStore } from 'vuex'
import ticketsModule from '../modules/tickets-module'
import citiesModule from '../modules/cities-module'
export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        ticketsModule,
        citiesModule
    }
})