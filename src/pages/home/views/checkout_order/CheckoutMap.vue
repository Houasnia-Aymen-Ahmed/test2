<template>
  <ion-page>
    <ion-content class="bg-transparent">
      <search-and-filter
        class="bg-transparent px-[25px] mt-[2.2167vh]"
        :showFilter="false"
      />
      <order-map
        :markerData="markerData"
        @onMapClicked="mapClicked"
        @onMarkerClicked="markerClicked"
      ></order-map>
      <div
        class="fixed bottom-[16px] bg-slate-200 shadow-none bg-transparent w-[91.2%] h-[22.29vh] mt-[2.4631vh] mx-[17px] rounded-[22px] flex flex-col pt-[24px]"
      >
        <ion-text
          class="pl-[10px] mb-[16px] font-primarySans text-[14px] leading-[14.14px] tracking-[0.5px] text-[#3B3B3B] text-opacity-30"
        >
          Your location:
        </ion-text>
        <div
          class="flex flex-row-items-center-justify-center gap-[14px] pl-[10px]"
          size="small"
        >
          <ion-icon :icon="location" class="w-[33px] h-[33px]" />
          <ion-text
            class="font-primaryMedium text-[15px] leading-[19.65px] text-tertiary"
            >4517 Washington Ave. Manchester, Kentucky 39495
          </ion-text>
        </div>
        <ion-button
          class="absolute bottom-0 bg-green-gradient rounded-[15px] mb-[12px] h-[7.019vh] w-[85.866vw] self-center flex items-center justify-center m-0"
        >
          <ion-text
            class="text-white font-primaryBold text-left font-normal text-[14px] leading-[14.14px] tracking-[0.5px]"
          >
            Place My Order
          </ion-text>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, modalController } from "@ionic/vue";
import { ref } from "vue";
import { Capacitor } from "@capacitor/core";
import MarkerInfoWindow from "./MarkerInfoWindow.vue";
import OrderMap from "./OrderMap.vue";
import { location } from "@/assets/icons";
import { SearchAndFilter } from "@/components";

export default {
  data() {
    return { location };
  },
  components: {
    IonContent,
    IonPage,
    SearchAndFilter,
    OrderMap
    //modalController
  },
  setup() {
    const markerInfo = ref();
    const markerIsOpen = ref(false);

    const markerData = [
      {
        coordinate: { lat: 37.769, lng: -122.446 },
        title: "title one",
        snippet: "title one snippet content will be presented here"
      },
      {
        coordinate: { lat: 37.774, lng: -122.434 },
        title: "title two",
        snippet: "title two snippet content will be presented here"
      },
      {
        coordinate: { lat: 37.783, lng: -122.408 },
        title: "title three",
        snippet: "title three snippet content will be presented here"
      }
    ];

    const openModal = async (marker) => {
      const modal = await modalController.create({
        component: MarkerInfoWindow,
        componentProps: {
          marker
        },
        initialBreakpoint: 0.2,
        breakpoints: [0, 0.2],
        backdropBreakpoint: 0,
        showBackdrop: false,
        backdropDismiss: true
      });

      modal.present();
      await modal.onWillDismiss();
    };

    const mapClicked = () => {
      console.log("mapClicked");
    };

    const getMarkerInfo = (marker) => {
      return markerData.filter(
        (m) =>
          m.coordinate.lat === marker.latitude &&
          m.coordinate.lng === marker.longitude
      )[0];
    };

    const markerClicked = (event) => {
      console.log(event);

      // only use dialog in web since we doesnt show info window
      if (!Capacitor.isNativePlatform()) {
        openModal(getMarkerInfo(event));
      }
    };

    return {
      markerInfo,
      markerIsOpen,
      markerData,
      openModal,
      mapClicked,
      getMarkerInfo,
      markerClicked
    };
  }
};
</script>
