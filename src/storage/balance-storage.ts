//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////

import { getFromStorage, saveToStorage } from "./capacitor-storage";

//////////////////////////////////////////////
/*Updater Functions*/
//////////////////////////////////////////////

const storageKey : string = "balance"

export async function storeBalance(a: number) : Promise<boolean> {
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