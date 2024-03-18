<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full flex flex-col justify-start items-center">
          <NotificationBtn />
          <page-title title="Find your favorite food" />
          <search-and-filter class="bg-transparent px-[25px] mt-[18px]" />
        </div>
        <div class="w-full mt-[25px]">
          <view-more-and-title
            route="restaurants"
            title="Popular Restaurants"
            btnTxt="View More!"
            :hideViewMore="true"
            class="w-full flex flex-row justify-between px-[25px]"
          />
          <div
            class="w-full flex flex-row items-center justify-around flex-wrap mt-[2.4631vh]"
          >
            <div
              v-for="restaurant in restaurants"
              :key="restaurant.id"
              class="w-[39.2%] h-[22.66vh] shadow-primary-shadow rounded-[22px] overflow-hidden mb-[2.4631vh]"
            >
              <restaurant-card :restaurant="restaurant" />
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { filter } from "@/assets/icons";

import {
  NotificationBtn,
  PageTitle,
  RestaurantCard,
  SearchAndFilter,
  ViewMoreAndTitle
} from "@/components";
import { restaurants } from "@/utils/constants";
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "RestaurantsPage",
  components: {
    IonPage,
    IonContent,
    SearchAndFilter,
    NotificationBtn,
    RestaurantCard,
    ViewMoreAndTitle,
    PageTitle
  },
  data() {
    return {
      filter,
      restaurants
    };
  }
};
</script>
<style>
ion-item {
  --inner-padding-bottom: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
  --inner-padding-top: 0px;
  --inner-border-width: 0px;

  border-width: 0px;
}
</style>
