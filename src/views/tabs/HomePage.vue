<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">

      <balance-display type="circular" />

      <div id="center">
        <div id="card-width">
          <ion-text>Current Spend: ${{spendAmount.toFixed(2)}}</ion-text>
          <ion-range min="0" max="40" :pin-formatter="moneyFormatter" :pin="true" step="0.5" @ionChange="adjustSpendAmount"></ion-range>
          <br/>
          <ion-item>
            <ion-label position="floating">Notes</ion-label>
            <ion-input placeholder="Put information about your transaction here"></ion-input>
          </ion-item>
        </div>
      </div>

      <div id="home-submit-button">
         <ion-button expand="block" size="large" mode="ios" onClick={{}}>Submit</ion-button>
      </div>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RangeCustomEvent } from '@ionic/core'
import { IonContent, IonRange, IonText, IonLabel, IonInput, IonItem, IonButton, IonPage } from '@ionic/vue';
import BalanceDisplay from '@/components/BalanceDisplay.vue';
import HeaderItem from '@/components/HeaderItem.vue';

export default defineComponent({
  name: 'HomePage',
  components: { BalanceDisplay, IonContent, HeaderItem, IonRange, IonText, IonLabel, IonInput, IonItem, IonButton, IonPage },
  data() {
    return {
      spendAmount: 0
    }
  },
  methods: {
    adjustSpendAmount(event : RangeCustomEvent ) {
      this.spendAmount = event.detail.value as number
    }
  },
  setup() {

    const moneyFormatter = (value: number) => `${value.toFixed(2)}`;

    return {
      moneyFormatter
    }
  }
});
</script>

<style scoped>
  #center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5vh;
  }

  #card-width {
    width: 90vw;
    max-width: 90vw;
    /* background-color: blueviolet; */
  }

  #home-submit-button {
    /* position: absolute; */
    padding-top: 15vw;
  }
</style>