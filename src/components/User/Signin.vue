<template>
  <div class="signin">
    <v-container>
      <v-layout>
        <v-flex>
          <v-row>
            <v-col md="6" sm="12">
              <v-img
                class="pm-signup-img"
                src="https://image.freepik.com/free-vector/cat-elegant-tie_71593-692.jpg"
                height="500px"
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
                      dark
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
                      dark
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
                    <v-btn type="submit" class="red white--text mb-2"
                      >Sign In</v-btn
                    >
                  </v-flex></v-layout
                >

                <p>
                  Not registered yet, <a @click="navToSignUp">Sign up</a> now .
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
  background-color: rgb(20, 20, 20);
  color: #fff;
}
.pm-signup-img {
  width: 100%;
  max-width: 500px;
}
.pm-signup-title {
  font-weight: 500;
}
</style>