<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full flex flex-col justify-start items-center h-full">
          <header-back-btn @backClicked="moveToPrevSlide" />
          <notification-btn />
          <page-title title="Find your favorite food" mt="2.4631" />
          <search-and-filter
            class="bg-transparent px-[6.6667vw] mt-[2.2167vh]"
          />
          <div class="w-full mt-[3.0788vh]">
            <ion-list
              class="flex flex-col items-center gap-[2.4631vh] mt-[3.0788vh]"
            >
              <ion-item
                v-for="order in OrdersInProccess"
                :key="order.id"
                :disabled="!order.isProccessed"
                class="w-[92.533%] h-[12.684vh] shadow-primary-shadow p-0 rounded-[22px] bg-white"
              >
                <div
                  class="flex flex-row items-center justify-start w-full h-[12.931vh]"
                >
                  <ion-img
                    :src="order.image"
                    class="min-w-[16.5333vw] h-[7.6355vh]"
                  />
                  <div class="flex flex-col flex-1 ml-[5.3333vw]">
                    <ion-text
                      class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                    >
                      {{ order.name }}
                    </ion-text>
                    <ion-text
                      class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[19.65px] tracking-[0.5px] mt-[0.4926vh]"
                    >
                      {{ order.description }}
                    </ion-text>
                    <ion-text
                      class="leading-[24.89px] text-[19px] bg-green-gradient text-transparent bg-clip-text font-primaryBold mt-[0.9852vh]"
                    >
                      $ {{ order.price }}
                    </ion-text>
                  </div>
                  <div
                    class="self-center flex flex-row items-center justify-center rounded-[17.5px] bg-green-gradientpy-[1.1084vh] px-[2.9333vw]"
                  >
                    <ion-text
                      class="leading-[12.12px] text-[12px] font-primaryMedium text-white tracking-[0.5px] flex flex-row items-center justify-center rounded-[17.5px] bg-green-gradient py-[1.1084vh] px-[2.9333vw]"
                      >Proccess
                    </ion-text>
                  </div>
                </div>
              </ion-item>
            </ion-list>
            <div class="h-[12vh]"></div>
          </div>
          <ion-button
            class="bg-green-gradient rounded-[15px] fixed bottom-[3.9409vh] h-[7.019vh] w-[86.667%] self-center flex items-center justify-center m-0"
            @click="moveToNextSlide"
          >
            <ion-text
              class="text-white font-primaryBold text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
            >
              Check out
            </ion-text>
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  NotificationBtn,
  PageTitle,
  SearchAndFilter,
  HeaderBackBtn
} from "@/components";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonImg,
  IonText,
  IonButton
} from "@ionic/vue";
import {
  SpacyFreshCrab1,
  SpacyFreshCrab2,
  SpacyFreshCrab3
} from "@/assets/images";
export default {
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonImg,
    IonText,
    IonButton,
    NotificationBtn,
    PageTitle,
    SearchAndFilter,
    HeaderBackBtn
  },
  data() {
    return {
      SpacyFreshCrab1,
      SpacyFreshCrab2,
      SpacyFreshCrab3,
      OrdersInProccess: [
        {
          id: 1,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab1,
          price: 52,
          count: 1,
          description: "Waroenk kita",
          isProccessed: true
        },
        {
          id: 2,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab2,
          price: 45,
          count: 1,
          description: "Waroenk kita",
          isProccessed: true
        },
        {
          id: 3,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab3,
          price: 23,
          count: 1,
          description: "Waroenk kita",
          isProccessed: false
        },
        {
          id: 4,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab1,
          price: 12,
          count: 1,
          description: "Waroenk kita",
          isProccessed: false
        }
      ]
    };
  },
  methods: {
    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    },
    moveToPrevSlide() {
      this.$emit("moveToPrevSlide");
    }
  }
};
</script>
