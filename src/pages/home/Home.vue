<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar
        slot="bottom"
        class="px-[20px] h-[74px] rounded-[22px] m-4 bg-white shadow-primary-shadow flex justify-between border-0"
      >
        <ion-tab-button
          v-for="tab in tabs"
          :key="tab.key"
          class="bg-white w-[105px] h-[44px] flex items-center"
          :tab="tab.key"
          :href="tab.href"
          @click="changeTab(tab.key)"
        >
          <div
            :class="`flex flex-row items-center justify-center gap-[12px] rounded-[12px] ${
              activeTab === tab.key
                ? 'bg-green-gradient-100 px-[17px] py-[10px]'
                : ''
            } `"
          >
            <div class="flex items-center justify-center">
              <ion-icon
                :icon="tab.icon"
                :class="`${
                  activeTab === tab.key
                    ? 'opacity-100 w-[24px] h-[24px]  '
                    : 'opacity-50 w-[20px] h-[20px] '
                }`"
              />
              <ion-badge
                v-if="tab.notif > 0"
                color="danger"
                class="absolute right-1 top-1 p-0 w-[13px] h-[13px] rounded-full"
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
      activeTab: "home"
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>
<style>
ion-tab-bar {
}
</style>
