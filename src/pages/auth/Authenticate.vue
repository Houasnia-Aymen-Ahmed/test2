<template>
  <ion-page class="w-full h-screen">
    <ion-content scrollY="true">
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
    },
    onResize() {
      const keyboardHeight =
        window.innerHeight - document.documentElement.clientHeight;
      if (keyboardHeight > 0) {
        // Keyboard is open, adjust styles
        document.body.style.setProperty(
          "--custom-keyboard-offset",
          `${keyboardHeight}px`
        );
      } else {
        // Keyboard is closed, remove custom offset
        document.body.style.removeProperty("--custom-keyboard-offset");
      }
    }
  }
};
</script>
<!-- 
<style scoped>
ion-content {
  --keyboard-offset: 0 !important;
}
</style>
 -->

<style scoped>
@media (max-height: calc(100vh - 290px)) {
  /* Adjust the value based on your keyboard height */
  .no-keyboard-offset {
    /* Apply to relevant elements */
    padding-bottom: var(
      --custom-keyboard-offset
    ); /* Adjust padding or margin as needed */
  }
}
</style>
