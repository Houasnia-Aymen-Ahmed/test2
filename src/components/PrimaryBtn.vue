<template>
  <ion-buttons>
    <ion-button
      :style="{ width: buttonWidth }"
      class="self-center bg-green-gradient font-primaryBold text-center text-[16px] leading-[20.96px] font-normal rounded-[15px] h-[7.019vh] text-white"
    >
      {{ text }}
    </ion-button>
  </ion-buttons>
</template>

<script>
import { IonButtons, IonButton } from "@ionic/vue";
export default {
  props: {
    text: String,
    buttonWidth: {
      type: String,
      default: "41.86%"
    }
  },
  components: {
    IonButtons,
    IonButton
  }
};
</script>
