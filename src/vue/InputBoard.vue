<template>
  <div class="d-flex flex-nowrap flex-row justify-content-center mt-2">
    <button type="button" class="btn btn-danger letter" @click="del">del</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('a')">a</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('s')">s</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('d')">d</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('f')">f</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('g')">g</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('h')">h</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('j')">j</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('k')">k</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('l')">l</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('ö')">ö</button>
    <button type="button" class="btn btn-light letter" @click="addLetter('ä')">ä</button>
    <button type="button" class="btn btn-primary letter" @click="sendGuess">send</button>
  </div>
</template>

<script>
export default {
  name: "InputBoard",
  data() {
    return {
      guess: '',
    }
  },
  methods: {
    del() {
      console.log('Ohh so you want to delete stuff?')
      this.guess = this.guess.slice(0, -1)
      console.log(this.guess)
    },
    sendGuess() {
      console.log('Submit guess')
      if (this.guess.length > 4) {
        console.log('Long enough to send!!')
        this.$emit('game.guess', this.guess)
      }
    },
    addLetter(letter) {
      console.log('Adding', letter)
      if (this.guess.length <= 10) {
        this.guess = this.guess + letter
      }
      console.log(this.guess)
    },
  }
};
</script>

<style scoped>

</style>
