<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderItem from '@/components/HeaderItem.vue';

export default defineComponent({
  name: 'HistoryPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, HeaderItem }
});
</script>
