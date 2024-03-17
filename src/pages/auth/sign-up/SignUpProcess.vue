<template>
  <div class="bg-cover bg-patternMasked h-full">
    <div class="flex flex-col items-center justify-start w-full h-full">
      <header-back-btn @backClicked="moveToPrevSlide" />
      <div class="flex flex-col items-start justify-center px-[25px] mt-[20px]">
        <card-comp
          title="Fill in your bio to get started"
          content="This data will be displayed in your account profile for security"
        />
        <div class="flex flex-col gap-[10px] items-center mt-[20px] w-full">
          <ion-input
            aria-label="First Name"
            type="text"
            placeholder="First Name"
            required="true"
            :clear-on-edit="true"
            class="custom-input"
          />
          <ion-input
            aria-label="Last Name"
            type="text"
            placeholder="Last Name"
            required="true"
            :clear-on-edit="true"
            class="custom-input"
          />
          <ion-input
            aria-label="Mobile Number"
            type="text"
            placeholder="Mobile Number"
            required="true"
            :clear-on-edit="true"
            class="custom-input"
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
