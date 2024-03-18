<template>
  <div
    @click="redirectToProduct(restaurant)"
    class="flex flex-col justify-end items-center w-full h-full pb-[3.2020vh] bg-white"
  >
    <ion-img :src="restaurant.image" class="image-container" />
    <ion-text
      class="font-primaryBold text-black text-left font-normal text-[16px] leading-[20.96px] mt-[0.4926vh]"
    >
      {{ restaurant.name }}
    </ion-text>
    <ion-text
      class="font-primarySans text-black text-opacity-50 text-left font-normal text-[13px] leading-[17.03px] mt-[0.4926vh]"
    >
      {{ restaurant.time }} Mins
    </ion-text>
  </div>
</template>

<script>
import { IonImg, IonText } from "@ionic/vue";

export default {
  props: {
    restaurant: Object
  },
  components: {
    IonImg,
    IonText
  },
  computed: {
    blurredImageStyle() {
      return `background-image: url(${this.restaurant.image}); filter: blur(5px);`;
    }
  },
  methods: {
    redirectToProduct(item) {
      this.$router.push({ name: "Product", params: { id: item.id } });
    }
  }
};
</script>

<style>
.image-container {
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--blurred-image-style);
  background-size: cover;
  filter: blur(5px);
  z-index: -1;
  opacity: 0.3;
}
</style>
