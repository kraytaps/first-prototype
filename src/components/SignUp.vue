<template>
  <div>
    <div class="nav-icons">
      <router-link to="/">
        <font-awesome-icon icon="arrow-left" class="back-btn fa-2x" color="#1F2845"/>
      </router-link>
    </div>
    <div class="welcome-text">
      <font-awesome-icon icon="user" class="user-icon fa-3x" color="#1F2845"></font-awesome-icon>
      <h1>Sign Up</h1>
      <h4>Enter a new email and password.</h4>
    </div>
    <div class="sign-up">
      <div class="sign-up-box">
        <!-- <h5>Name</h5> -->
        <v-form>
          <v-text-field
            name="Email"
            label="E-mail"
            class="sign-up-input"
            clearable
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-form>
      </div>
      <div class="sign-up-box">
        <!-- <h5>Name</h5> -->
        <!-- <input type="text" class="sign-in-input" placeholder="Password"> -->
        <v-form>
          <v-text-field
            name="Password"
            label="Password"
            class="sign-up-input"
            clearable
            :rules="[rules.required]"
          ></v-text-field>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-icons {
    // text-align: center;
    padding: 10vw 5vw;
  }
  .welcome-text {
    margin-top: 5vh;
    font-family: 'Josefin Sans', sans-serif;
    .user-icon {
      margin: 0 0 5vh 10vw;
    }
    h1 {
      margin: 0 10vw 0;
      font-weight: 800;
      font-size: 3em;
      color: #1F2845;
    }
    h4 {
      font-family: 'Nunito', sans-serif;
      margin: 2vw 10vw 5vw;
      color: grey;
      font-weight: 600;
    }
  }
  .sign-up {
    width: 100vw;
    position: relative;
  }
  .sign-up-box {
    display: flex;
    // background: white;
    width: 80vw;
    height: 9vh;
    border-radius: 0 15px 15px 0;
    font-family: 'Nunito', sans-serif;
    margin: 2vw 0;
    h5 {
      margin: 0 0 0 10vw;
      color: #939DBE;
      position: fixed;
    }
    .sign-up-input {
      background: none;
      border: none;
      font-size: 1.1em;
      margin: auto 10vw;
      outline: none;
      color: #939DBE;
      font-weight: 700;
    }
  }
  .sign-up-box:hover {
    background: rgb(249, 249, 255);
  }
</style>