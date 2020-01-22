<template>
  <div>
    <div class="welcome-text">
      <font-awesome-icon icon="location-arrow" class="location-icon fa-3x" color="#1F2845"></font-awesome-icon>
      <h1>Welcome!</h1>
      <h4>Enter your login details below to sign in.</h4>
    </div>
    <div class="sign-in">
      <div class="sign-in-box">
        <!-- <h5>Name</h5> -->
        <v-form>
          <v-text-field
            name="Email"
            label="E-mail"
            class="sign-in-input"
            clearable
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-form>
      </div>
      <div class="sign-in-box">
        <!-- <h5>Name</h5> -->
        <!-- <input type="text" class="sign-in-input" placeholder="Password"> -->
        <v-form>
          <v-text-field
            name="Password"
            label="Password"
            class="sign-in-input"
            clearable
            :rules="[rules.required]"
          ></v-text-field>
        </v-form>
      </div>
      <div class="alt-accounts">
        <h3>Or sign in using</h3>
        <div class="alt-icons">
          <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x alt-icon"></font-awesome-icon>
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x alt-icon"></font-awesome-icon>
          <font-awesome-icon :icon="['fab', 'google-plus']" class="fa-2x alt-icon"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="nav-btns">
      <div class="sign-in-btn">
        <v-btn color="primary" block elevation="13">Sign In</v-btn>
      </div>
      <div class="create-acc-btn">
        <v-btn color="accent" text block>Create Account</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
<style lang="scss">
  .welcome-text {
    margin-top: 19vh;
    font-family: 'Josefin Sans', sans-serif;
    .location-icon {
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
  .sign-in {
    width: 100vw;
    position: relative;
  }
  .sign-in-box {
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
    .sign-in-input {
      background: none;
      border: none;
      font-size: 1.1em;
      margin: auto 10vw;
      outline: none;
      color: #939DBE;
      font-weight: 700;
    }
  }
  .sign-in-box:hover {
    background: rgb(249, 249, 255);
  }
  .alt-accounts {
    margin: 5vh 10vw auto;
    h3 {
      font-family: 'Montserrat';
      font-size: 1em;
    }
    .alt-icons {
      margin: 2vh 0;
      .alt-icon {
        margin: 0 2vw;
      }
    }
  }
  .nav-btns {
    width: 60vw;
    margin: 5vh auto;
    .create-acc-btn {
      margin: 2vh 0;
    }
  }
</style>