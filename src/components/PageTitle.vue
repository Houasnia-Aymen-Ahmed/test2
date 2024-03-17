<template>
  <div :class="`w-[61.13%] self-start mt-[${mt}px] ml-[31px]`">
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
    mt: { type: String, default: "60" },
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
