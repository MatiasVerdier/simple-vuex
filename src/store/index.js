import { reactive, computed, readonly } from 'vue';

// state
export const state = reactive({
  counter: 0,
  user: {
    firstName: 'Matias',
    lastName: 'Verdier',
    twitter: '@matiasvj',
    website: 'matiasverdier.com',
  },
});

// getters
const getters = {
  fullName() {
    return computed(
      () => `Full name: ${state.user.firstName} ${state.user.lastName}`
    ).value;
  },

  isAuthenticated() {
    return computed(() => !!state.user).value;
  },

  website() {
    return computed(() => state.user.website).value;
  },
};

// mutations
const mutations = {
  updateFirstName(value) {
    console.log('updateFirstName', value);
    state.user.firstName = value;
  },

  increment(amount) {
    state.counter += amount;
  },

  decrement(amount) {
    state.counter -= amount;
  },
};

// Actions
const actions = {
  incrementAsync({ amount, time }) {
    setTimeout(() => {
      commit('increment', amount);
    }, time);
  },
};

// Vuex API
const commit = (mutationName, payload) => {
  console.log(`commit mutation ${mutationName} with payload: ${payload}`);
  mutations[mutationName](payload);
};

const dispatch = (actionName, payload) => {
  console.log(
    `dispatch action ${actionName} with payload: ${JSON.stringify(
      payload,
      null,
      2
    )}`
  );

  actions[actionName](payload);
};

export const mapState = (stateKeys) => {
  const data = {};

  stateKeys.forEach((key) => {
    data[key] = function () {
      return computed(() => state[key]).value;
    };
  });

  return data;
};

export const mapGetters = (gettersNames) => {
  const computedProperties = {};

  gettersNames.forEach((getter) => {
    computedProperties[getter] = getters[getter];
  });

  return computedProperties;
};

export const mapMutations = (mutationNames) => {
  const methods = {};

  mutationNames.forEach((mutation) => {
    methods[mutation] = function (payload) {
      mutations[mutation](payload);
    };
  });

  return methods;
};

export const createStore = () => {
  return {
    state: readonly(state),
    getters,
    mutations,
    actions,
    commit,
    dispatch,
  };
};
