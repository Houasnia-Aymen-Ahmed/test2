<template>
  <div
    :style="{ marginTop: mt + 'vh' }"
    class="w-[62.1333vw] self-start ml-[8.2667vw]"
  >
    <ion-text :class="customClass">
      {{ title.replace(/\b\w/g, (char) => char.toUpperCase()) }}
    </ion-text>
  </div>
</template>

<script>
import { IonText } from "@ionic/vue";

export default {
  props: {
    title: String,
    mt: { type: String, default: "7.3892" },
    customClass: {
      type: String,
      default:
        "font-primaryBold text-left text-[31px] text-tertiary leading-[40.62px] font-normal"
    }
  },

  components: {
    IonText
  }
};
</script>
