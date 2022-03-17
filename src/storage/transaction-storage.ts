//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////


//////////////////////////////////////////////
/*Interface Initialisation*/
//////////////////////////////////////////////

interface TransactionStore {
    transactions    : Transaction[]
}

interface Transaction {
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

const storageKey : string = "NearestRestaurants"

export async function storeNewTransaction(a: Restaurant[]) : Promise<boolean> {
  const object : NearestRestaurantStore = {
    nearestRestaurants : a,
    timestamp : new Date()
  }
  return await saveToStorage(storageKey, object)
}

//////////////////////////////////////////////
/*Retrieval Functions*/
//////////////////////////////////////////////

export async function getNearestRestaurants() : Promise<NearestRestaurantStore> {

  const data = await getFromStorage(storageKey);

  if (typeof data.value === 'string') {
    return (JSON.parse(data.value) as NearestRestaurantStore);
  } else { //Null Case
    return Object.assign({}, default_NearestRestaurantStore);
  }
}