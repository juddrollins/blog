<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <b-field
          label="Username"
          type="is-success"
          message="This username is available"
        >
          <b-input value="" maxlength="30"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <b-field label="Password">
          <b-input type="password" value="" password-reveal>
          </b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <NuxtLink to="/">
          <b-button type="is-primary is-fullwidth">Login</b-button>
        </NuxtLink>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <NuxtLink to="/landing">
          <b-button type="is-dark is-fullwidth">Back</b-button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
