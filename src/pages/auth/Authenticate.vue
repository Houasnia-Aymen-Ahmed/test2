<template>
  <ion-page class="w-full h-screen">
    <ion-content scrollY="false">
      <component :is="currentPage" @switchPage="switchPage" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";

import LoginPage from "./LoginPage.vue";
import SignUpWrapper from "./sign-up/SignUpWrapper.vue";

export default {
  name: "Authenticate",
  components: { IonPage, IonContent, LoginPage, SignUpWrapper },
  data() {
    return {
      currentPage: "SignUpWrapper"
    };
  },
  methods: {
    switchPage(page) {
      this.currentPage = page;
    }
  }
};
</script>
