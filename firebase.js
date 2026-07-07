// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBQehMWwcThf8NLMGeJIG-omcywEEiJpHs",
  authDomain: "raj-mini-mart.firebaseapp.com",
  projectId: "raj-mini-mart",
  storageBucket: "raj-mini-mart.firebasestorage.app",
  messagingSenderId: "490305070206",
  appId: "1:490305070206:web:ff8214149720a7b8a1e42f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase Connected Successfully!");
const productsRef = collection(db, "products");

async function loadProducts() {
  const snapshot = await getDocs(productsRef);

  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

loadProducts();
