<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">

      <ion-card-header>
        <ion-card-title>Income Streams</ion-card-title>
      </ion-card-header>

      
      <ion-button @click="addNewIncomeStream">
        <ion-icon :icon="add" />
        &nbsp;
        <ion-label>
          <ion-text>Add New Income</ion-text>
        </ion-label>
        &nbsp;
      </ion-button>

      <ion-card-header>
        <ion-card-title>Expenditures</ion-card-title>
      </ion-card-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <BudgetCard :icon="home" :label="'Housing'" />
          </ion-col>
          <ion-col>
            <BudgetCard :icon="cash" :label="'Savings'" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <BudgetCard :icon="fastFood" :label="'Food'" />
          </ion-col>
          <ion-col>
            <BudgetCard :icon="repeat" :label="'Recurring Expenses'" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <BudgetCard :icon="train" :label="'Transport'" />
          </ion-col>
          <ion-col>
            <BudgetCard :icon="body" :label="'Birthdays'" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <BudgetCard :icon="calendar" :label="'Annual Events'" />
          </ion-col>
          <ion-col>
            <BudgetCard :icon="ticket" :label="'Other'" />
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import BudgetCard from '@/components/BudgetCard.vue';
import { home, cash, fastFood, repeat, train, body, calendar, ticket, add } from 'ionicons/icons'
import { createBlankIncomeStream, getIncomeStreams, IncomeStream } from '@/storage/budget-storage';

export default defineComponent({
  name: 'BudgetPage',
  components: { IonPage, IonContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, BudgetCard, HeaderItem },
  data() {
    return {
      incomeStreams : [] as IncomeStream[]
    }
  },
  methods: {
    async updateIncomeStream() {
      this.incomeStreams = await getIncomeStreams()
    },
    async addNewIncomeStream() {
      await createBlankIncomeStream();
      await this.updateIncomeStream();
    }
  },
  setup() {
    return { home, cash, fastFood, repeat, train, body, calendar, ticket, add }
  }
});
</script>