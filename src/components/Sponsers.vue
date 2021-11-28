<template>
  <v-container class="sponser">
    <v-layout row wrap>
      <v-flex xs12 class="sponser-title mt-4 mb-5"> Our sponsers </v-flex>
    </v-layout>
    <v-container class="sponser-card-main">
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex>
              <v-img
                class="black--text align-center sponser-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXdD8Fwe5EgIJrdG4jf_S_G0mP7oETDDyiA&usqp=CAU"
                height="70px"
              >
                <!-- <v-card-title class="card-title"
                  >Royal Canin</v-card-title -->
              </v-img>
            </v-flex>
          </v-layout></v-container
        >
      </v-card>
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-img
                class="white--text align-end sponser-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cd6F9VkKEXvmf5Vre1sR-dC1mVbGSDDx8g&usqp=CAU"
                height="70px"
              >
              </v-img>
            </v-flex> </v-layout
        ></v-container>
      </v-card>
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-img
                class="white--text align-end sponser-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUARuo2p6wS3ZaXa0NWJgkbrTzgvpTM0TRmQ&usqp=CAU"
                height="70px"
              >
              </v-img>
            </v-flex> </v-layout
        ></v-container>
      </v-card>
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-img
                class="white--text align-end sponser-img"
                src="https://upload.wikimedia.org/wikipedia/en/a/a7/Hill%27s_Science_Diet_logo.jpg"
                height="70px"
              >
                <!-- <v-card-title>Royal Canin</v-card-title> -->
              </v-img>
            </v-flex>
          </v-layout></v-container
        >
      </v-card>
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-img
                class="white--text align-end sponser-img"
                src="https://upload.wikimedia.org/wikipedia/en/a/a7/Hill%27s_Science_Diet_logo.jpg"
                height="70px"
              >
                <!-- <v-card-title>Royal Canin</v-card-title> -->
              </v-img>
            </v-flex>
          </v-layout></v-container
        >
      </v-card>
      <v-card class="sponser-card">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <v-img
                class="white--text sponser-img"
                src="http://petgallerypaphos.com/wp-content/uploads/2021/04/6-1.png"
                height="70px"
              >
                <!-- <v-card-title>Royal Canin</v-card-title> -->
              </v-img>
            </v-flex>
          </v-layout></v-container
        >
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.sponser {
  background-color: rgb(20, 20, 20);
}

.sponser-img {
  width: 90px;
  height: 90px;
}
.sponser-card-main {
  display: flex !important;
  flex: 1;
  width: 100%;
}
.sponser-card {
  width: 22%;
  margin-right: 20px;
}
.card-title {
  font-size: 8px;
}
.sponser-title {
  font-size: 2.3rem;
  margin-left: 20px;
  color: #fff;
}
@media (max-width: 900px) {
  .sponser-card-main {
    flex-wrap: wrap;
  }
}
</style>