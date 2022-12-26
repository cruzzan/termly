<template>
  <div class="d-flex flex-nowrap flex-row justify-content-center mt-2">
    <button type="button" class="btn btn-light letter" @click="del">del</button>
    <button type="button" class="btn btn-light letter">a</button>
    <button type="button" class="btn btn-light letter">s</button>
    <button type="button" class="btn btn-light letter">d</button>
    <button type="button" class="btn btn-light letter">f</button>
    <button type="button" class="btn btn-light letter">g</button>
    <button type="button" class="btn btn-light letter">h</button>
    <button type="button" class="btn btn-light letter">j</button>
    <button type="button" class="btn btn-light letter">k</button>
    <button type="button" class="btn btn-light letter">l</button>
    <button type="button" class="btn btn-light letter">ö</button>
    <button type="button" class="btn btn-light letter">ä</button>
    <button type="button" class="btn btn-light letter" @click="guess">guess</button>
  </div>
</template>

<script>
export default {
  name: "InputBoard",
  methods: {
    del(event) {
      console.log('Ohh so you want to delete stuff?')
    },
    guess(event) {
      console.log('Submit guess')
    }
  }
};
</script>

<style scoped>

</style>
