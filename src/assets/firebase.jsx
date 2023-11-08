import { initializeApp } from "firebase/app";
import {getAnalytick} from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAoW0bCBeFVBGSGuPZAtWbG3YNIVBzxGbU",
  authDomain: "mediplus-fd2ae.firebaseapp.com",
  projectId: "mediplus-fd2ae",
  storageBucket: "mediplus-fd2ae.appspot.com",
  messagingSenderId: "589565198162",
  appId: "1:589565198162:web:8abf5f779aa98b316ac48b",
 
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytick(app)
export default app;