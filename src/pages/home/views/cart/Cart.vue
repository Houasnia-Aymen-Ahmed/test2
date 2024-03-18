<template>
  <ion-page class="w-full h-screen">
    <ion-content class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="flex flex-col items-center justify-start w-full h-full">
          <PageTitle
            title="Cart"
            customClass="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal"
          />
          <ion-text
            color="danger"
            class="font-primarySans text-left text-[17px] leading-[19.86px] font-normal mt-[2.4631vh] px-[5.3333vw]"
          >
            This page is added by me, due to lack of explanation in figma about
            the cart page.
          </ion-text>
          <div
            class="flex flex-col justify-end items-center mt-auto h-full w-full mb-[12.3153vh]"
          >
            <primary-btn
              class="w-full flex justify-center items-center"
              text="Check Order details"
              buttonWidth="46.667%"
              @click="navigateToOrderDetails"
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { PageTitle, PrimaryBtn } from "@/components";
import { IonPage, IonContent, IonText } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonText,
    PageTitle,
    PrimaryBtn
  },
  methods: {
    navigateToOrderDetails() {
      this.$router.push(`cart/order`);
    }
  }
};
</script>
