<template>
  <div class="container mx-auto flex flex-col h-screen">
    <HelloWorld />
    <AnotherComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AnotherComponent from './components/AnotherComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AnotherComponent,
  },
};
</script>
