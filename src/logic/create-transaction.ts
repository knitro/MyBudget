import { getBalance, removeBalance } from "@/storage/balance-storage";
import { storeNewTransaction, Transaction } from "@/storage/transaction-storage";
import { uuid } from "vue-uuid";

/**
 * Creates a transaction, stores it in storage, and updates the balance in storage.
 * @param amount - the transaction amount. If the amount is negative, then this value will be added instead. 
 * @param notes 
 */
export const createTransaction = async (amount : number, label: string, notes : string) : Promise<boolean> => {

  // Create Transaction

  const date = new Date(Date.now())

  const currentTransaction : Transaction = {
    id : uuid.v4(),
    amount : amount,
    balance: (await getBalance()) - amount,
    timestamp: date,
    label : label,
    notes: notes,
  }

  // Add Transaction to Storage
  await storeNewTransaction(currentTransaction)

  // Update Balance
  await removeBalance(amount)

  return true;
}