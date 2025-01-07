<template>
    <h1>Cart</h1>
    <button @click="showAlert">Hello world</button>
</template>
<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>