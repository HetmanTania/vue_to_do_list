import { createStore } from 'vuex'
import {IPojcects}  from '../types/interface';

interface IState {
  project: IPojcects | [],
}

export default createStore({
  state: (): IState => ({
    project:[],
  }),
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
