<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Orders Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          v-for="order in orders"
          :key="order.id"
          class="p-[11px] w-[92.53%] h-[19.088%]"
        >
          <ion-img :src="order.image" class="min-w-[62px] h-[62px]" />
          <div class="flex flex-col ml-[20px]">
            <ion-label>{{ order.name }}</ion-label>
            <ion-label>{{ order.description }}</ion-label>
            <ion-text class="leading-[24.89px] text-[19px] text-green-500"
              >$ {{ order.price }}</ion-text
            >
          </div>
          <div class="flex flex-row items-center gap-[5px]">
            <div class="bg-transparent">
              <ion-icon
                :icon="removeOutline"
                class="rounded-md w-[26px] h-[26px] text-green-600"
              />
            </div>
            <ion-text> 1 </ion-text>
            <div class="bg-transparent">
              <ion-icon
                :icon="addOutline"
                class="rounded-md w-[26px] h-[26px] bg-green-600 text-white"
              />
            </div>
          </div>
        </ion-item>
      </ion-list>

      <ion-card>
        <ion-card-content>
          <p>Total: {{ total }}</p>
          <ion-button @click="checkout">Checkout</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { addOutline, removeOutline } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/vue";

import {
  SpacyFreshCrab1,
  SpacyFreshCrab2,
  SpacyFreshCrab3,
} from "@/assets/images";

export default defineComponent({
  name: "Order",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonButton,
  },
  data() {
    return {
      SpacyFreshCrab1,
      SpacyFreshCrab2,
      SpacyFreshCrab3,
      addOutline,
      removeOutline,
      orders: [
        {
          id: 1,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab1,
          price: 10,
          count: 1,
          description: "Waroenk kita",
        },
        {
          id: 2,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab2,
          price: 12,
          count: 1,
          description: "Waroenk kita",
        },
        {
          id: 3,
          name: "Spacy Fresh Crab",
          image: SpacyFreshCrab3,
          price: 5,
          count: 1,
          description: "Waroenk kita",
        },
      ],

      total: 0,
    };
  },
  methods: {
    checkout() {
      // Implement checkout logic here
    },
  },
});
</script>

<style>
.green-text-color {
  background: linear-gradient(98.81deg, #53e88b -0.82%, #15be77 101.53%);
}
</style>
