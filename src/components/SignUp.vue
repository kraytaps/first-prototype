<template>
<div class="welcome-container">
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
  <div class="sign-in">
    <div class="sign-in-box">
      <!-- <h5>Name</h5> -->
      <v-form class="sign-in-form">
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
      <v-form class="sign-in-form">
        <v-text-field
          name="Password"
          label="Password"
          class="sign-in-input"
          clearable
          :rules="[rules.required]"
        ></v-text-field>
      </v-form>
    </div>
  </div>
</div>
  <!-- <div>
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
  </div> -->
</template>

<script>
export default {
  props: {
    
  },
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
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.nav-icons {
  // text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
  // padding: 10% 5%;
}
@media only screen and (min-width: 700px){
  .welcome-container {
    width: 500px;
    display: block;
    // height: 100vh;
    margin: 0 auto;
    .sign-in {
      .sign-in-box {
        .sign-in-form {
          width: 80%;
        }
      }
      .sign-in-box:hover {
        background: none;
      }
    }
    .nav-btns {
      width: 30%;
    }
  }
}
.welcome-container {
  height: 100vh;
}
.welcome-text {
  margin-top: 40%;
  font-family: 'Josefin Sans', sans-serif;
  .user-icon {
    margin: 0 0 5% 10%;
  }
  h1 {
    margin: 0 10% 0;
    font-weight: 800;
    font-size: 3em;
    color: #1F2845;
  }
  h4 {
    font-family: 'Nunito', sans-serif;
    margin: 2% 10% 5%;
    color: grey;
    font-weight: 600;
  }
}
.sign-in {
  width: 100%;
  position: relative;
}
.sign-in-box {
  display: flex;
  // background: white;
  width: 80%;
  height: 9%;
  border-radius: 0 15px 15px 0;
  font-family: 'Nunito', sans-serif;
  margin: 2% 0;
  h5 {
    margin: 0 0 0 10%;
    color: #939DBE;
    position: fixed;
  }
  .sign-in-input {
    background: none;
    border: none;
    font-size: 1.1em;
    margin: 0 0 0 20%;
    outline: none;
    color: #939DBE;
    font-weight: 700;
  }
}
.sign-in-box:hover {
  background: rgb(249, 249, 255);
}
.alt-accounts {
  margin: 5% 10% auto;
  h3 {
    font-family: 'Montserrat';
    font-size: 1em;
  }
  .alt-icons {
    margin: 2% 0;
    .alt-icon {
      margin: 0 2%;
    }
  }
}
.nav-btns {
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 10%;
  width: 60%;
  .create-acc-btn {
    margin: 2vh 0;
  }
}
</style>