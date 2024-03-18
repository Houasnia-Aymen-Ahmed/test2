<template>
  <div
    class="shadow-none w-[50.7653%] h-[24.7536vh] mt-[6.03448vh] mb-[8.0049vh] mx-0 p-0 bg-transparent flex flex-col items-center justify-center"
  >
    <ion-img
      :src="Logo"
      :alt="Logo.toString()"
      class="w-[93.085%] h-[17.118vh]"
    />
    <ion-text
      class="font-viga text-center text-[40px] leading-[53.76px] tracking-[0.5px] font-normal bg-green-gradient bg-clip-text text-transparent"
    >
      Food Ninja
    </ion-text>
    <ion-text
      class="font-inter text-left text-[13px] leading-[15.73px] tracking-[1px] font-semibold text-black p-0"
    >
      Deliver Favorite Food
    </ion-text>
  </div>
  <ion-text
    class="font-primaryBold text-center text-[20px] mb-[4.9261vh] leading-[26.2px] font-normal text-black"
  >
    {{ title }}
  </ion-text>
</template>

<script>
import { Logo } from "@/assets/images";
import { IonText, IonImg } from "@ionic/vue";
export default {
  props: {
    title: String
  },
  components: {
    IonText,
    IonImg
  },
  data() {
    return {
      Logo
    };
  }
};
</script>
