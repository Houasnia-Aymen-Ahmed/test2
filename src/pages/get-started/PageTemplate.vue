<template>
  <div class="flex flex-col items-center justify-start bg-white w-full h-full">
    <ion-img
      :src="image"
      :alt="image.toString()"
      class="w-[108.9333%] h-[53.4754vh] mt-[6.999vh]"
    />
    <ion-card class="shadow-none w-[65.0667%] h-[15.024vh] m-0 mt-[4.797vh]">
      <ion-card-header class="m-0 p-0">
        <ion-card-title
          class="font-primaryBold text-center text-[22px] leading-[28.83px] font-normal px-[16px]"
          >{{ title }}
        </ion-card-title>
      </ion-card-header>
      <ion-card-content
        class="font-primarySans text-center text-[12px] leading-[21.66px] font-normal mt-[20px] p-0"
      >
        {{ content }}
      </ion-card-content>
    </ion-card>
    <primary-btn
      class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
      text="Next"
      @click="moveToNextSlide"
    />
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
import PrimaryBtn from "@/components/PrimaryBtn.vue";

export default {
  props: {
    image: String,
    title: String,
    content: String
  },
  components: {
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    PrimaryBtn
  },
  methods: {
    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    }
  }
};
</script>
