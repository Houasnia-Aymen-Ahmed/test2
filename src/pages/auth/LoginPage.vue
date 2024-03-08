<template>
  <div class="bg-cover bg-pattern w-full h-screen bg-white flex justify-center">
    <ion-card
      class="shadow-none w-[65.066%] bg-transparent flex flex-col items-center justify-start"
    >
      <ion-img
        :src="Logo"
        :alt="Logo.toString()"
        class="w-[46.666%] h-[17.118%] mt-[5.788%]"
      />
      <ion-card-header>
        <ion-card-title
          class="font-viga text-left text-[40px] leading-[53.76px] tracking-[0.5px] font-normal bg-green-gradient bg-clip-text text-transparent"
        >
          Food Ninja
        </ion-card-title>
      </ion-card-header>
      <ion-card-content
        class="font-primarySans text-center text-[12px] leading-[21.66px] font-normal mt-[20px]"
      >
        content
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { Logo } from "@/assets/images";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from "@ionic/vue";

export default {
  name: "LoginPage",
  component: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
  },
  data() {
    return {
      Logo
    };
  }
};
</script>
