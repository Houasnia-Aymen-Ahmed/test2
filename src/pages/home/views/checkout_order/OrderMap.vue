<template>
  <div class="bg-transparent h-full w-full">
    <google-map
      :api-key="apiKey"
      class="w-full h-full"
      :center="mapCenter"
      :zoom="zoomLevel"
    >
      <div class="bg-green-gradient-100 w-[216px] h-[216px] rounded-full">
        <map-marker :options="{ position: markerPosition }" />
      </div>
    </google-map>
  </div>
</template>

<script>
import { ref } from "vue";
import { GoogleMap, Marker as MapMarker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    MapMarker
  },
  setup() {
    // Define reactive properties
    const apiKey = ref(import.meta.env.VUE_APP_GOOGLE_MAPS_API_KEY);
    const mapCenter = ref({ lat: 40.689247, lng: -74.044502 });
    const zoomLevel = ref(15);
    const markerPosition = ref({ lat: 40.689247, lng: -74.044502 });

    // Function to update marker position
    function updateMarkerPosition(newPosition) {
      markerPosition.value = newPosition;
    }

    // Function to update map center
    function updateMapCenter(newCenter) {
      mapCenter.value = newCenter;
    }

    return {
      apiKey,
      mapCenter,
      zoomLevel,
      markerPosition,
      updateMarkerPosition,
      updateMapCenter
    };
  }
};
</script>
