<template>
  <div class="w-full overflow-y-auto mt-[5.4803vh]">
    <div
      class="bg-[#FEAD1D] bg-opacity-10 rounded-[18.5px] h-[4.1872vh] w-[29.6000vw] flex items-center justify-center mb-[2.4015vh] px-[2.6667vw] ml-[5.3333vw]"
    >
      <ion-text
        v-if="user.isGoldMember"
        class="text-[#FEAD1D] font-primaryMedium text-left font-normal text-[12px] leading-[15.72px]"
      >
        Member Gold
      </ion-text>
    </div>
    <div class="flex flex-row justify-between items-center ml-[5.3333vw]">
      <ion-text
        class="font-primaryBold text-left text-[27px] text-tertiary leading-[35.38px] font-normal"
      >
        {{ user.name.replace(/\b\w/g, (char) => char.toUpperCase()) }}
      </ion-text>
      <ion-icon
        :icon="icons.edit"
        class="w-[6.4000vw] h-[2.9557vh] mr-[8.5333vw]"
      />
    </div>
    <ion-text
      class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[0.4926vh] ml-[5.3333vw]"
    >
      {{ user.email }}
    </ion-text>
    <div
      class="w-[92.533vw] h-[7.881vh] mt-[2.4631vh] rounded-[22px] mx-[3.7333vw] px-[5.3333vw] py-[1.6010vh] flex flex-row items-center justify-start gap-[16px] shadow-primary-shadow"
    >
      <ion-icon :icon="icons.voucher" class="w-[12.2667vw] h-[5.6650vh]" />
      <ion-text
        class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[0.4926vh]"
      >
        You have {{ user.voucher }} Voucher
      </ion-text>
    </div>
    <view-more-and-title
      title="Favorite"
      :hideViewMore="false"
      class="w-full flex flex-row justify-between mt-[2.4631vh] pl-[5.3333vw]"
    />
    <div
      v-for="item in favorite"
      :key="item.id"
      class="flex flex-row items-center h-[12.931vh] bg-white shadow-primary-shadow px-[5.8667vw] rounded-[22px] mt-[2.4631vh] mx-[3.7333vw]"
    >
      <ion-img :src="item.image" class="min-w-[16.5333vw] h-[7.6355vh]" />
      <div class="flex flex-col flex-1 ml-[5.3333vw]">
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
        class="flex items-center justify-center rounded-[10px] bg-green-gradient text-white px-[2.9333vw] py-[1.1084vh] w-[22.6667vw] h-[2.9557vh]"
      >
        <ion-text
          class="font-primaryMedium text-white text-left font-normal text-[12px] leading-[12.12px] tracking-[0px]"
        >
          Buy Again
        </ion-text>
      </div>
    </div>
    <div class="h-[61.5764vh] bg-transparent mt-auto" />
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
