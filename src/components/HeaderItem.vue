<template>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>MyBudget</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default defineComponent({
  name: 'HeaderItem',
  components: { IonHeader, IonToolbar, IonTitle },
  props: {}
});
</script>
