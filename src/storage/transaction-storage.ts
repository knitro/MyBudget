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
  id        : string
  amount    : number
  balance   : number
  timestamp : Date
  label     : string
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

const storageKey = "Transaction"

export async function setTransactions(a: Transaction[]) : Promise<boolean> {
  const object : TransactionStore = {
    transactions : a,
  }
  return await saveToStorage(storageKey, object)
}

export async function storeNewTransaction(a: Transaction) : Promise<boolean> {
  const currentStore : TransactionStore = await getTransactions();
  currentStore.transactions.push(a)
  return await saveToStorage(storageKey, currentStore)
}

//////////////////////////////////////////////
/*Retrieval Functions*/
//////////////////////////////////////////////

export async function getTransactions() : Promise<TransactionStore> {
  const data = await getFromStorage(storageKey);
  if (typeof data === 'string') {
    return (JSON.parse(data) as TransactionStore);
  } else { //Null Case
    return Object.assign({}, default_TransactionStore);
  }
}