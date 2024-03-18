<template>
  <ion-list class="flex flex-col items-center gap-[2.4631vh] mt-[3.0788vh]">
    <ion-item
      v-for="item in menuItems"
      :key="item.id"
      class="w-[86.133%] h-[10.714vh] shadow-primary-shadow p-0 rounded-[22px] overflow-hidden bg-white"
    >
      <div class="flex flex-row items-center justify-start w-full h-[10.714vh]">
        <ion-img
          :src="item.image"
          :alt="item.name"
          class="w-[17.0667vw] h-[7.8818vh] rounded-[10px]"
        />
        <div class="flex flex-col ml-[5.6000vw] gap-[4px]">
          <ion-text
            class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
          >
            {{ item.name }}
          </ion-text>
          <ion-text
            class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
          >
            {{ item.description }}
          </ion-text>
        </div>
        <ion-text
          class="absolute right-[5.3333vw] font-primaryBold text-[#FEAD1D] text-left font-normal text-[22px] leading-[28.83px]"
        >
          ${{ item.price }}
        </ion-text>
      </div>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonText, IonImg } from "@ionic/vue";
export default {
  props: {
    menuItems: Object
  },
  components: {
    IonList,
    IonItem,
    IonText,
    IonImg
  }
};
</script>
