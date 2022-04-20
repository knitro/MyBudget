<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="transaction" href="/tabs/transaction">
          <ion-icon :icon="card" />
          <ion-label>Transaction</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="history" href="/tabs/history">
          <ion-icon :icon="arrowUndo" />
          <ion-label>History</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="budget" href="/tabs/budget">
          <ion-icon :icon="document" />
          <ion-label>Budget</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, card, arrowUndo, document } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return { home, card, arrowUndo, document }
  }
});
</script>
