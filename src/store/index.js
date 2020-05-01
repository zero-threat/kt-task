import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../db.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    isFetching: false
  },
  mutations: {
    GET_TASKS(state, tasks) {
      state.tasks = tasks
      state.isFetching = false
    },
    TOGGLE_DONE(state, id) {
      const idx = state.tasks.findIndex(el => el.id === id)
      state.tasks[idx].isDone = !state.tasks[idx].isDone
    },
    UPDATE_TASK(state, newData) {
      const selectedTaskIndex = state.tasks.findIndex(el => el.id === newData.id)
      state.tasks[selectedTaskIndex] = { ...state.tasks[selectedTaskIndex], ...newData }
    },
    ADD_TASK(state, newTask) {
      if (newTask.name.length) {
        state.tasks = [...state.tasks, newTask]
      }
    },
    DELETE_TASK(state, id) {
      const idx = state.tasks.findIndex(el => el.id === id)
      state.tasks.splice(idx, 1)
    },
    SORT_TASKS(state) {
      state.tasks = state.tasks.reverse()
    }
  },
  actions: {
    fetchTasks({ commit }) {
      this.state.isFetching = true
      setTimeout(commit, 2000, 'GET_TASKS', db)
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    findTask: (state) => (id) => {
      return state.tasks.find(el => el.id === id)
    },
    isLoading(state) {
      return state.isFetching
    }
  }
})
