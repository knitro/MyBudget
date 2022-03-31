//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////

import { getFromStorage, saveToStorage } from "./capacitor-storage";

//////////////////////////////////////////////
/*Interface Initialisation*/
//////////////////////////////////////////////

export interface Budget {
  id        : string
  income    : IncomeStream[]
  housing   : Expense[]
  savings   : Expense[]
  food      : Expense[]
  recurring : Expense[]
  transport : Expense[]
  birthdays : Expense[]
  annual    : Expense[]
  other     : Expense[]
}

export interface IncomeStream {
  id      : string
  name    : string
  amount  : number
  rate    : INCOME_RATE
}

export interface Expense {
  id      : string
  name    : string
  amount  : number
  notes   : string
}

export enum INCOME_RATE {
  "PER DAY", "PER WEEK", "PER FORTNIGHT", "PER_MONTH", "PER_YEAR"
}

//////////////////////////////////////////////
/*Default Value Initialisation*/
//////////////////////////////////////////////

/**
* Default Values for InformationStore
*/
const default_budget: Budget = {
  id        : "",
  income    : [],
  housing   : [],
  savings   : [],
  food      : [],
  recurring : [],
  transport : [],
  birthdays : [],
  annual    : [],
  other     : [],
}

//////////////////////////////////////////////
/*Main Initialisations*/
//////////////////////////////////////////////

const storageKey = "budget"

export async function saveBudget(a : Budget) : Promise<boolean> {
  return await saveToStorage(storageKey, a)
}

export async function getBudget() : Promise<Budget> {
  const data = await getFromStorage(storageKey);
  if (typeof data === 'string') {
    return (JSON.parse(data) as Budget);
  } else { //Null Case
    return default_budget;
  }
}

//////////////////////////////////////////////
/*Income Stream*/
//////////////////////////////////////////////

export async function addIncomeStream(a: IncomeStream) : Promise<boolean> {
  const currentBudget = await getBudget()
  currentBudget.income.push(a)
  return await saveToStorage(storageKey, currentBudget)
}

export async function removeIncomeStream(a: string) : Promise<boolean> {
  const currentBudget = await getBudget()
  const filteredArray : IncomeStream[] = currentBudget.income.filter((item : IncomeStream) => {
    return item.id !== a
  })
  currentBudget.income = filteredArray
  return await saveToStorage(storageKey, currentBudget)
}

export async function getIncomeStreams() : Promise<IncomeStream[]> {
  const currentBudget = await getBudget()
  return currentBudget.income;
}