
import { useDispatch } from 'react-redux';
import Database from '../../database/Firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore';


// export const getAllNoodleData =  (hoverId) =>{
// get(child(ref(Database), `noodles/${hoverId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
// }
// export const getAllNoodleDataRealtime =  (hoverId) =>{
//   const hoverRef = ref(Database, 'noodles/' + hoverId);
//   const dispatch = useDispatch()
//   onValue(hoverRef, (snapshot) => {
//     const data = snapshot.val();
//     dispatch(action.setAllNoodles)
//     console.log("Dong 11", data)
//   });
// }
export const getAllNoodle = async (id) => {
  try {
    const docRef = doc(Database, 'noodles', id)
    const noodleSnapshot = await getDoc(docRef);
    console.log("Document data:", noodleSnapshot.data());
    return noodleSnapshot.data();
  } catch (err) {
    console.log(err)
  }
}

