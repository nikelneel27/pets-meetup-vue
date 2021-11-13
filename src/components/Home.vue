<template>
  <v-container class="home">
    <v-layout>
      <v-flex xs12>
        <v-progress-circular
          class="text-xs-center"
          indeterminate
          color="green"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel class="mt-4" style="cursor: pointer">
          <v-layout>
            <v-flex xs12>
              <v-progress-circular
                class="text-xs-center"
                indeterminate
                color="green"
                :width="7"
                :size="70"
                v-if="loading"
              ></v-progress-circular>
            </v-flex>
          </v-layout>
          <v-carousel-item
            class="pm-meetup-carousel-images"
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="pm-meetup-title">
              <h4>
                {{ meetup.title }}
              </h4>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <Sponsers />
  </v-container>
</template>

<script>
import Sponsers from "./Sponsers";
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      return this.$store.getters.loading;
    },
    // sortedMeetups() {
    //   console.log(this.$store.getters.loadedMeetups);
    //   return this.$store.getters.loadedMeetups;
    // },
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    },
  },
  components: {
    Sponsers,
  },
};
</script>

<style scoped>
.home {
  background-color: rgb(20, 20, 20);
}
.pm-meetup-title h4 {
  padding: 2px;
  position: absolute;
  bottom: 50px;
  margin-left: 20px;
  font-size: 2.5em;
  width: 100%;
  max-width: 500px;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.23);
}
.pm-meetup-carousel-images {
  filter: grayscale(10%) brightness(0.9);
  width: 100%;
}
</style>