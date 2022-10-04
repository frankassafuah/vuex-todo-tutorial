import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [{
                title: "Todo item A",
                completed: false,
            },
            {
                title: "Todo item B",
                completed: false,
            },
        ],
    },
    getters: {
        completedTodos(state) {
            return state.todos.filter((todo) => {
                return todo.completed === true;
            }).length;
        },
        pendingTodos(state) {
            return state.todos.filter((todo) => {
                return todo.completed === false;
            }).length;
        },
    },
    mutations: {
        NEW_TODO(state, payload) {
            state.todos.push({
                title: payload,
                completed: false,
            });
        },
        DELETE_TODO(state, payload) {
            const index = state.todos.indexOf(payload);
            state.todos.splice(index, 1);
        },
        TOGGLE_COMPLETED(state, payload) {
            payload.completed = !payload.completed;
        },
    },
    actions: {
        addNewTodo({ commit }, payload) {
            commit("NEW_TODO", payload);
        },
        deleteTodoItem({ commit }, payload) {
            commit("DELETE_TODO", payload);
        },
        toggleTodoCompleted({ commit }, payload) {
            commit("TOGGLE_COMPLETED", payload);
        },
    },
});