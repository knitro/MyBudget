import { removeBalance } from "@/storage/balance-storage";
import { storeNewTransaction, Transaction } from "@/storage/transaction-storage";
import { uuid } from "vue-uuid";

/**
 * Creates a transaction, stores it in storage, and updates the balance in storage.
 * @param amount - the transaction amount. If the amount is negative, then this value will be added instead. 
 * @param notes 
 */
export const createTransaction = async (amount : number, notes : string) : Promise<boolean> => {

  // Create Transaction
  const currentTransaction : Transaction = {
    id : uuid.v4(),
    amount : amount,
    timestamp: new Date(Date.now()),
    notes: notes,
  }

  // Add Transaction to Storage
  await storeNewTransaction(currentTransaction)

  // Update Balance
  await removeBalance(amount)

  return true;
}