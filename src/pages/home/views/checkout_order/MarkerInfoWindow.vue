<template>
  <ion-content>
    <p>{{ JSON.stringify(marker, null, 2) }}</p>
  </ion-content>
</template>
<script>
import { IonContent } from "@ionic/vue";
export default {
  name: "MarkerInfoWindow",
  props: {
    marker: {
      type: Object,
      required: true
    }
  },
  components: {
    IonContent
  },
  emits: ["onDismiss"],
  setup({ emit }) {
    const dismiss = () => {
      emit("onDismiss");
    };

    return {
      dismiss
    };
  }
};
</script>
