<template>
  <div style="width:250px; margin: 5px auto;"  >
    <div style="display: flex; justify-content: space-between">
      <span :class="{completed: todo.completed}" @click="toggleToCompleted">{{ todo.title }}</span> <button @click="deleteTodoItem()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
        type: Object,
        default: () => ({})
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteTodoItem() {
      this.$store.dispatch("deleteTodoItem", this.todo);
    },
    toggleToCompleted() {
        this.$store.dispatch("toggleTodoCompleted", this.todo)
    }
  },
};
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>