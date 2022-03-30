<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <ion-card-header>
        <ion-card-title>History</ion-card-title>
      </ion-card-header>
      
      <ion-list v-for="item in history" :key="item.id">
        <ion-item>
          <ion-label>{{item.amount}}</ion-label>
          <ion-label>{{item.notes}}</ion-label>
          <ion-label>{{item.timestamp}}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCardTitle, IonCardHeader } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import { getTransactions, Transaction } from '@/storage/transaction-storage';
import { getBalance } from '@/storage/balance-storage';

export default defineComponent({
  name: 'HistoryPage',
  components: { IonContent, HeaderItem, IonPage, IonCardTitle, IonCardHeader },
  data() {
    return {
      balance: 0,
      history: [] as Transaction[],
    }
  },
  methods: {
    async setHistory() {
      this.history = (await getTransactions()).transactions
    },
    async updateBalance() {
      this.balance = await getBalance()
    }
  },
  mounted() {
    this.updateBalance()
    this.setHistory()
  },
});
</script>
