<template>
  <v-app>
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list>
        <v-list-item-group>
          <v-list-item
            color="black"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item-title>
              <!-- <v-icon class="pr-2">{{ item.icon }}</v-icon -->
              {{ item.title }}</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="onLogout" v-if="isUserAuthenticated">
            <v-list-item-title> Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="white" flat class="pm-header">
      <v-app-bar-nav-icon
        color="black"
        class="hidden-sm-and-up"
        @click.stop="sideNav = !sideNav"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" style="cursor: pointer" class="logo-heading">
          <v-icon light color="black" class="pr-4">fa-paw</v-icon>Pets
          Meet-up</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          text
          color="black"
        >
          <!-- <v-icon class="pr-2">{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
        <v-btn @click="onLogout" v-if="isUserAuthenticated" text color="orange">
          <!-- <v-icon class="pr-2">fa-paw</v-icon> -->
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view> </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false,
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "fa-paw", title: "Sign up", link: "/signup" },
        { icon: "fa-paw", title: "Sign in", link: "/signin" },
      ];
      if (this.isUserAuthenticated) {
        menuItems = [
          // { icon: "fa-paw", title: "Profile", link: "/profile" },
          { icon: "fa-paw", title: "Upcoming Meetups", link: "/meetups" },
          { icon: "fa-paw", title: "Organize Meetups", link: "/meetup/new" },
        ];
      }
      return menuItems;
    },

    isUserAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style >
.pm-header {
  box-shadow: 0 0 2px;
}
.v-application--wrap {
  min-height: auto !important;
}
body {
  /* padding: 10px; */
  background-color: rgb(20, 20, 20);
}
a {
  text-decoration: none !important;
  color: #fff !important;
}
.logo-heading {
  color: #000 !important;
}
</style>
