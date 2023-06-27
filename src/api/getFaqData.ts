import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../fbase";

const querySnapshot = await getDocs(collection(dbService, "faq"));
querySnapshot.forEach((doc) => {
  console.log(doc);
  // console.log(`${doc.id} => ${doc.data()}`);
});
