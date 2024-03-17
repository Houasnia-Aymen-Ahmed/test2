<template>
  <div class="w-full flex flex-row items-center">
    <div class="h-[50px] flex-1 flex items-center">
      <ion-searchbar
        class="custom w-full h-[50px] p-0"
        placeholder="What do you want to order?"
        showCancelButton="never"
      />
    </div>
    <div
      v-if="showFilter"
      class="w-[49px] h-[50px] ml-[9px] rounded-[15px] bg-[#F9A84D] bg-opacity-10 flex justify-center items-center"
    >
      <ion-icon :icon="filter" class="w-[20px] h-[17.78px] self-center" />
    </div>
  </div>
</template>

<script>
import { filter } from "@/assets/icons";
import { IonIcon, IonSearchbar } from "@ionic/vue";

export default {
  props: {
    showFilter: {
      type: Boolean,
      default: true
    }
  },
  components: {
    IonIcon,
    IonSearchbar
  },
  data() {
    return {
      filter
    };
  }
};
</script>

<style>
ion-searchbar .custom {
  --background: rgba(249, 168, 77, 0.1);
  --color: theme(colors.secondary.DEFAULT);
  --placeholder-color: theme(colors.secondary.DEFAULT);
  --placeholder-opacity: 0.4;
  --icon-color: theme(colors.secondary.DEFAULT);
  --clear-button-color: #fff;
  --border-radius: 15px;
}

ion-searchbar div.searchbar-input-container.sc-ion-searchbar-ios {
  min-height: 50px;
}

/*other working classes*/

/*ion-searchbar.custom .searchbar-input-container.sc-ion-searchbar-ios {
  min-height: 50px;
}*/

/*
ion-searchbar .searchbar-input-container.sc-ion-searchbar-ios {
  min-height: 50px;
}*/
</style>
