<template>
  <div class="home-page">
    <div class="top-banner">
      <div class="top-banner-left"></div>
      <div class="top-banner-right">
        <img src="../assets/home-img.svg" alt="" />
      </div>
    </div>
    <div class="overlap-img">
      <p>We Love</p>
      <p>to help you</p>
      <p>meet your</p>
      <p>fur friends.</p>
    </div>
    <section class="section">
      <div class="section-image-meetup">
        <img
          src="https://image.freepik.com/free-vector/illustration-concept-with-people-with-pets_52683-30880.jpg"
          alt=""
        />
      </div>
      <div class="section-heading">
        <p>Create</p>
        <p>Meet ups,</p>
        <p>Meet New</p>
        <p>Fur Friends</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          labore similique fugiat quidem omnis aperiam illo iure laboriosam
          aspernatur? Velit? ducimus adipisci, consequatur possimus quas?
          Laudantium ipsum sequi id. Nesciunt beatae ad odit quibusdam sed atque
          delectus maxime quasi!
        </p>
      </div>
    </section>
    <section class="pm-meetups-heading">
      <p>Discover the events</p>
      <p>happening near you !</p>

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
        <v-layout justify="center" row wrap>
          <v-flex xs12>
            <v-carousel
              outlined
              hide-delimiters
              cycle
              :show-arrows="false"
              class="mt-4 carousel"
              style="cursor: pointer"
            >
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
                <v-list three-line>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="carousel-list-item-title">{{
                        meetup.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="carousel-list-item-subtitle">
                        <strong>Time : </strong> {{ meetup.date }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="carousel-list-item-subtitle">
                        <strong>Location :</strong>
                        {{ meetup.location }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle class="carousel-list-item-desc">{{
                        meetup.description
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-carousel-item>
            </v-carousel>
            <div
              @click="navMeetup"
              justify="center"
              class="nav-explore-more blue--text mt-5 mb-5 p-2"
            >
              <p>Meetings Near you</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem voluptatum ab quasi doloremque minus quibusdam fugiat
                et dignissimos temporibus magni?
              </p>
              Explore more
              <v-icon light class="pr-5">fa-angle-double-right</v-icon>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <div class="pm-carousel-heading-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia
          ducimus ab quam ut iste et quo aliquid! Unde est non eveniet explicabo
          nihil sit a distinctio veniam adipisci voluptate!
        </p>
      </div> -->
    </section>
    <footer>
      <div class="footer">
        <div><h2>Pets Meet up</h2></div>
        <div>
          <h2>About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cumque illo ipsa minima quis debitis itaque officiis soluta? Unde
            asperiores possimus deleniti,
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>mail - info@petsmeetup.co.uk</p>
          <p>Tel - 00 654 345</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      return this.$store.getters.loading;
    },
    isUserAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
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
    navMeetup() {
      if (this.isUserAuthenticated) {
        this.$router.push("/meetups");
      } else {
        this.$router.push("/signin");
      }
    },
  },
};
</script>

<style scoped>
.top-banner {
  padding: 80px;
  display: flex;
}
.top-banner-right {
  width: 50%;
}
.top-banner-left {
  width: 50%;
}
.top-banner-right img {
  width: 100%;
}
.overlap-img {
  position: absolute;
  top: 275px;
  left: 80px;
  background-color: blue;
  width: 100%;
  max-width: 400px;
  height: 400px;
  color: #fff;
  padding-top: 40px;
  /* padding: 20px; */
  /* border-radius: 12px; */
}
.overlap-img p {
  padding-left: 35px;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.3;
}
.section {
  padding-top: 200px;
  background-color: #000 !important;
  color: #fff;
}
.section-heading p {
  text-align: left;
  font-size: 5rem;
  line-height: 1;
  padding-left: 80px;
  font-weight: 700;
}
.section-heading p:nth-child(2) {
  color: blue;
}
.section-heading p:nth-child(5) {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  padding-bottom: 120px;
  padding-top: 50px;
}
.section-image-meetup {
  position: absolute;
  top: 755px;
  left: 560px;
}
.section-image img {
  width: 100%;
  max-width: 600px;

  border-radius: 6px;
}
.pm-meetups-heading p {
  font-size: 3.8rem;
  line-height: 1;
  padding-left: 80px;
  font-weight: 700;
}
.pm-meetups-heading p:nth-child(1) {
  margin-top: 80px;
}
.pm-meetups-heading span {
  width: 600px;
}

.v-image__image.v-image__image--cover {
  background-size: contain !important;
}
.carousel {
  max-width: 600px;
  width: 100%;
  height: 700px;
  margin-bottom: 50px;
  border: 2px solid #ddd;
  padding: 20px;
}

.footer {
  display: flex;
  justify-content: space-evenly;
  background-color: #000;
  color: #fff;
  padding: 40px 20px;
}
.footer div:nth-child(1),
.footer div:nth-child(2),
.footer div:nth-child(3) {
  width: 33%;
}
.footer div:nth-child(1),
.footer div:nth-child(3) {
  padding-left: 30px;
}
.nav-explore-more {
  /* padding-left: 10px; */
  color: rgb(79, 79, 228);
  cursor: pointer;
  position: absolute;
  top: 1845px;
  right: 70px;
  font-size: 2rem;
  /* background-color: #000; */
  padding: 20px;
  border: 2px solid #ddd;
}
.nav-explore-more p:nth-child(1) {
  font-size: 2rem;
  color: #000;
  font-weight: 700;
  margin-top: 10px !important;
}
.nav-explore-more p {
  font-size: 16px;
  color: rgb(109, 105, 105);
  max-width: 400px;
  text-align: left;
  padding-left: 0;
  font-weight: 300;
}

.nav-explore-more .v-icon {
  font-size: 60px;
  color: rgb(79, 79, 228);
}
/* .carousel > .v-btn.v-btn--icon {
  height: 0 !important;
  width: 0 !important;
}
i.v-icon.notranslate.fas.fa-chevron-right.theme--dark {
  font-size: 2px !important;
} */
.carousel-list-item-title {
  font-size: 1.5rem !important;
  color: blue;
}
.carousel-list-item-subtitle {
  font-size: 1.1rem !important;
  color: #000 !important;
}

@media (max-width: 768px) {
  .top-banner {
    padding: 50px;
  }
  .top-banner-left {
    display: none;
  }
  .top-banner-right {
    width: 100%;
  }
  .top-banner-right img {
    max-width: 300px;
    /* margin: 0 auto; */
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  .overlap-img {
    display: none;
  }
  .section {
    padding-top: 70px;
  }
  .section-heading p {
    text-align: center;
    font-size: 3.8rem;
    line-height: 1;
    font-weight: 500;
    margin: 0 auto;
    padding-left: 0;
  }
  .section-heading p:nth-child(5) {
    font-size: 12px;
    padding: 50px 12px 80px 12px;
  }

  .section-image-meetup {
    top: 830px;

    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
  }
  .section-image-meetup img {
    max-width: 300px;
  }
  .pm-meetups-heading p {
    text-align: center;
    font-size: 2.5rem;
    /* line-height: 1; */
    padding: 4px 12px;
    margin: 0 auto;
    font-weight: 700;
  }
  .pm-meetups-heading p:nth-child(1) {
    margin-top: 150px;
  }
  .carousel {
    margin-bottom: 280px;
    border: none;
    /* padding: 30px; */
  }
  .v-image__image.v-image__image--cover {
    background-size: contain !important;
  }
  .nav-explore-more {
    top: 1685px;
    right: auto;
    left: auto;
    /* padding: 10px; */
    border: 1px solid #ddd;
  }
  .nav-explore-more p:nth-child(1) {
    font-size: 1.5rem;
  }
  .nav-explore-more p {
    font-size: 16px;
    text-align: center;
    font-weight: 300;
  }
  .nav-explore-more .v-icon {
    font-size: 40px;
  }
  .footer {
    display: block;
  }
  .footer div:nth-child(1),
  .footer div:nth-child(2),
  .footer div:nth-child(3) {
    width: 100%;
  }
  .footer div:nth-child(1),
  .footer div:nth-child(3) {
    padding-left: 0;
  }
  .footer div:nth-child(1) h2,
  .footer div:nth-child(2) h2,
  .footer div:nth-child(3) h2 {
    font-size: 16px;
    font-weight: 500;
  }
  .footer div:nth-child(2) p,
  .footer div:nth-child(3) p {
    font-size: 12px;
    font-weight: 300;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .top-banner-right img {
    max-width: 600px;
  }
  .section-image-meetup img {
    max-width: 450px;
  }
  .section-image-meetup {
    top: 1008px;
  }
  .pm-meetups-heading p:nth-child(1) {
    margin-top: 275px;
  }
  .nav-explore-more {
    top: 1960px;
    margin: auto;
    text-align: center;
  }
  .home {
    display: flex;
    align-items: center;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1400px) {
  .section-image-meetup img[data-v-2667747e] {
    max-width: 570px;
  }
  .carousel {
    max-width: 700px;
  }
  .nav-explore-more {
    right: 70px;
  }
}
@media (min-width: 1440px) {
  .overlap-img {
    top: 355px;
    left: 110px;
  }
  .section-image-meetup[data-v-2667747e] {
    top: 810px;
    left: 630px;
  }
  .carousel {
    max-width: 800px;
  }
  .nav-explore-more {
    right: 40px;
  }
}
</style>