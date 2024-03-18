<template>
  <div class="mr-[33px] ml-[20px] w-full overflow-y-auto mt-[44.5px]">
    <div
      class="bg-[#FEAD1D] bg-opacity-10 rounded-[18.5px] h-[34px] w-[111px] flex items-center justify-center mb-[19.5px] px-[10px]"
    >
      <ion-text
        v-if="user.isGoldMember"
        class="text-[#FEAD1D] font-primaryMedium text-left font-normal text-[12px] leading-[15.72px]"
      >
        Member Gold
      </ion-text>
    </div>
    <div class="flex flex-row justify-between items-center">
      <ion-text
        class="font-primaryBold text-left text-[27px] text-tertiary leading-[35.38px] font-normal"
      >
        {{ user.name.replace(/\b\w/g, (char) => char.toUpperCase()) }}
      </ion-text>
      <ion-icon :icon="icons.edit" class="w-[24px] h-[24px]" />
    </div>
    <ion-text
      class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[0.4926vh]"
    >
      {{ user.email }}
    </ion-text>
    <div
      class="w-[92.533vw] h-[7.881vh] mt-[2.4631vh] rounded-[22px] px-[20px] py-[13px] flex flex-row items-center justify-start gap-[16px] shadow-primary-shadow"
    >
      <ion-icon :icon="icons.voucher" class="w-[46px] h-[46px]" />
      <ion-text
        class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[0.4926vh]"
      >
        You have {{ user.voucher }} Voucher
      </ion-text>
    </div>
    <view-more-and-title
      title="Favorite"
      :hideViewMore="false"
      class="w-full flex flex-row justify-between mt-[2.4631vh] pl-[13px]"
    />
    <div
      v-for="item in favorite"
      :key="item.id"
      class="flex flex-row w-full items-center h-[12.931vh] bg-white shadow-primary-shadow px-[22px] rounded-[22px] mt-[2.4631vh]"
    >
      <ion-img :src="item.image" class="min-w-[62px] h-[62px]" />
      <div class="flex flex-col flex-1 ml-[20px]">
        <ion-text
          class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
        >
          {{ item.name }}
        </ion-text>
        <ion-text
          class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[19.65px] tracking-[0.5px] mt-[0.4926vh]"
        >
          {{ item.description }}
        </ion-text>
        <ion-text
          class="leading-[24.89px] text-[19px] bg-green-gradient text-transparent bg-clip-text font-primaryBold mt-[0.9852vh]"
        >
          $ {{ item.price }}
        </ion-text>
      </div>

      <div
        @click="buyAgain(item.id)"
        class="flex items-center justify-center rounded-[10px] bg-green-gradient text-white px-[11px] py-[9px] w-[85px] h-[24px]"
      >
        <ion-text
          class="font-primaryMedium text-white text-left font-normal text-[12px] leading-[12.12px] tracking-[0px]"
        >
          Buy Again
        </ion-text>
      </div>
    </div>
    <div class="h-[500px] bg-transparent mt-auto" />
  </div>
</template>

<script>
import { ViewMoreAndTitle } from "@/components";
import { IonText, IonIcon, IonImg } from "@ionic/vue";
import { edit, voucher } from "@/assets/icons";

export default {
  props: {
    user: Object,
    isOpen: Boolean,
    favorite: Object
  },
  components: {
    ViewMoreAndTitle,
    IonText,
    IonIcon,
    IonImg
  },
  data() {
    return {
      icons: {
        edit,
        voucher
      }
    };
  },
  methods: {
    buyAgain(id) {
      console.log("buy again", id);
    }
  }
};
</script>
