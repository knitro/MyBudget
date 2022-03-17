//////////////////////////////////////////////
/*Imports*/
//////////////////////////////////////////////

import { Storage } from '@capacitor/storage';

//////////////////////////////////////////////
/*Functions*/
//////////////////////////////////////////////

/**
 * Saves Info into Capacitor Storage into a JSON string 
 * @param key - the key to store the info at
 * @param info - the info to store
 * @returns true if saving was successful, otherwise false
 */
export async function saveToStorage(key: string, info : any) : Promise<boolean> {

  let valueToSave : string = JSON.stringify(info);

  const returnValue = await Storage.set({
    key: key,
    value: valueToSave
  }).then( () => {
    return true;
  }).catch( err => {
    console.log(err);
    return false;
  });

  return returnValue;
}

/**
 * Gets the stored info from Capacitor Storage.
 * @param key - the key that the info was stored at
 * @returns the instance as a JSON string (will need to be parsed) or null if nothing was found/error
 */
export async function getFromStorage(key : string) : Promise<any> {

  const storageReturn = await Storage.get({key: key});
  
  if (typeof storageReturn.value === 'string') {
    return storageReturn.value;
  } else { //Null Case
    return null
  }
}

export async function clearKeyFromStorage(key : string) : Promise<boolean> {
  await Storage.remove({key : key})
  return true;
}