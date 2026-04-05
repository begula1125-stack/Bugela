const firebaseConfig = {
  apiKey: "AIzaSyC7yZqDYw_NFoa4ZEg7c3pG7_ZH1QHXXDE",
  authDomain: "pipidastrhub.firebaseapp.com",
  // Добавь эту строку обязательно!
  databaseURL: "https://pipidastrhub-default-rtdb.firebaseio.com", 
  projectId: "pipidastrhub",
  storageBucket: "pipidastrhub.firebasestorage.app",
  messagingSenderId: "605351522427",
  appId: "1:605351522427:web:d7ffeebc70feda9c8db2de",
  measurementId: "G-9Z5RFHT5K8"
};

// Инициализация (проверь, чтобы это было в конце файла)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();