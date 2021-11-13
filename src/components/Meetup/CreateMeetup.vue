<template>
  <div class="pm-create-meetup">
    <v-container class="pm-create-meetup-container">
      <v-layout>
        <v-flex xs12>
          <div class="pm-create-meetup-heading mb-10">
            <h1 class="create-title orange--text">Create a new meet-up</h1>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <form @submit.prevent="onCreateMeetup">
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  dark
                  label="Title"
                  outlined
                  id="title"
                  required
                  v-model="title"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  dark
                  label="Location"
                  outlined
                  id="location"
                  v-model="location"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  dark
                  label="Image Url"
                  outlined
                  id="image-Url"
                  v-model="imageUrl"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-img :src="this.imageUrl"></v-img></v-flex
            ></v-layout>

            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-textarea
                  dark
                  outlined
                  name="input-7-4"
                  label="Description"
                  id="description"
                  v-model="description"
                  required
                >
                </v-textarea>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon>fa-calendar-week</v-icon>
                    <v-text-field
                      dark
                      outlined
                      v-model="date"
                      label="Select the Date"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn type="submit" :disabled="!formIsValid" dark class="red"
                  >Create Meet-up</v-btn
                >
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.location !== "" &&
        this.date !== ""
      );
    },
  },
  data() {
    return {
      meetup: [
        {
          title: "",
          location: "",
          description: "",
          imageUrl: "",
          date: "",
        },
      ],
    };
  },
  methods: {
    onCreateMeetup() {
      const meetupData = {
        title: this.title,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: this.date,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
  },
};
</script>

<style scoped>
.create-title {
  font-weight: 400;
}
.pm-create-meetup {
  background-color: rgb(20, 20, 20);
}
</style>