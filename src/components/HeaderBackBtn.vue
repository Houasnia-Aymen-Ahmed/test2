<template>
  <ion-header class="bg-transparent ion-no-border">
    <ion-toolbar :class="customClass">
      <div
        class="bg-white w-[12.0000vw] h-[5.5419vh] rounded-[15px]"
        @click="handleBack"
      >
        <div
          class="w-full h-full bg-[#F9A84D] bg-opacity-10 rounded-[15px] flex flex-row justify-center items-center"
        >
          <ion-icon
            :icon="chevronBackOutline"
            class="text-secondary text-[24px]"
          ></ion-icon>
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonIcon } from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

export default {
  props: {
    icon: String,
    customClass: {
      type: String,
      default:
        "flex flex-row justify-center items-center bg-transparent custom-toolbar"
    }
  },
  components: {
    IonHeader,
    IonToolbar,
    IonIcon
  },
  data() {
    return { chevronBackOutline };
  },
  methods: {
    handleBack() {
      this.$emit("backClicked");
    }
  }
};
</script>
