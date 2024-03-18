<template>
  <ion-page class="w-full h-screen">
    <ion-content>
      <swiper class="w-full h-screen" @swiper="onSwiper">
        <template v-for="s in swiperData" :key="s.id">
          <swiper-slide>
            <component
              :is="s.slide"
              @moveToNextSlide="moveToNextSlide"
              @moveToPrevSlide="moveToPrevSlide"
            ></component>
          </swiper-slide>
        </template>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, shallowRef } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonPage, IonContent } from "@ionic/vue";
import CheckoutOrder from "./CheckoutOrder.vue";
import CheckoutMap from "./CheckoutMap.vue";
import "swiper/css";
export default {
  components: {
    CheckoutMap,
    CheckoutOrder,
    Swiper,
    SwiperSlide,
    IonPage,
    IonContent
  },
  setup() {
    const swiperData = ref([
      {
        id: 1,
        slide: shallowRef(CheckoutOrder)
      },
      {
        id: 2,
        slide: shallowRef(CheckoutMap)
      }
    ]);
    return {
      swiperData
    };
  },
  
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    moveToNextSlide() {
      if (this.swiper) {
        if (this.swiper.isEnd) {
          this.$router.push("/cart");
        } else {
          this.swiper.slideNext();
        }
      } else {
        console.error("Swiper instance not available.");
      }
    },
    moveToPrevSlide() {
      if (this.swiper) {
        if (this.swiper.isBeginning) {
          this.$router.push("/cart");
        } else {
          this.swiper.slidePrev();
        }
      } else {
        console.error("Swiper instance not available.");
      }
    }
  }
};
</script>
