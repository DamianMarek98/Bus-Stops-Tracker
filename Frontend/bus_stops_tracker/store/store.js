import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        username: '',
        count: 0,
        stopId: 0
    },
    mutations: {
        changeUser(state, username) {
            state.username = username
        },
        increment(state) {
            state.count++
        },
        changeStopId(state, stopID) {
            state.stopId = stopID;
        }
    },
    getters: {
        username: state => state.username,
        count: state => state.count,
        stopId: state => state.stopId
    }
})