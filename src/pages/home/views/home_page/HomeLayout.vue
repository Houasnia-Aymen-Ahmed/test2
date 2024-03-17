<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <ion-router-outlet></ion-router-outlet>
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonRouterOutlet } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet
  }
};
</script>
