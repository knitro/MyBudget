//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////

import { getFromStorage, saveToStorage } from "./capacitor-storage"


//////////////////////////////////////////////
/*Interface Initialisation*/
//////////////////////////////////////////////

interface TransactionStore {
    transactions    : Transaction[]
}

export interface Transaction {
  amount    : number
  timestamp : Date
  notes     : string
}

//////////////////////////////////////////////
/*Default Value Initialisation*/
//////////////////////////////////////////////

/**
 * Default Values for InformationStore
 */
const default_TransactionStore: TransactionStore = {
    transactions: [],
}

//////////////////////////////////////////////
/*Updater Functions*/
//////////////////////////////////////////////

const storageKey : string = "Transaction"

export async function setTransactions(a: Transaction[]) : Promise<boolean> {
  const object : TransactionStore = {
    transactions : a,
  }
  return await saveToStorage(storageKey, object)
}

export async function storeNewTransaction(a: Transaction) : Promise<boolean> {
  let currentStore : TransactionStore = await getFromStorage(storageKey);
  currentStore.transactions.push(a)
  return await saveToStorage(storageKey, currentStore)
}

//////////////////////////////////////////////
/*Retrieval Functions*/
//////////////////////////////////////////////

export async function getTransactions() : Promise<TransactionStore> {

  const data = await getFromStorage(storageKey);

  if (typeof data.value === 'string') {
    return (JSON.parse(data.value) as TransactionStore);
  } else { //Null Case
    return Object.assign({}, default_TransactionStore);
  }
}