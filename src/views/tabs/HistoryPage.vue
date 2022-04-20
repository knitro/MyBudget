<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">
      <ion-card-header>
        <ion-card-title>History</ion-card-title>
      </ion-card-header>

      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ListItem 
        v-for="item in history" 
        :key="item.id" 
        :amount="item.amount"
        :balance="item.balance" 
        :label="item.label"
        :notes="item.notes"
        :dateString="new Date(item.timestamp).toDateString()"
      />

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCardHeader, IonCardTitle, IonRefresher, IonRefresherContent } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import { getTransactions, Transaction } from '@/storage/transaction-storage';
import { getBalance } from '@/storage/balance-storage';
import ListItem from '@/components/ListItem.vue';
import { RefresherEventDetail } from '@ionic/core';

export default defineComponent({
  name: 'HistoryPage',
  components: { IonPage, IonContent, IonCardHeader, IonCardTitle, IonRefresher, IonRefresherContent, HeaderItem, ListItem },
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
    },
    async doRefresh(event: CustomEvent<RefresherEventDetail>) {
      setTimeout(() => {
        event.detail.complete();
      }, 2000);
      await this.setHistory();
      event.detail.complete();
    }
  },
  mounted() {
    this.updateBalance()
    this.setHistory()
  },
});
</script>
