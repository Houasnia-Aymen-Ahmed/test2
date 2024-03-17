<template>
  <div class="bg-cover bg-pattern h-full relative">
    <div
      class="flex flex-col items-center justify-start absolute inset-0 pt-[27.955vh]"
    >
      <ion-img
        :src="IllustrationDone"
        :alt="IllustrationDone.toString()"
        class="w-[45.866%] h-[19.95vh]"
      />
      <ion-card class="shadow-none mt-[33px]">
        <ion-card-header class="p-0">
          <ion-card-title
            class="font-primaryBold text-center text-[30px] leading-[39.31px] font-normal bg-green-gradient bg-clip-text text-transparent p-0"
            >Congrats!
          </ion-card-title>
        </ion-card-header>
        <ion-card-content
          class="font-primaryBold text-center text-[23px] leading-[30.14px] font-normal text-tertiary p-0 mt-[12px]"
        >
          Your Profile Is Ready To Use
        </ion-card-content>
      </ion-card>
      <primary-btn
        class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
        text="Try Order"
        @click="navigateHome"
      />
    </div>
  </div>
</template>

<script>
import {
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/vue";
import { PrimaryBtn } from "@/components";
import { IllustrationDone } from "@/assets/images";

export default {
  components: {
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    PrimaryBtn
  },
  data() {
    return {
      IllustrationDone
    };
  },
  methods: {
    navigateHome() {
      this.$router.push("/home");
    }
  }
};
</script>
