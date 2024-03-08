<template>
  <ion-page>
    <component :is="currentPage" @switchPage="switchPage" />
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";

import LoginPage from "./LoginPage.vue";
import SignUp from "./sign-up/SignUp.vue";

export default {
  name: "Authenticate",
  components: { IonPage, LoginPage, SignUp },
  data() {
    return {
      currentPage: "LoginPage"
    };
  },
  methods: {
    switchPage(page) {
      this.currentPage = page;
    }
  }
};
</script>
