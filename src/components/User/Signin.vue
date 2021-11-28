<template>
  <div class="signin">
    <v-container>
      <v-layout>
        <v-flex>
          <v-row>
            <v-col md="6" sm="12">
              <v-img
                class="pm-signin-img"
                src="https://image.freepik.com/free-vector/dog-walking-concept-illustration_114360-3169.jpg"
                min-height="270px"
              >
              </v-img>
            </v-col>
            <v-col md="6" sm="12">
              <form @submit.prevent="onSignIn">
                <v-layout>
                  <v-flex>
                    <h1 class="pm-signup-title mb-4">Sign In</h1>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      label="E-mail"
                      outlined
                      id="name"
                      v-model="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      type="password"
                      label="Password"
                      outlined
                      id="password"
                      v-model="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout
                  ><v-flex>
                    <v-btn type="submit" class="red white--text mb-5"
                      >Sign In</v-btn
                    >
                  </v-flex></v-layout
                >

                <p>
                  New Customer ,
                  <a class="link" @click="navToSignUp">Sign up</a> now .
                </p>
              </form>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    navToSignUp() {
      this.$router.push("/signUp");
    },
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.signin {
  background-color: #fff;
  color: #000;
}
.pm-signin-img {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.pm-signup-title {
  font-weight: 500;
}
.s-button {
  margin-bottom: 30px;
}
.link {
  text-decoration: none;
  color: rgb(212, 41, 184) !important;
}
@media (min-width: 768px) {
  .signin {
    padding: 80px;
  }
}
@media (max-width: 768px) {
  .pm-signin-img {
    max-width: 300px;
  }
}
</style>