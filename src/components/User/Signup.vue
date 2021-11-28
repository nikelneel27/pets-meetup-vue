<template>
  <div class="mb-5 signup">
    <v-container>
      <v-layout>
        <v-flex>
          <v-row>
            <v-col md="6" sm="12">
              <v-img
                class="pm-signup-img"
                src="https://image.freepik.com/free-vector/animal-shelter-concept-illustration_114360-2876.jpg"
                min-height="270px"
              >
              </v-img>
            </v-col>

            <v-col md="6" sm="12">
              <form @submit.prevent="onSignUp">
                <v-layout>
                  <v-flex>
                    <h1 class="pm-signup-title mb-4">Sign up</h1>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      label="E-mail"
                      outlined
                      id="email"
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
                <v-layout>
                  <v-flex>
                    <v-text-field
                      type="text"
                      label="Confirm Password"
                      outlined
                      id="confirmPassword"
                      v-model="confirmPassword"
                      required
                      :rules="[comparePasswords]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout
                  ><v-flex>
                    <v-btn type="submit" class="red white--text mb-5"
                      >Sign-Up</v-btn
                    >
                  </v-flex></v-layout
                >
                <p>
                  Already registered ,
                  <a class="link" @click="navToSignIn">Sign In</a>
                  now.
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
      confirmPassword: "",
    };
  },
  computed: {
    comparePasswords() {
      return () =>
        this.password === this.confirmPassword || "Password does not match";
    },
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
    onSignUp() {
      console.log(this.email, this.password);
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
      });
    },
    navToSignIn() {
      this.$router.push("/signIn");
    },
  },
};
</script>

<style scoped>
.signup {
  background-color: #fff;
  color: #000;
}
.pm-signup-img {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.pm-signup-title {
  font-weight: 500;
}
.link {
  text-decoration: none;
  color: rgb(212, 41, 184) !important ;
}
@media (min-width: 768px) {
  .signup {
    padding: 80px;
  }
}
@media (max-width: 768px) {
  .pm-signup-img {
    max-width: 285px;
  }
}
</style>