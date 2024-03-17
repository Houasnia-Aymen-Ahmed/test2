<template>
  <ion-page class="h-screen">
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full flex flex-col justify-start items-center">
          <NotificationBtn />
          <page-title title="Find your favorite food" />
          <search-and-filter class="bg-transparent px-[25px] mt-[18px]" />
        </div>
        <div v-if="show" class="">
          <div
            v-for="filter in filters.menuItems"
            :key="filter"
            @click="toggleFilter(filter)"
          ></div>
        </div>
        <div class="w-full mt-[25px]">
          <view-more-and-title
            route="menu-items"
            title="Popular Menu"
            btnTxt="View More!"
            :hideViewMore="true"
            class="w-full flex flex-row justify-between px-[25px]"
          />
          <menu-items-list :menuItems="menuItems" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { filter } from "@/assets/icons";
import {
  NotificationBtn,
  MenuItemsList,
  ViewMoreAndTitle,
  PageTitle,
  SearchAndFilter
} from "@/components";
import { menuItems, filters } from "@/utils/constants";
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "MenuItemsPage",
  components: {
    IonPage,
    IonContent,
    SearchAndFilter,
    NotificationBtn,
    MenuItemsList,
    ViewMoreAndTitle,
    PageTitle
  },
  data() {
    return {
      show: true,
      localFilters: [],
      filter,
      filters,
      menuItems
    };
  },
  methods: {
    toggleFilter(filter) {
      if (this.localFilters.includes(filter)) {
        this.localFilters.splice(this.localFilters.indexOf(filter), 1);
      } else {
        this.localFilters.push(filter);
      }
    }
  },
  computed: {
    filteredMenuItems() {
      return this.localFilters.length === 0
        ? menuItems
        : menuItems.filter((item) => this.localFilters.includes(item.type));
    }
  }
};
</script>
<style>
ion-searchbar.custom {
  --background: rgba(249, 168, 77, 0.1);
  --color: theme(colors.secondary.DEFAULT);
  --placeholder-color: theme(colors.secondary.DEFAULT);
  --placeholder-opacity: 0.4;
  --icon-color: theme(colors.secondary.DEFAULT);
  --clear-button-color: #fff;
  --border-radius: 15px;
}
ion-item {
  --inner-padding-bottom: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
  --inner-padding-top: 0px;
  --inner-border-width: 0px;

  border-width: 0px;
}
</style>
