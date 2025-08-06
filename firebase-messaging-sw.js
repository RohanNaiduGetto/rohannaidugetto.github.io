// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyBn4FT1s6M0j1Q8Eqw8f5QPEXwJ8qr5Rmo",
//   authDomain: "getto-e7e76.firebaseapp.com",
//   projectId: "getto-e7e76",
//   storageBucket: "getto-e7e76.firebasestorage.app",
//   messagingSenderId: "309741644065",
//   appId: "1:309741644065:web:00af4a2a3f52f6cb2cf660",
//   measurementId: "G-Y12Y17WQWT"
// };


// const messaging = firebase.messaging();

// new code for the firebase setup for web
// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBn4FT1s6M0j1Q8Eqw8f5QPEXwJ8qr5Rmo",
  authDomain: "getto-e7e76.firebaseapp.com",
  projectId: "getto-e7e76",
  storageBucket: "getto-e7e76.firebasestorage.app",
  messagingSenderId: "309741644065",
  appId: "1:309741644065:web:3ffe2a82501e86e42cf660",
  measurementId: "G-JBKMR6NB71"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'Notification';
  const notificationOptions = {
    body: payload.notification?.body,
    icon: '/icons/icon-192.png' // optional: customize if needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
