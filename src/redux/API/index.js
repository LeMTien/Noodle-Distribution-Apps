
import Database from '../../database/Firebase'


export const getAllNoodleData = async () =>{
    const dbRef = ref(Database);
    get(child(dbRef, `noodles`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log("No data available");
          return 
        }
      }).catch((error) => {
        console.error(error);
      });
      return
}