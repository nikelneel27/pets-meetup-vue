<template>
  <div class="collection">
    <div class="collection-heading">
      <h2>OUR COLLECTION</h2>
      <h4>Purchase and help shelters</h4>
    </div>
    <div class="collection-categories">
      <div @click="handleCategoryClick" class="collection-category">
        <img
          src="https://images.unsplash.com/photo-1592468254646-bb599a5174ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
        <div>
          <h4>Dog Treats</h4>
        </div>
      </div>
      <div class="collection-category">
        <img
          src="https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
          alt=""
        />
        <div>
          <h4>Dog Beds</h4>
        </div>
      </div>
      <div class="collection-category">
        <img
          src="https://images.unsplash.com/photo-1491930722919-a5fc9ad49a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div>
          <h4>Dog Collar</h4>
        </div>
      </div>
      <div class="collection-category">
        <img
          src="https://images.unsplash.com/photo-1477884143921-51d0a574ee09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div>
          <h4>Dog Toys</h4>
        </div>
      </div>
    </div>
  </div>



  
</template>

<script>
export default {
  methods: {
    handleCategoryClick() {
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
.collection {
  color: #fff !important;
  padding-top: 50px;
}
.collection-heading {
  color: #fff !important;
  text-align: center !important;
}
.collection-heading h4 {
  font-weight: 300;
}
.collection-categories {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 50px;
}
.collection-category {
}
.collection-category img {
  max-width: 140px;
  width: 100%;
  height: 140px;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}
.collection-category:hover img {
  opacity: 0.5;
}
.collection-category h4 {
  font-weight: 300;
  margin-bottom: 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .collection-categories {
    flex-wrap: wrap;
  }
  .collection-category {
    margin-right: 10px;
  }
  .collection-category img {
    height: 70px;
    max-width: 70px;
  }

  .collection-category h4 {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
  }
}
</style>