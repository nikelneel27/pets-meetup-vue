<template>
  <v-container class="meetup-single">
    <v-layout row wrap>
      <v-flex xs12
        ><v-card class="mx-auto mt-2" width="100%">
          <v-img
            class="white--text align-end"
            :src="meetup.imageUrl"
            height="450px"
          >
            <v-card-title>{{ meetup.title }}</v-card-title></v-img
          >
          <v-card-subtitle>
            <div class="red--text">
              <h2>{{ meetup.date | date }}</h2>
            </div>
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn Plain class="red white--text right"> Register </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      console.log(this.id);
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>

<style scoped>
.meetup-single {
  background-color: rgb(20, 20, 20);
}
</style>