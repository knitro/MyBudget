<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <div id="balance-container">
        <div id="circle" class=".d-flex">
          <ion-text id="balance">
              Current Balance:
              <br/>
              ${{balance.toFixed(2)}}
          </ion-text>
        </div>
      </div>

      <div id="center">
        <div id="card-width">
          <ion-text>Current Spend: ${{spendAmount.toFixed(2)}}</ion-text>
          <ion-range min="0" max="40" :pin-formatter="moneyFormatter" :pin="true" step="0.5" @ionChange="adjustSpendAmount"></ion-range>
          <br/>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input placeholder="Name your transaction here" @ionChange="adjustLabel"></ion-input>
          </ion-item>
        </div>
      </div>
    
    </ion-content>

    <ion-footer>
      <ion-button expand="block" size="large" mode="ios" @click="submitTransaction">Submit</ion-button>
    </ion-footer>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RangeCustomEvent } from '@ionic/core'
import { IonContent, IonRange, IonText, IonLabel, IonInput, IonItem, IonButton, IonPage, IonFooter } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import { createTransaction } from "../../logic/create-transaction"
import { getBalance } from '../../storage/balance-storage'

export default defineComponent({
  name: 'HomePage',
  components: { IonContent, HeaderItem, IonRange, IonText, IonLabel, IonInput, IonItem, IonButton, IonPage, IonFooter },
  data() {
    return {
      balance: 0,
      spendAmount: 0,
      label: "",
    }
  },
  methods: {
    adjustSpendAmount(event : RangeCustomEvent ) {
      this.spendAmount = event.detail.value as number
    },
    adjustLabel(event : CustomEvent) {
      this.label = event.detail.value as string
    },
    async submitTransaction() {
      await createTransaction(this.spendAmount, this.label, "")
      await this.updateBalance()
    },
    async updateBalance() {
      this.balance = await getBalance()
    }
  },
  mounted() {
    this.updateBalance()
  },
  setup() {
    const moneyFormatter = (value: number) => `${value.toFixed(2)}`;
    return {
      moneyFormatter,
    }
  }
});
</script>

<style scoped>

  #balance-container {
    padding-top: 5vw;
    transform: translateX(10%);
  }

  #circle {
    width: 80vw;
    height: 80vw;
    border-radius: 50%;
    border: 3px solid lightskyblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #balance {
    text-align: center;
  }

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
</style>