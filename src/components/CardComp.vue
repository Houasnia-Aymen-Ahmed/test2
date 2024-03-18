<template>
  <ion-card class="shadow-none bg-transparent m-0 w-[83.733%]">
    <ion-card-header class="p-0">
      <ion-card-title
        class="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal p-0"
      >
        {{ title }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content
      class="font-primarySans text-left text-[12px] text-black leading-[21.66px] font-normal mt-[2.4631vh] p-0 pr-[25px]"
    >
      {{ content }}
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/vue";
export default {
  props: {
    title: String,
    content: String
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  }
};
</script>
