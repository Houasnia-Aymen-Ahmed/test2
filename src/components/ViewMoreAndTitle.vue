<template>
  <div>
    <ion-text
      class="text-tertiary text-[15px] font-primaryBold leading-[19.65px]"
    >
      {{ title }}
    </ion-text>
    <div
      v-if="!hideViewMore"
      class="text-transparent bg-[#FF7C32] bg-clip-text text-[12px] font-primarySans leading-[15.72px]"
      @click="navigateToPage(route)"
    >
      {{btnTxt}}
    </div>
  </div>
</template>

<script>
import { IonText } from "@ionic/vue";

export default {
  props: {
    title: String,
    route: String,
    btnTxt: String,
    hideViewMore: { type: Boolean, default: false }
  },
  components: {
    IonText
  },
  methods: {
    navigateToPage(route) {
      this.$router.push(`/home/${route}`);
    }
  }
};
</script>
