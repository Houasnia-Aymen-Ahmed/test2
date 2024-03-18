<template>
  <swiper class="h-screen" @swiper="onSwiper">
    <template v-for="s in swiperData" :key="s.id">
      <swiper-slide>
        <component
          :is="s.slide"
          @switchToLoginPage="switchToLoginPage"
          @moveToNextSlide="moveToNextSlide"
          @moveToPrevSlide="moveToPrevSlide"
        ></component>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { ref, shallowRef } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { SignUp, SignUpProcess, SignUpUploadPic, SignUpDone } from ".";
import "swiper/css";

export default {
  name: "SignUpPage",
  components: {
    Swiper,
    SwiperSlide
  },
  setup(_, context) {
    // or we can use 'setup(_,{emit})'
    const swiperData = ref([
      {
        id: 1,
        slide: shallowRef(SignUp)
      },
      {
        id: 2,
        slide: shallowRef(SignUpProcess)
      },
      {
        id: 3,
        slide: shallowRef(SignUpUploadPic)
      },
      {
        id: 4,
        slide: shallowRef(SignUpDone)
      }
    ]);
    const switchToLoginPage = () => {
      // is using another approach, replace 'context.emit' with just 'emit'
      context.emit("switchPage", "LoginPage");
    };

    return {
      swiperData,
      switchToLoginPage
    };
  },
  // another method is to completly remove 'switchToLoginPage' from the setup and put it in methods
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    moveToNextSlide() {
      if (this.swiper) {
        this.swiper.slideNext();
      } else {
        console.error("Swiper instance not available.");
      }
    },
    moveToPrevSlide() {
      if (this.swiper) {
        this.swiper.slidePrev();
      } else {
        console.error("Swiper instance not available.");
      }
    }
  }
};
</script>
