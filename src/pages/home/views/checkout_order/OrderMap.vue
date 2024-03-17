<template>
  <div class="bg-transparent h-full w-full">
    <capacitor-google-map
      id="my-cool-map"
      ref="mapRef"
      style="display: inline-block; width: 100vw; height: 86vh"
    ></capacitor-google-map>
  </div>
</template>

<script>
import { GoogleMap } from "@capacitor/google-maps";
import { onMounted, ref, onUnmounted } from "vue";
export default {
  // PROPS
  props: {
    markerData: [{ coordinate: null, title: "", snippet: "" }]
  },
  // EVENTS
  emits: {
    onMarkerClicked: null,
    onMapClicked: null
  },
  setup(props, { emits }) {
    const mapRef = ref(null);
    const markerIds = ref([]);
    let newMap;

    onMounted(() => {
      // Access capacitor-google-map component instance if possible
      const capacitorGoogleMap = document.getElementById("my-cool-map");
      if (capacitorGoogleMap) {
        capacitorGoogleMap.addEventListener("map-ready", () => {
          createMap();
        });
      }
    });

    // remove markers on unmount
    onUnmounted(() => {
      console.log("onunmounted");
      newMap.removeMarkers(markerIds?.value);
    });

    const addSomeMarkers = async (newMap) => {
      markerIds?.value && newMap.removeMarkers(markerIds?.value);

      // Plot each point on the map
      let markers = props.markerData.map(({ coordinate, title, snippet }) => {
        return {
          coordinate,
          title,
          snippet
        };
      });

      markerIds.value = await newMap.addMarkers(markers);
    };

    /**
     *
     */
    async function createMap() {
      console.log("mapRef: ", mapRef.value);
      if (!mapRef.value) return;
      console.log("not null mapRef: ", mapRef.value);

      // render map using capacitor plugin
      newMap = await GoogleMap.create({
        id: "my-cool-map",
        element: mapRef.value,
        apiKey: process.env.VITE_APP_GOOGLE_MAPS_API_KEY,
        config: {
          center: {
            lat: 37.783,
            lng: -122.408
          },
          zoom: 12
        }
      });

      // add markers to map
      addSomeMarkers(newMap);

      // Set Event Listeners...
      // Handle marker click, send event back to parent
      newMap.setOnMarkerClickListener((event) => {
        emits("onMarkerClicked", event);
      });

      // Handle map click, send event back to parent
      newMap.setOnMapClickListener(() => {
        emits("onMapClicked");
      });
    }
  }
};
</script>
