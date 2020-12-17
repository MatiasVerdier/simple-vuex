<template>
  <div class="p-8">
    <input type="text" v-model="amount" />
    <input type="text" v-model="time" />
    <h1 class="my-4 text-5xl">{{ firstName }}</h1>
    <button
      type="button"
      @click="onButtonClick"
      class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
    >
      count is: {{ counter }}
    </button>
  </div>
</template>

<script>
import { mapState } from '../store';

export default {
  name: 'HelloWorld',
  data() {
    return {
      amount: 1,
      time: 1000,
    };
  },

  computed: {
    firstName() {
      return this.$store.state.user.firstName;
    },
    ...mapState(['counter']),
  },

  mounted() {
    console.log(this.$store);
  },

  methods: {
    onInput(event) {
      this.$store.commit('updateFirstName', event.target.value);
    },

    onButtonClick() {
      this.$store.dispatch('incrementAsync', {
        amount: Number(this.amount),
        time: this.time,
      });
    },
  },
};
</script>
