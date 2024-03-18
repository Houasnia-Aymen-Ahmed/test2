<template>
  <div class="flex flex-col items-center justify-start bg-white w-full h-full">
    <ion-img
      :src="image"
      :alt="image.toString()"
      class="w-[108.9333%] h-[53.4754vh] mt-[6.999vh]"
    />
    <div
      :class="`shadow-none h-[15.024vh] m-0 mt-[4.797vh] flex flex-col items-center justify-center ${
        index === 1 ? 'w-[65.0667%] px-[4.26%]' : 'w-[92.8%] px-[4.467%]'
      }`"
    >
      <ion-text
        class="font-primaryBold text-center text-[22px] leading-[28.83px] font-normal"
        >{{ title }}
      </ion-text>
      <ion-text
        :class="`font-primarySans text-center text-[12px] leading-[21.66px] font-normal mt-[2.46vh] ${
          index === 1 ? 'px-0' : 'px-[17%]'
        }`"
      >
        {{ content }}
      </ion-text>
    </div>
    <primary-btn
      class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
      text="Next"
      @click="moveToNextSlide"
    />
  </div>
</template>

<script>
import { IonImg, IonText } from "@ionic/vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";

export default {
  props: {
    image: String,
    title: String,
    content: String,
    index: Number
  },
  components: {
    IonText,
    IonImg,
    PrimaryBtn
  },
  methods: {
    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    }
  }
};
</script>
