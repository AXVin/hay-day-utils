<script setup>
import {reactive, ref} from 'vue';
import IconAdd from '../components/icons/IconAdd.vue';

let total = $ref(0);
let store = $ref({
  bems: {
    bolts: 0,
    planks: 0,
    tape: 0
  },
  sems: {
    nails: 0,
    screws: 0,
    woodPanels: 0
  },
  lems: {
    deeds: 0,
    mallets: 0,
    stakes: 0
  },
  cuttingTools: {
    axes: 0,
    saws: 0
  },
  miningTools: {
    dynamites: 0,
    tnt: 0,
    shovels: 0,
    pickaxes: 0
  }
});


function increment(category, item) {
  store[category][item]++;
  total++;
}

function decrement(category, item) {
  if (store[category][item] != 0) {
    store[category][item]--;
    total--;
  }
}

</script>

<template>
  <div class="calculator">
    <h1>Rarity Calculator</h1>
    
    <div v-for="obj, category in store">
      <h3>{{ category.toUpperCase() }}</h3>
      <ul v-for="num, item in obj">
        <li>
          {{item}}: {{num}}
          <IconAdd @click="increment(category, item)" />
          <button @click="decrement(category, item)">-</button>
          {{ (num/total) * 100 }}%
        </li>
      </ul>

    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .calculator {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
