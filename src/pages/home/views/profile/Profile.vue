<template>
  <ion-page class="w-full h-screen">
    <ion-content class="h-full" scrollY="false">
      <div class="bg-contain bg-no-repeat bg-resto h-full">
        <div class="flex flex-col items-center justify-start w-full h-full">
          <ion-modal
            v-if="user"
            ref="modal"
            backdropDismiss="false"
            :is-open="true"
            :initial-breakpoint="0.6465"
            :breakpoints="[0.5, 0.6465, 0.9384]"
          >
            <div
              class="mr-[33px] ml-[20px] w-full sheet-modal overflow-y-scroll mt-[44.5px]"
            >
              <div
                class="bg-[#FEAD1D] bg-opacity-10 rounded-[18.5px] h-[34px] w-[111px] flex items-center justify-center mb-[19.5px] px-[10px]"
              >
                <ion-text
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
                <ion-icon :icon="edit" class="w-[24px] h-[24px]" />
              </div>
              <ion-text
                class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[4px]"
              >
                {{ user.email }}
              </ion-text>
              <div
                class="w-[92.533vw] h-[7.881vh] mt-[20px] rounded-[22px] px-[20px] py-[13px] flex flex-row items-center justify-start gap-[16px] shadow-primary-shadow"
              >
                <ion-icon :icon="voucher" class="w-[46px] h-[46px]" />
                <ion-text
                  class="font-primarySans text-left text-[14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30 leading-[21px] font-normal mt-[4px]"
                >
                  You have {{ user.voucher }} Voucher
                </ion-text>
              </div>
              <view-more-and-title
                title="Favorite"
                :hideViewMore="false"
                class="w-full flex flex-row justify-between mt-[20px] pl-[13px]"
              />
              <div
                v-for="item in user.favorite"
                :key="item.id"
                class="flex flex-row w-full items-center h-[12.931vh] bg-white shadow-primary-shadow px-[22px] rounded-[22px] mt-[20px]"
              >
                <ion-img :src="item.image" class="min-w-[62px] h-[62px]" />
                <div class="flex flex-col flex-1 ml-[20px]">
                  <ion-text
                    class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                  >
                    {{ item.name }}
                  </ion-text>
                  <ion-text
                    class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[19.65px] tracking-[0.5px] mt-[4px]"
                  >
                    {{ item.description }}
                  </ion-text>
                  <ion-text
                    class="leading-[24.89px] text-[19px] bg-green-gradient text-transparent bg-clip-text font-primaryBold mt-[8px]"
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
            </div>
          </ion-modal>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  location_sharp,
  location_outline,
  half_star,
  star,
  edit,
  voucher
} from "@/assets/icons";
import { ViewMoreAndTitle } from "@/components";
import { users } from "@/utils/constants";
import { IonContent, IonPage, IonText, IonIcon, IonModal } from "@ionic/vue";
import { heartSharp } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonContent,
    IonText,
    IonIcon,
    IonModal,
    ViewMoreAndTitle
  },
  data() {
    return {
      user: null,
      inputMessage: "",
      location_outline,
      location_sharp,
      heartSharp,
      half_star,
      star,
      edit,
      voucher,
      dragging: false,
      startY: 0,
      startHeight: 0,
      showLess: true
    };
  },
  computed: {
    blurredImageStyle() {
      return `background-image: url(${this.restaurant.image}); filter: blur(5px);`;
    },
    truncatedDescription() {
      const maxLength = 150;
      return this.user.description.length > maxLength
        ? this.user.description.slice(0, maxLength)
        : this.user.description;
    },
    showEllipsis() {
      return this.user.description.length > 150;
    }
  },
  mounted() {
    this.itemId = 1;
    this.user = users.find((item) => item.id == this.itemId) || {};
  },

  methods: {
    toggleDescription() {
      this.showLess = !this.showLess;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
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
