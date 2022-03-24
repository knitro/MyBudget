//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////

import { getFromStorage, saveToStorage } from "./capacitor-storage";

//////////////////////////////////////////////
/*Updater Functions*/
//////////////////////////////////////////////

const storageKey : string = "balance"

export async function addBalance(a: number) : Promise<boolean> {
  let currentBalance = await getBalance()
  currentBalance += a;
  return await saveToStorage(storageKey, currentBalance)
}

export async function removeBalance(a: number) : Promise<boolean> {
  let currentBalance = await getBalance()
  currentBalance -= a;
  return await saveToStorage(storageKey, currentBalance)
}

export async function setBalance(a: number) : Promise<boolean> {
  return await saveToStorage(storageKey, a)
}

//////////////////////////////////////////////
/*Retrieval Functions*/
//////////////////////////////////////////////

export async function getBalance() : Promise<number> {

  const data = await getFromStorage(storageKey);

  if (typeof data.value === 'string') {
    return (JSON.parse(data.value) as number);
  } else { //Null Case
    return 0;
  }
}