<template>
  <div class="bg-cover bg-pattern w-full h-screen bg-white flex flex-col items-center justify-center">
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
        class="font-inter text-left text-[13px] leading-[15.73px] tracking-[1px] font-semibold text-black"
      >
        Deliver Favorite Food
      </ion-card-content>
    </ion-card>
    <h3 class="font-primaryBold text-center text-[20px] leading-[26.2px] font-normal text-black">Login to your Account</h3>
    <!-- Add TextFields -->
    <p class="font-primaryBold text-center text-[12px] leading-[19.98px] font-normal text-black">Or continue with</p>
    <p class="font-primaryMedium text-center text-[12px] leading-[19.98px] font-normal bg-green-gradient bg-clip-text text-transparent">Forget your password?</p>
    <primary-btn text="Login" />
  </div>
</template>

<script>
import { Logo } from "@/assets/images";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from "@ionic/vue";

export default {
  name: "LoginPage",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    PrimaryBtn
  },
  data() {
    return {
      Logo
      
    };
  }
};
</script>
