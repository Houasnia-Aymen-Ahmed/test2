<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Vue + Capacitor + Google Maps</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <my-map
        :markerData="markerData"
        @onMapClicked="mapClicked"
        @onMarkerClicked="markerClicked"
      ></my-map>
      <ion-popover
        :is-open="markerIsOpen"
        size="cover"
        @did-dismiss="markerIsOpen = false"
      >
        <ion-content class="ion-padding">
          <div>{{ markerInfo?.title }}</div>
        </ion-content>
      </ion-popover>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  modalController
} from "@ionic/vue";
import { ref } from "vue";
import { Capacitor } from "@capacitor/core";
import MarkerInfoWindow from "./MarkerInfoWindow.vue";

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonPopover
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
</script>../checkout_order/MarkerInfoWindow.vue
