<template>
  <ion-icon :icon="icon" slot="start" class="w-[6.4000vw] h-[2.9557vh]"></ion-icon>
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
