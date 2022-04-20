<template>
  <ion-item>
      <ion-label position="floating">Name</ion-label>
      <ion-input placeholder="Type your income stream name"></ion-input>
      <ion-label position="floating">Amount</ion-label>
      <ion-input placeholder="$--:--"></ion-input>
      <ion-select value="per_month" ok-text="Set" cancel-text="Close">
        <ion-select-option value="per_hour">per Hour</ion-select-option>
        <ion-select-option value="per_day">per Day</ion-select-option>
        <ion-select-option value="per_week">per Week</ion-select-option>
        <ion-select-option value="per_fortnight">per Fortnight</ion-select-option>
        <ion-select-option value="per_month">per Month</ion-select-option>
        <ion-select-option value="per_year">per Year</ion-select-option>
      </ion-select>
    </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';

export default defineComponent({
  name: 'IncomeStreamItem',
  components: { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption },
  props: {
    info : {
      
    }
  },
  
});
</script>

<style scoped>

</style>