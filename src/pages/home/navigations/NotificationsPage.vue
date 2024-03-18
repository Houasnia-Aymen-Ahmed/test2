<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full flex flex-col justify-start items-center">
          <header-back-btn @backClicked="goBack" />
          <PageTitle
            title="Notifications"
            mt="2.4631"
            customClass="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal"
          />
        </div>
        <div class="w-full mt-[3.0788vh]">
          <ion-list
            class="flex flex-col items-center gap-[2.4631vh] mt-[3.0788vh]"
          >
            <ion-item
              v-for="item in notifications"
              :key="item.id"
              class="w-[92.533%] h-[12.931vh] shadow-primary-shadow p-0 rounded-[22px] overflow-hidden bg-white"
            >
              <div
                class="flex flex-row items-center justify-start w-full h-[12.931vh] py-[2.9557vh]"
              >
                <ion-img
                  :src="item.image"
                  :alt="item.title"
                  class="w-[16.0000vw] h-[7.3892vh] rounded-[10px]"
                />
                <div class="flex flex-col ml-[5.6000vw] gap-[4px] w-[67.435%]">
                  <ion-text
                    class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                  >
                    {{ item.title }}
                  </ion-text>
                  <ion-text
                    class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    {{ item.time }}
                  </ion-text>
                </div>
              </div>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { PageTitle, HeaderBackBtn } from "@/components";
import { notifications } from "@/utils/constants";
import {
  IonPage,
  IonContent,
  IonList,
  IonImg,
  IonItem,
  IonText
} from "@ionic/vue";

export default {
  name: "MenuItemsPage",
  components: {
    IonPage,
    IonContent,
    IonList,
    IonImg,
    IonItem,
    IonText,
    PageTitle,
    HeaderBackBtn
  },
  data() {
    return {
      notifications
    };
  },
  methods: {
    goBack() {
      this.$router.push("/home");
    }
  }
};
</script>
<style>
ion-item {
  --inner-padding-bottom: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
  --inner-padding-top: 0px;
  --inner-border-width: 0px;

  border-width: 0px;
}
</style>
