<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full flex flex-col justify-start items-center">
          <notification-btn />
          <page-title title="Find your favorite food" />
          <search-and-filter class="bg-transparent px-[25px] mt-[18px]" />

          <div
            class="bg-green-gradient shadow-none bg-transparent m-0 w-[86.6667%] h-[18.473vh] mt-[20px] rounded-[20px]"
          >
            <div
              class="pattern-bg-cta w-full h-full flex flex-row justify-between"
            >
              <ion-img
                :src="SpecialDeal"
                alt="Ice Cream"
                class="absolute object-cover h-[18.473vh]"
              />

              <div
                class="z-10 ml-[180px] pr-[10px] flex flex-col justify-center items-end"
              >
                <div class="flex flex-col justify-center items-start">
                  <ion-text
                    class="font-primaryBold text-white text-left font-normal text-[17px] leading-[22.27px]"
                  >
                    Special Deal For October
                  </ion-text>
                  <div class="bg-white rounded-md mt-5 px-5 py-1.5 shadow-xl">
                    <ion-text
                      class="text-transparent bg-green-gradient bg-clip-text text-[11px] font-primaryMedium leading-[16px]"
                    >
                      Buy now
                    </ion-text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-[25px]">
          <view-more-and-title
            route="restaurants"
            title="Nearest Restaurants"
            btnTxt="View More!"
            class="w-full flex flex-row justify-between px-[25px]"
          />
          <div
            class="w-full flex flex-row items-center justify-around mt-[20px]"
          >
            <div
              v-for="restaurant in restaurants"
              :key="restaurant.id"
              class="w-[39.2%] h-[22.66vh] shadow-primary-shadow rounded-[22px] overflow-hidden"
            >
              <restaurant-card :restaurant="restaurant" />
            </div>
          </div>
        </div>
        <div class="w-full mt-[25px]">
          <view-more-and-title
            route="menu-items"
            title="Popular Menu"
            btnTxt="View More!"
            class="w-full flex flex-row justify-between px-[25px]"
          />
          <menu-items-list :menuItems="menuItems" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  SpecialDeal,
  HerbalPancake,
  FruitSalad,
  GreenNoddle
} from "@/assets/images";
import {
  NotificationBtn,
  RestaurantCard,
  ViewMoreAndTitle,
  MenuItemsList,
  PageTitle,
  SearchAndFilter
} from "@/components";
import { menuItems, restaurants } from "@/utils/constants";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonImg,
    IonText,

    NotificationBtn,
    RestaurantCard,
    ViewMoreAndTitle,
    MenuItemsList,
    PageTitle,
    SearchAndFilter
  },
  data() {
    return {
      SpecialDeal,
      FruitSalad,
      GreenNoddle,
      HerbalPancake,
      restaurants: restaurants.slice(0, 2),
      menuItems: menuItems.slice(0, 2)
    };
  }
};
</script>
<style>
.pattern-bg-cta::before {
  @apply bg-patternCta absolute top-0 left-0 w-[86.6667%] h-[18.473vh] bg-center opacity-20;
  content: "";
}
</style>
