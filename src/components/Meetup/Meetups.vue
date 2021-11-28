<template>
  <div class="meetups">
    <v-container class="pm-container">
      <v-layout v-for="meetup in meetups" :key="meetup.id">
        <v-flex xs12
          ><v-card class="mx-auto mt-2 pm-meetup-card" max-width="400">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex>
                  <v-img
                    class="meetup-img align-end"
                    :src="meetup.imageUrl"
                    height="200px"
                  >
                  </v-img>
                  <v-card-title class="meetup-title">{{
                    meetup.title
                  }}</v-card-title>
                  <v-card-text class="text--primary">
                    <!-- <div class="red--text">Play Date @ Paleom park</div> -->
                    <span class="meetup-date-span blue--text">
                      <p>
                        <strong>Date :</strong>
                        {{ meetup.date | date }}
                      </p></span
                    >
                    <span class="meetup-date-span"
                      ><p>
                        <strong>Location :</strong> {{ meetup.location }}
                      </p></span
                    >

                    <div class="meetup-description">
                      <p>{{ meetup.description }}</p>
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
  background-color: #fff;
}
.pm-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 80px;
}
.pm-meetup-card {
  margin: 50px;
  min-height: 430px;
  border: 1px solid #ccc;
}
.meetup-date-span p {
  font-size: 18px;
  font-weight: 500;
}
.meetup-description {
  font-size: 16px;
}
.meetup-img {
  padding: 5px !important;
}
.meetup-title {
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 768px) {
  .pm-container {
    padding-top: 30px;
  }
}
</style>