// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBgB1G3l9MOsDSSAu89qXtfgMarDCFIkhc",
//   authDomain: "assist-control-app-a21d3.firebaseapp.com",
//   projectId: "assist-control-app-a21d3",
//   storageBucket: "assist-control-app-a21d3.appspot.com",
//   messagingSenderId: "498579254783",
//   appId: "1:498579254783:web:3ee0ee870789e34d8c0bca",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB9KwpQsK6BWkD4ctkOEdnajckQ8EiuULI",
  authDomain: "crm-mech-admin-58cb7.firebaseapp.com",
  projectId: "crm-mech-admin-58cb7",
  storageBucket: "crm-mech-admin-58cb7.firebasestorage.app",
  messagingSenderId: "413595885915",
  appId: "1:413595885915:web:7eec6facf1e237d137fa7e",
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.email");
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

export { auth, provider };
