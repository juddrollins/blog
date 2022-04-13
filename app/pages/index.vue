<template>
  <section>
    <div>HELLO</div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "IndexPage",
  components: {
    Card,
  },
  middleware: 'auth'
};
</script>
