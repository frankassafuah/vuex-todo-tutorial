<template>
  <div>
    <todo v-for="(todo , index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo,
  },
  name: "TodosList",
  data() {
    return {};
  },
  computed: {
    todos() {
        return this.$store.state.todos
    }
  }
};
</script>

<style>
</style>