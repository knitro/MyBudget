<template>
  <ion-page>
    <HeaderItem />
    <ion-content :fullscreen="true">

      <ion-card-header>
        <ion-card-title>Income Streams</ion-card-title>
      </ion-card-header>

      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input placeholder="Type your income stream name"></ion-input>
        <ion-select value="per_month" ok-text="Set" cancel-text="Close">
          <ion-select-option value="per_hour">per Hour</ion-select-option>
          <ion-select-option value="per_day">per Day</ion-select-option>
          <ion-select-option value="per_week">per Week</ion-select-option>
          <ion-select-option value="per_fortnight">per Fortnight</ion-select-option>
          <ion-select-option value="per_month">per Month</ion-select-option>
          <ion-select-option value="per_year">per Year</ion-select-option>
        </ion-select>
      </ion-item>

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
import { IonPage, IonContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/vue';
import HeaderItem from '@/components/HeaderItem.vue';
import BudgetCard from '@/components/BudgetCard.vue';
import { home, cash, fastFood, repeat, train, body, calendar, ticket } from 'ionicons/icons'

export default defineComponent({
  name: 'BudgetPage',
  components: { IonPage, IonContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, BudgetCard, HeaderItem },
  setup() {
    return { home, cash, fastFood, repeat, train, body, calendar, ticket }
  }
});
</script>
