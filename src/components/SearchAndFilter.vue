<template>
  <div class="w-full flex flex-row items-center">
    <div class="h-[6.1576vh] flex-1 flex items-center">
      <ion-searchbar
        class="custom w-full h-[6.1576vh] p-0"
        :placeholder="placeHolder"
        showCancelButton="never"
      />
    </div>
    <div
      v-if="showFilter"
      class="w-[13.0667vw] h-[6.1576vh] ml-[2.4000vw] rounded-[15px] bg-[#F9A84D] bg-opacity-10 flex justify-center items-center"
    >
      <ion-icon :icon="filter" class="w-[2.4631vh] h-[2.1897vh] self-center" />
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
    },
    placeHolder: {
      type: String,
      default: "What do you want to order?"
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
