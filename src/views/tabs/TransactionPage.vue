<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Transaction" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderItem from '@/components/HeaderItem.vue';

export default defineComponent({
  name: 'TransactionPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, HeaderItem, IonPage }
});
</script>
