<script>
import PlayingBoard from './PlayingBoard.vue';
import InputBoard from "./InputBoard.vue";

export default {
  components: {
    PlayingBoard,
    InputBoard
  },
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
  }
}
</script>

<template>
  <div class="container">
    <div>
      <PlayingBoard></PlayingBoard>
    </div>
    <div class="mt-5">
      <InputBoard></InputBoard>
    </div>
  </div>
</template>
