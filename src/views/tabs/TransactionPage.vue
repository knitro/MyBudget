<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <ion-card-header>
        <ion-card-title>Add Custom Payment</ion-card-title>
      </ion-card-header>
      <br/>
      <ion-item>
        <ion-label position="floating">Amount</ion-label>
        <ion-input placeholder="The amount you've spent" @ionChange="adjustSpendAmount" inputmode="decimal"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Label</ion-label>
        <ion-input placeholder="Name your transaction here" @ionChange="adjustLabel"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Notes</ion-label>
        <ion-input placeholder="Put detailed information about your transaction here" @ionChange="adjustNotes"></ion-input>
      </ion-item>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" size="large" mode="ios" @click="submitTransaction">Submit</ion-button>
    </ion-footer>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCardHeader, IonCardTitle, IonLabel, IonInput, IonItem, IonFooter, IonButton } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import { createTransaction } from "../../logic/create-transaction"
import { getBalance } from '../../storage/balance-storage'

export default defineComponent({
  name: 'TransactionPage',
  components: { IonContent, HeaderItem, IonPage, IonCardHeader, IonCardTitle, IonLabel, IonInput, IonItem, IonFooter, IonButton },
  data() {
    return {
      balance: 0,
      spendAmount: 0,
      label: "",
      notes: "",
    }
  },
  methods: {
    adjustSpendAmount(event : CustomEvent) {
      // console.log(event)
      if (event.detail.value) {
        this.spendAmount = Number.parseFloat(event.detail.value)
      }
    },
    adjustLabel(event : CustomEvent) {
      this.label = event.detail.value
    },
    adjustNotes(event : CustomEvent) {
      this.notes = event.detail.value
    },
    async submitTransaction() {
      await createTransaction(this.spendAmount, this.label, this.notes)
      await this.updateBalance()
    },
    async updateBalance() {
      this.balance = await getBalance()
    }
  },
  mounted() {
    this.updateBalance()
  },
});
</script>
