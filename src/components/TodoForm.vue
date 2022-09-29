<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button @click="addNewTodoItem">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',

    data() {
        return {
            newTodoItem: ''
        };
    },
    methods: {
        addNewTodoItem() {
            this.$store.dispatch('addNewTodo', this.newTodoItem);
            this.newTodoItem = ""
        }
    },
};
</script>

<style scoped>

</style>