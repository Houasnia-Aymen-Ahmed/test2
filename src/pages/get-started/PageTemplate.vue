<template>
  <div class="flex flex-col items-center justify-start bg-white w-full h-full">
    <ion-img
      :src="image"
      :alt="image.toString()"
      class="w-[108.9333%] h-[53.4754%] mt-[6.999%]"
    />
    <ion-card class="shadow-none w-[65.066%]">
      <ion-card-header>
        <ion-card-title
          class="font-primaryBold text-center text-[22px] leading-[28.83px] font-normal"
          >{{ title }}
        </ion-card-title>
      </ion-card-header>
      <ion-card-content
        class="font-primarySans text-center text-[12px] leading-[21.66px] font-normal mt-[20px]"
      >
        {{ content }}
      </ion-card-content>
    </ion-card>
    <primary-btn text="Next" />
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
  }
};
</script>
../../components/PrimaryBtn.vue
