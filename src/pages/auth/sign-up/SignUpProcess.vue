<template>
  <div class="bg-cover bg-patternMasked h-screen">
    <div class="flex flex-col items-center justify-start w-full h-full">
      <header-back-btn @backClicked="moveToPrevSlide" />
      <div class="flex flex-col items-start justify-center mt-[2.4631vh]">
        <card-comp
          title="Fill in your bio to get started"
          content="This data will be displayed in your account profile for security"
          class="px-[6.6667vw]"
        />
        <div
          class="flex flex-col gap-[2.4631vh] items-center mt-[2.4631vh] w-full px-[3.733vw]"
        >
          <ion-input
            aria-label="First Name"
            type="text"
            placeholder="First Name"
            required="true"
            :clear-on-edit="true"
            class="custom-input !border-0 !shadow-secondary-shadow"
          />
          <ion-input
            aria-label="Last Name"
            type="text"
            placeholder="Last Name"
            required="true"
            :clear-on-edit="true"
            class="custom-input !border-0 !shadow-secondary-shadow"
          />
          <ion-input
            aria-label="Mobile Number"
            type="text"
            placeholder="Mobile Number"
            required="true"
            :clear-on-edit="true"
            class="custom-input !border-0 !shadow-secondary-shadow"
          />
        </div>
      </div>
      <primary-btn
        class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
        text="Next"
        @click="moveToNextSlide"
      />
    </div>
  </div>
</template>
<script>
import { IonInput } from "@ionic/vue";
import { PrimaryBtn, HeaderBackBtn, CardComp } from "@/components";

export default {
  props: {
    image: String,
    title: String,
    content: String
  },
  components: {
    IonInput,
    PrimaryBtn,
    HeaderBackBtn,
    CardComp
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
