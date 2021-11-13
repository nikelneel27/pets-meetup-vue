<template>
  <div class="meetups">
    <v-container class="pm-container">
      <v-layout v-for="meetup in meetups" :key="meetup.id" row wrap>
        <v-flex xs12
          ><v-card class="mx-auto mt-2 pm-meetup-card" max-width="400">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex>
                  <v-img
                    class="white--text align-end"
                    :src="meetup.imageUrl"
                    height="200px"
                  >
                    <v-card-title>{{ meetup.title }}</v-card-title></v-img
                  >
                  <v-card-text class="text--primary">
                    <!-- <div class="red--text">Play Date @ Paleom park</div> -->
                    <span class="red--text">
                      <h2>
                        {{ meetup.date | date }}
                        @
                        {{ meetup.location }}
                      </h2>
                    </span>
                    <div>
                      {{ meetup.description }}
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      @click="loadedMeetup"
                      :to="'/meetups/' + meetup.id"
                      color="orange"
                      text
                    >
                      View Meet Up</v-btn
                    >
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
    methods: {
      loadMeetup() {
        this.$route.push();
      },
    },
  },
};
</script>

<style scoped>
.meetups {
  background-color: rgb(20, 20, 20);
}
.pm-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.pm-meetup-card {
  margin: 10px;
}
</style>