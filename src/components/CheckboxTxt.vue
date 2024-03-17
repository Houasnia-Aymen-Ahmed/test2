<template>
  <ion-checkbox checked="true" label-placement="end">
    <ion-text
      class="font-primarySans text-center text-[12px] text-opacity-50 leading-[19.98px] font-normal text-black"
    >
      {{ text.replace(/\b\w/g, (char) => char.toUpperCase()) }}
    </ion-text>
  </ion-checkbox>
</template>

<script>
import { IonCheckbox, IonText } from "@ionic/vue";
export default {
  props: {
    text: String,
    type: String
  },
  components: {
    IonCheckbox,
    IonText
  }
};
</script>

<style>
ion-checkbox {
  --size: 22px;
  --checkbox-background-checked: theme(colors.green-gradient-color);
  --checkmark-width: 2.5px;
  --padding-start: 10px;
}
ion-checkbox::part(container) {
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  box-shadow: 12px 26px 50px 0px #5a6cea12;
}
</style>
