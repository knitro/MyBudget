<template>
  <ion-item>
    <ion-label>
      <ion-text>
        <b>{{label}}</b>
      </ion-text>
      <ion-text id="rhs-text">
        <b>${{amount?.toFixed(2)}}</b>
      </ion-text>
      <br/>
      <ion-text>
        <i>{{dateString}}</i>
      </ion-text>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonText } from '@ionic/vue';

export default defineComponent({
  name: 'ListItem',
  components: { IonItem, IonLabel, IonText },
  props: {
    amount : Number,
    label : String,
    notes: String,
    dateString : String
  }
});
</script>

<style scoped>

  #rhs-text{
    text-align: right;
    float: right;
    color: red;

  }

</style>