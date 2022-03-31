<template>
  <ion-card>
    <ion-card-header color="primary">
      <br/>
      <ion-icon :icon="icon" size="large"/>
      <ion-card-subtitle>{{label}}</ion-card-subtitle>
      <br/>
    </ion-card-header>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardHeader, IonIcon, IonCardSubtitle } from '@ionic/vue';

export default defineComponent({
  name: 'BudgetCard',
  components: { IonCard, IonCardHeader, IonIcon, IonCardSubtitle },
  props: {
    icon : String,
    label : String,
  },
  
});
</script>

<style scoped>

  #rhs-text {
    text-align: right;
    float: right;
  }

  .red-text {
    color: red
  }

</style>