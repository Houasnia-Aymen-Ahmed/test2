<template>
  <div class="bg-cover bg-pattern h-screen">
    <div class="flex flex-col items-center w-full h-full">
      <auth-card title="Sign Up For Free" />
      <div
        class="flex flex-col gap-[1.477vh] w-[86.667%] h-[24.0147vh] mb-[2.463vh]"
      >
        <ion-input
          aria-label="Name"
          type="text"
          placeholder="Anamwp . . |"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        >
          <input-icon :icon="profile" class="opacity-50" />
        </ion-input>
        <ion-input
          aria-label="Email"
          type="email"
          placeholder="Email"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        >
          <input-icon :icon="message" />
        </ion-input>
        <ion-input
          aria-label="Password"
          type="password"
          placeholder="Password"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        >
          <input-icon :icon="lock" />
          <input-icon :icon="show" slot="end" />
        </ion-input>
      </div>
      <div
        class="flex flex-col justify-center items-start gap-[1.477vh] w-[86.667%]"
      >
        <checkbox-txt text="Keep me Signed in" />
        <checkbox-txt text="Email me about special pricing" />
      </div>
      <div
        class="flex flex-col justify-end items-center mt-auto w-full mb-[2.586vh] gap-[2.586vh]"
      >
        <primary-btn
          class="w-full flex justify-center items-center"
          text="Create an Account"
          buttonWidth="46.667%"
          @click="moveToNextSlide"
        />
        <ion-text
          @click="switchToLoginPage"
          class="font-primaryMedium text-center text-[12px] leading-[19.98px] font-normal gradient-text-underline"
        >
          already have an account?
        </ion-text>
      </div>
    </div>
  </div>
</template>

<script>
import { IonInput, IonText } from "@ionic/vue";
import { PrimaryBtn, AuthCard, CheckboxTxt, InputIcon } from "@/components";
import { facebook, google, show, profile, message, lock } from "@/assets/icons";
import "swiper/css";

export default {
  name: "SignUp",
  components: {
    IonInput,
    IonText,
    InputIcon,
    CheckboxTxt,
    PrimaryBtn,
    AuthCard
  },
  data() {
    return {
      facebook,
      google,
      show,
      profile,
      message,
      lock
    };
  },
  methods: {
    switchToLoginPage() {
      this.$emit("switchToLoginPage");
    },
    moveToNextSlide() {
      this.$emit("moveToNextSlide");
    }
  }
};
</script>

<style scoped>
ion-button.customBtn {
  --background: #ffffff;
  color: #000;
  border: 1px solid #f4f4f4;
  border-radius: 15px;
  box-shadow: 12px 26px 50px 0px #5a6cea12;
}
</style>
