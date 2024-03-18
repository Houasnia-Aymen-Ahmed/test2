<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar
        slot="bottom"
        class="px-[5.3333vw] h-[9.1133vh] rounded-[22px] mx-[4.2667vw] my-[1.9704vh] bg-white shadow-primary-shadow flex justify-between border-0"
      >
        <ion-tab-button
          v-for="tab in tabs"
          :key="tab.key"
          class="bg-white w-[28vw] h-[5.4187vh] flex items-center"
          :tab="tab.key"
          :href="tab.href"
          @click="changeTab(tab.key)"
        >
          <div
            :class="`flex flex-row items-center justify-center gap-[12px] rounded-[12px] ${
              activeTab === tab.key
                ? 'bg-green-gradient-100 px-[4.5333vw] py-[1.2315vh]'
                : ''
            } `"
          >
            <div class="flex items-center justify-center">
              <ion-icon
                :icon="tab.icon"
                :class="`${
                  activeTab === tab.key
                    ? 'opacity-100 w-[6.4000vw] h-[2.9557vh]  '
                    : 'opacity-50 w-[5.3333vw] h-[2.4631vh] '
                }`"
              />
              <ion-badge
                v-if="tab.notif > 0"
                color="danger"
                class="absolute right-1 top-1 p-0 w-[3.4667vw] h-[1.6010vh] rounded-full"
              >
                <span
                  class="flex items-center justify-center rounded-full p-0 font-thin text-[9px] leading-[11.79px]"
                >
                  {{ tab.notif < 10 ? tab.notif : "+9" }}
                </span>
              </ion-badge>
            </div>
            <ion-label
              v-if="activeTab === tab.key"
              class="text-tertiary text-[12px] font-primaryMedium leading-[15.72px]"
              >{{ tab.label }}
            </ion-label>
          </div>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { profile, buy, chat, home } from "@/assets/icons";
import {
  IonPage,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonBadge
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonRouterOutlet,
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonBadge
  },
  data() {
    return {
      tabs: [
        { key: "home", icon: home, label: "Home", href: "/home", notif: 0 },
        {
          key: "profile",
          icon: profile,
          label: "Profile",
          href: "/profile",
          notif: 0
        },
        { key: "cart", icon: buy, label: "Cart", href: "/cart", notif: 11 },
        { key: "chat", icon: chat, label: "Chat", href: "/chat", notif: 4 }
      ],
      activeTab: localStorage.getItem("activeTab") || "home"
    };
  },
  mounted() {
    // Set initial active tab based on current route
    this.activeTab = this.$route.path.split("/")[1];
  },
  watch: {
    // Watch for changes in route and update active tab accordingly
    $route(to) {
      this.activeTab = to.path.split("/")[1];
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      localStorage.setItem("activeTab", tab);
    }
  }
};
</script>
<style>
ion-tab-bar {
}
</style>
