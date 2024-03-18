<template>
  <ion-page>
    <ion-content :fullscreen="true" class="h-full">
      <div class="bg-cover bg-patternMasked h-full">
        <div class="w-full h-full flex flex-col justify-start items-center">
          <header-back-btn @backClicked="goBack" />
          <PageTitle
            title="Order details"
            mt="2.4631"
            customClass="font-primaryBold text-left text-[25px] text-tertiary leading-[32.76px] font-normal"
          />
          <ion-list
            class="w-full flex flex-col flex-1 items-center gap-[2.4631vh] mt-[3.0788vh]"
          >
            <ion-item-sliding
              v-for="(order, index) in orders"
              :key="order.id"
              class="w-[92.533%] h-[12.931vh] shadow-primary-shadow p-0 rounded-[22px] overflow-hidden bg-primary-400"
            >
              <ion-item class="rounded-[22px]">
                <div
                  class="flex flex-row items-center justify-start w-full h-[12.931vh]"
                >
                  <ion-img
                    :src="order.image"
                    class="min-w-[16.5333vw] h-[7.6355vh]"
                  />
                  <div class="flex flex-col flex-1 ml-[5.3333vw]">
                    <ion-text
                      class="font-primaryMedium text-tertiary text-left font-normal text-[15px] leading-[19.65px]"
                    >
                      {{ order.name }}
                    </ion-text>
                    <ion-text
                      class="font-primarySans text-[#3B3B3B] text-opacity-30 text-left font-normal text-[14px] leading-[19.65px] tracking-[0.5px] mt-[0.4926vh]"
                    >
                      {{ order.description }}
                    </ion-text>
                    <ion-text
                      class="leading-[24.89px] text-[19px] bg-green-gradient text-transparent bg-clip-text font-primaryBold mt-[0.9852vh]"
                    >
                      $ {{ order.price }}
                    </ion-text>
                  </div>
                  <div
                    class="flex flex-row items-center gap-[18px] mr-[2.9333vw]"
                  >
                    <div
                      @click="decrementCount(order)"
                      class="flex items-center justify-center rounded-[10px] w-[6.9333vw] h-[3.2020vh] bg-green-gradient-100"
                    >
                      <ion-icon :icon="removeOutline" class="green-text-icon" />
                    </div>
                    <ion-text
                      class="text-[#181818] tracking-[0.57px] font-poppins text-[16px] leading-[24px] text-opacity-70"
                    >
                      {{ order.count }}
                    </ion-text>
                    <div
                      @click="incrementCount(order)"
                      class="flex items-center justify-center rounded-[10px] w-[6.9333vw] h-[3.2020vh] bg-green-gradient text-white"
                    >
                      <ion-icon :icon="addOutline" class="" />
                    </div>
                  </div>
                </div>
              </ion-item>
              <ion-item-options side="end" @ionSwipe="onSwipe(index)">
                <ion-item-option
                  class="bg-primary-400 px-[4.2667vw]"
                  expandable
                  @click="removeItem(index)"
                >
                  <ion-icon
                    slot="icon-only"
                    size="small"
                    class="w-[6.4000vw] h-[2.9557vh] p-0 m-0"
                    :icon="trash"
                  ></ion-icon>
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          </ion-list>
          <div
            class="fixed bottom-[1.9704vh] bg-green-gradient shadow-none bg-transparent m-0 w-[92.2667%] h-[25.369vh] mt-[2.4631vh] rounded-[22px]"
          >
            <div class="flex flex-col pattern-bg-card w-full h-full">
              <div
                class="flex flex-col justify-between flex-1 px-[7.7333vw] pt-[2.4631vh] pb-[2.7094vh] gap-[7px]"
              >
                <div class="flex flex-col gap-[7px]">
                  <ion-text
                    class="flex justify-between font-primaryMedium text-[#FEFEFF] text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    <span>Sub-Total</span>
                    <span> ${{ subTotal }} </span>
                  </ion-text>
                  <ion-text
                    class="flex justify-between font-primaryMedium text-[#FEFEFF] text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    <span>Delivery Charge</span>
                    <span>${{ deliveryCharge }}</span>
                  </ion-text>
                  <ion-text
                    class="flex justify-between font-primaryMedium text-[#FEFEFF] text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                  >
                    <span>Discount</span> <span>${{ discount }}</span>
                  </ion-text>
                </div>
                <ion-text
                  class="flex justify-between font-primaryBold text-white text-left font-normal text-[18px] leading-[18.18px] tracking-[0.64px] justify-self-end"
                >
                  <span>Total</span> <span>${{ total }}</span>
                </ion-text>
              </div>
              <ion-button
                class="bg-white rounded-[15px] mb-[1.4778vh] h-[7.019vh] w-[93.937%] self-center flex items-center justify-center m-0"
                @click="placeOrder()"
              >
                <ion-text
                  class="text-transparent bg-green-gradient bg-clip-text font-primaryBold text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
                >
                  Place My Order
                </ion-text>
              </ion-button>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { addOutline, removeOutline } from "ionicons/icons";
import { HeaderBackBtn, PageTitle } from "@/components";
import {
  SpacyFreshCrab1,
  SpacyFreshCrab2,
  SpacyFreshCrab3
} from "@/assets/images";
import {
  IonPage,
  IonContent,
  IonList,
  IonText,
  IonIcon,
  IonImg,
  IonItemSliding,
  IonButton,
  IonItemOption,
  IonItemOptions,
  IonItem
} from "@ionic/vue";
import { trash } from "@/assets/icons";

export default {
  name: "Order",
  components: {
    IonPage,
    IonContent,
    HeaderBackBtn,
    PageTitle,
    IonList,
    IonText,
    IonIcon,
    IonImg,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonItem,
    IonButton
  },
  data() {
    return {
      SpacyFreshCrab1,
      SpacyFreshCrab2,
      SpacyFreshCrab3,
      trash,
      addOutline,
      removeOutline,
      discount: 20,
      deliveryCharge: 10,
      orders: [
        {
          id: 1,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab1,
          price: 52,
          count: 1,
          description: "Waroenk kita"
        },
        {
          id: 2,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab2,
          price: 45,
          count: 1,
          description: "Waroenk kita"
        },
        {
          id: 3,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab3,
          price: 23,
          count: 1,
          description: "Waroenk kita"
        }
      ]
    };
  },
  computed: {
    subTotal() {
      return this.orders.reduce(
        (total, order) => total + order.price * order.count,
        0
      );
    },
    total() {
      return this.subTotal + this.deliveryCharge - this.discount;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    incrementCount(order) {
      order.count++;
    },
    decrementCount(order) {
      if (order.count > 0) {
        order.count--;
      }
    },
    removeItem(index) {
      this.orders.splice(index, 1);
    },
    onSwipe(index) {
      this.orders.splice(index, 1);
    }, 
    placeOrder() {
      this.$router.push("/checkout-order");
    }
  }
};
</script>

<style>
.pattern-bg-card::before {
  @apply bg-patternCta absolute w-[92.2667%] h-[25.369vh] bg-center opacity-20;
  content: "";
}
</style>
