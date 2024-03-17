<template>
  <div
    class="shadow-primary-shadow w-full h-[15.887vh] rounded-[22px] flex flex-col items-center justify-center gap-[10px]"
  >
    <ion-button @click="handleImageUpload">
      <ion-img :src="image" :alt="image.toString()" class="w-[50px] h-[50px]" />
    </ion-button>
    <ion-text
      class="shadow-none font-primaryBold text-left text-[14px] text-black leading-[25.27px] font-normal p-0"
    >
      {{ title }}
    </ion-text>
  </div>
</template>

<script>
import { IonButton, IonImg, IonText } from "@ionic/vue";
export default {
  props: {
    image: String,
    title: String,
    handleImageUpload: Function
  },
  components: {
    IonButton,
    IonImg,
    IonText
  }
};
</script>
