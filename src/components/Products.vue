<template>
  <div class="prodcuts-page">
    <v-container class="pm-container">
      <v-layout v-for="item in productData" :key="item.id" row wrap>
        <v-flex xs12
          ><v-card
            class="d-flex flex-wrap mx-auto mt-2 pm-product-card"
            max-width="400"
          >
            <v-container fluid>
              <v-layout row wrap>
                <v-flex>
                  <v-img
                    class="white--text align-end"
                    :src="item.img"
                    height="200px"
                  >
                    <!-- <v-card-title>{{ item.name }}</v-card-title> -->
                  </v-img>
                  <v-card-text class="text--primary">
                    <div class="align-center">{{ item.name }}</div>
                    <div>
                      <h2>Rs {{ item.price }}</h2>
                    </div>
                  </v-card-text>
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
  name: "Products",
  data() {
    return {
      productData: [],
    };
  },
  mounted() {
    const axios = require("axios");
    axios
      .get("./products.json")
      .then((response) => {
        this.productData = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.prodcuts-page {
  background-color: rgb(20, 20, 20);
  color: #fff;
}
.prodcuts-page-heading {
  padding-top: 50px;
  margin-left: 50px;
  font-size: 1.5rem;
  font-weight: 300;
}
.pm-product-card {
  display: flex;
  flex-wrap: wrap;
}

.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
}
.products {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  margin: 0 20px 20px 0;
}
.products img {
  max-width: 200px;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-top: 10px;
}
</style>