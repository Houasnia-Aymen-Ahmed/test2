<template>
  <div class="bg-cover bg-pattern h-full">
    <div class="flex flex-col items-center w-full h-full">
      <auth-card title="Sign Up For Free" />
      <div
        class="flex flex-col gap-[12px] w-[86.667%] h-[24.0147vh] mb-[20px] z-0"
      >
        <ion-input
          aria-label="Name"
          type="text"
          placeholder="Anamwp . . |"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        >
          <input-icon :icon="profile" />
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
        class="w-full flex flex-col justify-center items-start gap-[12px] px-[22px]"
      >
        <checkbox-txt text="Keep me Signed in" />
        <checkbox-txt text="Email me about special pricing" />
      </div>
      <primary-btn
        class="absolute bottom-[7.389vh] w-full flex-1 justify-center items-center"
        text="Create an Account"
        buttonWidth="46.667%"
        @click="moveToNextSlide"
      />
      <ion-text
        @click="switchToLoginPage"
        class="absolute bottom-[2.586vh] font-primaryMedium text-center underline text-[12px] leading-[19.98px] font-normal text-transparent bg-clip-text bg-green-gradient"
      >
        already have an account?
      </ion-text>
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

<style>
ion-button.customBtn {
  --background: #ffffff;
  color: #000;
  border: 1px solid #f4f4f4;
  border-radius: 15px;
  box-shadow: 12px 26px 50px 0px #5a6cea12;
}
</style>
