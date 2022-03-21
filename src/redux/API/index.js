
import Database from '../../database/Firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore';


export const getAllNoodle = async (id) => {
  try {
    const docRef = doc(Database, 'noodles', id)
    const noodleSnapshot = await getDoc(docRef);
    console.log("Data:", noodleSnapshot.data());
    return noodleSnapshot.data();
  } catch (err) {
    console.log(err)
  }
}

