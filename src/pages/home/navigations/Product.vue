<template>
  <ion-page class="w-full h-screen">
    <ion-content class="">
      <div class="bg-contain bg-no-repeat bg-resto h-full">
        <div class="flex flex-col items-center justify-start w-full h-full">
          <ion-modal
            v-if="resto"
            ref="modal"
            backdropDismiss="false"
            showBackdrop="false"
            :is-open="isOpen"
            :initial-breakpoint="0.6465"
            :breakpoints="[0.5, 0.6465, 0.9384]"
          >
            <header-back-btn @backClicked="goBack" />
            <div class="w-full sheet-modal overflow-y-scroll mt-[1.4803vh]">
              <div
                class="flex flex-row item-center w-full justify-between mb-[2.4015vh] px-[8.8000vw]"
              >
                <div
                  v-if="resto.isPopular"
                  class="bg-green-gradient-100 rounded-[18.5px] h-[4.1872vh] w-[20.2667vw] self-center flex items-center justify-center m-0"
                >
                  <ion-text
                    class="text-transparent bg-green-gradient bg-clip-text font-primaryMedium text-left font-normal text-[12px] leading-[15.72px]"
                  >
                    Popular
                  </ion-text>
                </div>
                <div
                  class="justify-self-end flex flex-row justify-between gap-[10px]"
                >
                  <div
                    class="bg-green-gradient-100 rounded-[18.5px] h-[4.1872vh] w-[9.0667vw] flex items-center justify-center"
                  >
                    <ion-icon
                      :icon="location_sharp"
                      class="text-[#15BE77] w-[4.2667vw] h-[1.9704vh]"
                    />
                  </div>
                  <div
                    class="bg-[#FF1D1D] bg-opacity-10 rounded-[18.5px] h-[4.1872vh] w-[9.0667vw] flex items-center justify-center"
                  >
                    <ion-icon
                      :icon="heartSharp"
                      class="text-[#FF1D1D] w-[4.2667vw] h-[1.9704vh]"
                    />
                  </div>
                </div>
              </div>
              <ion-text
                class="font-primaryBold text-left text-[27px] text-tertiary leading-[35.38px] font-normal px-[8.8000vw]"
              >
                {{ resto.name.replace(/\b\w/g, (char) => char.toUpperCase()) }}
              </ion-text>
              <div
                class="flex flex-row item-center w-full justify-start gap-[2.4631vh] mt-[2.4631vh] px-[8.8000vw]"
              >
                <div
                  class="flex flex-row justify-between items-center gap-[10px]"
                >
                  <ion-icon
                    :icon="location_outline"
                    class="text-[#15BE77] w-[2.4631vh] h-[2.4631vh]"
                  />
                  <ion-text
                    class="text-[#3B3B3B] text-opacity-30 font-primarySans ans text-left font-normal text-[14px] leading-[14.14px]"
                  >
                    {{ resto.distance }} Km
                  </ion-text>
                </div>
                <div
                  class="flex flex-row justify-between items-center gap-[10px]"
                >
                  <ion-icon
                    :icon="half_star"
                    class="text-[#15BE77] w-[2.4631vh] h-[2.4631vh]"
                  />
                  <ion-text
                    class="text-[#3B3B3B] text-opacity-30 font-primarySans text-left font-normal text-[14px] leading-[14.14px]"
                  >
                    {{ resto.rating }} Rating
                  </ion-text>
                </div>
              </div>
              <div class="px-[8.8000vw]">
                <p
                  v-if="showLess"
                  @click="toggleDescription"
                  class="font-primarySans text-left font-normal text-[12px] leading-[21.66px]"
                >
                  {{ truncatedDescription }}
                  <span
                    class="font-primaryBold cursor-pointer text-[15px] text-blue-500 tracking-widest"
                  >
                    ...
                  </span>
                </p>
                <p
                  v-else
                  class="font-primarySans text-left font-normal text-[12px] leading-[21.66px]"
                >
                  {{ resto.description }}
                  <span
                    v-if="showEllipsis"
                    @click="toggleDescription"
                    class="ml-[2.6667vw] font-primaryBold cursor-pointer text-[15px] text-blue-500"
                  >
                    &#8629;
                  </span>
                </p>
              </div>
              <div class="w-full mt-[3.0788vh] px-[8.8000vw]">
                <view-more-and-title
                  route="menu-items"
                  title="Popular Menu"
                  btnTxt="View All"
                  class="w-full flex flex-row justify-between"
                />
                <swiper
                  id="restoMenu"
                  :direction="'horizontal'"
                  :slidesPerView="'auto'"
                  :freeMode="true"
                  :scrollbar="false"
                  :mousewheel="true"
                  :modules="modules"
                  class="mt-[2.4631vh] overflow-visible overflow-x-clip"
                >
                  <template v-for="item in resto.popularMenu" :key="item.id">
                    <swiper-slide
                      class="min-w-[39.2vw] max-w-[39.3vw] h-[21.059vh] shadow-primary-shadow rounded-[22px] mx-[10px]"
                    >
                      <div
                        class="flex flex-col justify-end items-center w-full h-full pb-[1.7241vh] bg-white"
                      >
                        <ion-img :src="item.image" class="image-container" />
                        <ion-text
                          class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px] mt-[1.2315vh]"
                        >
                          {{ item.name }}
                        </ion-text>
                        <ion-text
                          class="font-primarySans text-black text-opacity-50 text-left font-normal text-[13px] leading-[17.03px] mt-[0.9852vh]"
                        >
                          {{ item.price }}$
                        </ion-text>
                      </div>
                    </swiper-slide>
                  </template>
                </swiper>
              </div>
              <div class="w-full mt-[2.4631vh]">
                <view-more-and-title
                  title="Testimontials"
                  :hideViewMore="false"
                  class="w-full flex flex-row justify-between px-[8.8000vw]"
                />
                <ion-list
                  class="flex flex-col items-center gap-[2.4631vh] mt-[3.0788vh]"
                >
                  <ion-item
                    v-for="(item, index) in menu"
                    :key="index"
                    class="w-[89.6vw] h-[15.76vh] shadow-primary-shadow p-0 rounded-[22px] overflow-hidden bg-white"
                  >
                    <div
                      class="flex flex-row items-center justify-start w-full"
                    >
                      <div class="self-start mt-[1.2315vh]">
                        <ion-img
                          :src="item.person.image"
                          :alt="item.person.name"
                          class="w-[17.0667vw] h-[7.8818vh] rounded-[10px]"
                        />
                      </div>
                      <div
                        class="flex flex-col items-center justify-stretch ml-[5.6000vw] mr-[6.4000vw] gap-[2.4631vh] mt-[1.2315vh]"
                      >
                        <div class="flex flex-row justify-start w-full">
                          <div class="flex flex-col gap-[4px]">
                            <ion-text
                              class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                            >
                              {{ item.person.name }}
                            </ion-text>
                            <ion-text
                              class="text-[#3B3B3B] text-opacity-30 text-left font-normal text-[12px] leading-[14.22px] tracking-[0.5px]"
                            >
                              {{ item.date }}
                            </ion-text>
                          </div>
                          <div
                            class="flex-1 flex flex-row items-center justify-end"
                          >
                            <div
                              class="bg-green-gradient-100 rounded-[18.5px] h-[4.0640vh] w-[14.1333vw] self-center flex items-center justify-center gap-[6.33px] m-0"
                            >
                              <ion-icon
                                :icon="star"
                                class="text-[#15BE77] w-[4.2667vw] h-[1.9704vh]"
                              />
                              <ion-text
                                class="text-transparent bg-green-gradient bg-clip-text font-primaryBold text-left font-normal text-[16px] leading-[28.88px]"
                              >
                                {{ item.rating }}
                              </ion-text>
                            </div>
                          </div>
                        </div>
                        <ion-text
                          class="text-black text-left font-normal text-[12px] leading-[21.66px] tracking-[0.5px]"
                        >
                          {{ item.opinion }}
                        </ion-text>
                      </div>
                    </div>
                  </ion-item>
                </ion-list>
              </div>
              <div class="h-[52.9557vh] bg-transparent mt-auto" />
            </div>
          </ion-modal>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import { heartSharp } from "ionicons/icons";
import { HeaderBackBtn, ViewMoreAndTitle } from "@/components";
import { restaurants } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import {
  location_sharp,
  location_outline,
  half_star,
  star
} from "@/assets/icons";
import {
  IonContent,
  IonPage,
  IonText,
  IonImg,
  IonIcon,
  IonList,
  IonItem,
  IonModal,
  onIonViewDidEnter,
  onIonViewDidLeave,
  onIonViewWillEnter,
  onIonViewWillLeave
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonText,
    IonImg,
    IonList,
    IonItem,
    IonIcon,
    IonModal,
    ViewMoreAndTitle,
    Swiper,
    HeaderBackBtn,
    SwiperSlide
  },
  data() {
    return {
      itemId: null,
      resto: null,
      location_outline,
      location_sharp,
      heartSharp,
      half_star,
      star,
      menu: null,
      dragging: false,
      showLess: true
    };
  },
  setup() {
    const isOpen = ref(false);
    onIonViewDidEnter(() => {
      console.log("Home page did enter");
      isOpen.value = true;
    });

    onIonViewDidLeave(() => {
      console.log("Home page did leave");
      isOpen.value = false;
    });

    onIonViewWillEnter(() => {
      console.log("Home page will enter");
      isOpen.value = true;
    });

    onIonViewWillLeave(() => {
      console.log("Home page will leave");
      isOpen.value = false;
    });

    return {
      isOpen,
      modules: [FreeMode, Scrollbar, Mousewheel]
    };
  },
  computed: {
    blurredImageStyle() {
      return `background-image: url(${this.restaurant.image}); filter: blur(5px);`;
    },
    truncatedDescription() {
      const maxLength = 150;
      return this.resto.description.length > maxLength
        ? this.resto.description.slice(0, maxLength)
        : this.resto.description;
    },
    showEllipsis() {
      return this.resto.description.length > 150;
    }
  },
  mounted() {
    this.itemId = parseInt(this.$route.params.id);
    this.resto = restaurants.find((item) => item.id == this.itemId) || {};
    this.menu = this.resto.testimontials.concat(
      this.resto.testimontials.concat(this.resto.testimontials)
    );
  },

  methods: {
    toggleDescription() {
      this.showLess = !this.showLess;
    },
    goBack() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.sheet-modal {
  height: calc(100vh + 300px);
}

ion-modal {
  --border-radius: 35px;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
