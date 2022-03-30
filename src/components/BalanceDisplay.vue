<template>
  <div id="balance-container">
    <div id="circle" class=".d-flex">
      <ion-text id="balance">
          Current Balance:
          <br/>
          ${{balance.toFixed(2)}}
      </ion-text>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonText } from '@ionic/vue';
import { getBalance } from '../storage/balance-storage'

export default defineComponent({
  name: 'BalanceDisplay',
  components: { IonText },
  props: {
    type : String
  },
  data() {

    let balance = 0
    getBalance().then((value) => {
      console.log("Balance = ", value)
      balance = value
    })

    return {
      balance
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

</style>
