<template>
  <div>
    <img
            src="~assets/404.gif"
            alt="Buefy"
            height="28"
          >
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>