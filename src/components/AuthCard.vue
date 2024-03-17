<template>
  <ion-card
    class="shadow-none w-[50.7653%] h-[24.7536vh] mt-[6.03448vh] mb-[65px] mx-0 p-0 bg-transparent flex flex-col items-center justify-center"
  >
    <ion-img
      :src="Logo"
      :alt="Logo.toString()"
      class="w-[93.085%] h-[17.118vh]"
    />
    <ion-card-header class="p-0">
      <ion-card-title
        class="font-viga text-center text-[40px] leading-[53.76px] tracking-[0.5px] font-normal bg-green-gradient bg-clip-text text-transparent"
      >
        Food Ninja
      </ion-card-title>
    </ion-card-header>
    <ion-card-content
      class="font-inter text-left text-[13px] leading-[15.73px] tracking-[1px] font-semibold text-black p-0"
    >
      <ion-text>Deliver Favorite Food</ion-text>
    </ion-card-content>
  </ion-card>
  <ion-text
    class="font-primaryBold text-center text-[20px] mb-[40px] leading-[26.2px] font-normal text-black"
  >
    {{ title }}
  </ion-text>
</template>

<script>
import { Logo } from "@/assets/images";
import {
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from "@ionic/vue";
export default {
  props: {
    title: String
  },
  components: {
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg
  },
  data() {
    return {
      Logo
    };
  }
};
</script>
