<template>
  <ion-page>
    <ion-content class="bg-transparent">
      <div
        class="fixed z-[10] w-full flex flex-row items-center justify-start bg-transparent px-[6.6667vw] mt-[2.2167vh] gap-[4px]"
      >
        <header-back-btn
          @backClicked="moveToPrevSlide"
          customClass=" flex flex-row justify-center items-center bg-transparent my-custom-toolbar"
          class="w-[12vw]"
        />
        <search-and-filter
          :showFilter="false"
          placeHolder="Find your location"
          class="m-0 p-0 bg-white rounded-[22px]"
        />
      </div>
      <order-map />
      <div
        class="fixed bottom-[1.9704vh] bg-white shadow-none bg-transparent w-[91.2%] h-[22.29vh] mt-[2.4631vh] mx-[4.5333vw] rounded-[22px] flex flex-col pt-[2.9557vh]"
      >
        <ion-text
          class="pl-[2.6667vw] mb-[1.9704vh] font-primarySans text-[14px] leading-[14.14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30"
        >
          Your location:
        </ion-text>
        <div
          class="flex flex-row-items-center-justify-center gap-[14px] pl-[2.6667vw]"
          size="small"
        >
          <ion-icon :icon="location" class="w-[8.8000vw] h-[4.0640vh]" />
          <ion-text
            class="font-primaryMedium text-[15px] leading-[19.65px] text-tertiary"
            >4517 Washington Ave. Manchester, Kentucky 39495
          </ion-text>
        </div>
        <ion-button
          class="absolute bottom-0 bg-green-gradient rounded-[15px] mb-[1.4778vh] h-[7.019vh] w-[85.866vw] self-center flex items-center justify-center m-0"
          @click="moveToNextSlide"
        >
          <ion-text
            class="text-white font-primaryBold text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
          >
            Place My Order
          </ion-text>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import OrderMap from "./OrderMap.vue";
import { location } from "@/assets/icons";
import { HeaderBackBtn, SearchAndFilter } from "@/components";
import {
  IonContent,
  IonPage,
  IonButton,
  IonText,
  IonIcon,
  
} from "@ionic/vue";

export default {
  data() {
    return { location };
  },
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonText,
    IonIcon,
    SearchAndFilter,
    OrderMap,
    HeaderBackBtn
    //modalController
  },
  methods: {
    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    },
    moveToPrevSlide() {
      this.$emit("moveToPrevSlide");
    }
  },
};
</script>

<style>
.my-custom-toolbar {
  --background: transparent;
  --color: white;

  --min-height: 5.5419vh;
  --padding-top: 0;
  --padding-start: 0;
  --padding-end: 0;
  --padding-bottom: 0;
}
</style>
