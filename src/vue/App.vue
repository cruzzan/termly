<script>
export default {
  components: {
  },
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      guesses: [],
      input: '',
      gameEnded: false,
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    del() {
      console.log('Ohh so you want to delete stuff?')
      this.input = this.input.slice(0, -1)
      console.log(this.input)
    },
    addLetter(letter) {
      console.log('Adding', letter)
      if (this.input.length <= 10) {
        this.input = this.input + letter
        this.$emit('letterAdded', letter)
      }
      console.log(this.input)
    },
    sendGuess() {
      console.log('Submit guess')
      if (this.input.length >= 4) {
        this.guesses[this.guesses.length] = {
          text: this.input,
          lengthCorrect: this.input.length === 5
        }
        this.input = ''

        if (this.guesses.length >= 5) {
          this.gameEnded = true
        }
      }
    },
  },
}
</script>

<template>
  <div class="container">
    <div>
      <div class="d-flex flex-nowrap justify-content-center font-monospace mt-5">
        <div v-for="i in input" :key="i" class="col-2 letter bg-light">{{ i }}</div>
        <div v-if="(4 - input.length) > 0" v-for="x in 4 - input.length" class="col-2 letter bg-light"></div>
      </div>
      <div v-for="g in guesses" class="d-flex flex-nowrap justify-content-center font-monospace mt-2">
        <div class="guess" :class="{ correctLength: g.lengthCorrect }">
          <div v-for="l in g.text" class="col-2 letter">{{ l }}</div>
        </div>
      </div>
      <div v-if="(5 - guesses.length) > 0" v-for="x in 5 - (guesses.length % 5)" class="d-flex justify-content-center font-monospace mt-2">
        <div v-for="x in 6" class="col-2 letter"></div>
      </div>
    </div>
    <div class="mt-5">
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
        <button v-if="!gameEnded" type="button" class="btn btn-success letter" @click="sendGuess">try</button>
      </div>
    </div>
  </div>
</template>
