<template>
  <ion-page class="w-full h-screen">
    <ion-content>
      <swiper class="w-full h-screen" @swiper="onSwiper">
        <template v-for="s in swiperData" :key="s.id">
          <swiper-slide>
            <page-template
              :image="s.image"
              :title="s.title"
              :content="s.content"
              @moveToNextSlide="moveToNextSlide"
            />
          </swiper-slide>
        </template>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import PageTemplate from "./PageTemplate.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import {
  IllustrationGetStarted1,
  IllustrationGetStarted2
} from "@/assets/images";
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    PageTemplate,
    Swiper,
    SwiperSlide,
    IonPage,
    IonContent
  },
  setup() {
    const swiperData = ref([
      {
        id: 1,
        title: "Find your  Comfort Food here",
        content:
          "Here You Can find a chef or dish for every taste and color. Enjoy!",
        image: IllustrationGetStarted1
      },
      {
        id: 2,
        title: "Food Ninja is Where Your Comfort Food Lives",
        content: "Enjoy a fast and smooth food delivery at your doorstep",
        image: IllustrationGetStarted2
      }
    ]);
    return {
      swiperData
    };
  },
  data() {
    return {
      IllustrationGetStarted1,
      IllustrationGetStarted2
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    moveToNextSlide() {
      if (this.swiper) {
        if (this.swiper.isEnd) {
          this.$router.push("/authenticate");
        } else {
          this.swiper.slideNext();
        }
      } else {
        console.error("Swiper instance not available.");
      }
    }
  }
};
</script>
