<template>
  <div class="bg-cover bg-pattern h-screen">
    <div class="flex flex-col items-center w-full h-full">
      <auth-card title="Login To Your Account" />
      <div
        class="flex flex-col gap-[1.4778vh] w-[86.667%] h-[15.517vh] mb-[2.4631vh]"
      >
        <ion-input
          aria-label="Email"
          type="email"
          placeholder="Email"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        />
        <ion-input
          aria-label="Password"
          type="password"
          placeholder="Password"
          required="true"
          :clear-on-edit="true"
          class="custom-input"
        />
      </div>
      <ion-text
        class="font-primaryBold text-center text-[12px] leading-[19.98px] font-normal text-black mb-[2.4631vh]"
      >
        Or continue with
      </ion-text>
      <div
        class="flex flex-row justify-center gap-[2.4631vh] h-[7.011vh] w-full"
      >
        <div
          class="shadow-primary-shadow rounded-[15px] w-[40.533%] flex flex-row items-center justify-start pl-[5.8667vw] gap-[3.4667vw]"
        >
          <ion-icon :icon="facebook" class="w-[6.6667vw] h-[3.0788vh]" />
          <ion-text
            class="font-primaryMedium text-center text-[14px] text-tertiary leading-[14.14px] tracking-[0.5px]"
            >Facebook
          </ion-text>
        </div>
        <div
          class="shadow-primary-shadow rounded-[15px] w-[40.533%] flex flex-row items-center justify-start pl-[5.8667vw] gap-[3.4667vw]"
        >
          <ion-icon :icon="google" class="w-[6.6667vw] h-[3.0788vh]" />
          <ion-text
            class="font-primaryMedium text-center text-[14px] text-tertiary leading-[14.14px] tracking-[0.5px]"
            >Google</ion-text
          >
        </div>
      </div>
      <ion-text
        class="font-primaryMedium text-center underline text-[12px] leading-[19.98px] font-normal gradient-text-underline mt-[2.463vh]"
      >
        Forget Your password?
      </ion-text>
      <div
        class="flex flex-col justify-end items-center mt-auto w-full mb-[2.586vh] gap-[2.586vh]"
      >
        <primary-btn
          class="w-full flex justify-center items-center"
          text="Login"
          @click="navigateToHome"
        />
        <ion-text
          @click="switchToSignUp"
          class="font-primaryMedium text-center underline text-[12px] leading-[19.98px] font-normal gradient-text-underline"
        >
          you don't have an account? Create one
        </ion-text>
      </div>
    </div>
  </div>
</template>

<script>
import { IonIcon, IonInput, IonText } from "@ionic/vue";
import { facebook, google } from "@/assets/icons";
import { AuthCard, PrimaryBtn } from "@/components";
export default {
  name: "LoginPage",
  /* mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
    password: { required }
  }, */
  components: {
    IonInput,
    IonIcon,
    IonText,
    PrimaryBtn,
    AuthCard
  },
  data() {
    return {
      facebook,
      google
    };
  },
  methods: {
    switchToSignUp() {
      this.$emit("switchPage", "SignUpWrapper");
    },
    navigateToHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style></style>
