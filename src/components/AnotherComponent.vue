<template>
  <div>
    <p>Otro componente {{ fullName }}</p>
    <p>Otro componente {{ website }}</p>
  </div>
</template>

<script>
import { mapGetters } from '../store';

export default {
  computed: {
    ...mapGetters(['fullName', 'website']),
  },
};
</script>

<style></style>
