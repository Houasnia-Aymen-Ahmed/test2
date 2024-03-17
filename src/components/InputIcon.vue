<template>
  <ion-icon :icon="icon" slot="start" class="w-[24px] h-[24px]"></ion-icon>
</template>

<script>
import { IonIcon } from "@ionic/vue";
export default {
  props: {
    icon: String
  },
  components: {
    IonIcon
  }
};
</script>
