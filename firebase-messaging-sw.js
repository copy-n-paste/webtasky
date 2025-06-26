importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4EIppx9yq01FtdF_w3wmwXdjvU-88cyM",
  authDomain: "mytaskwebapp.firebaseapp.com",
  projectId: "mytaskwebapp",
  storageBucket: "mytaskwebapp.firebasestorage.app",
  messagingSenderId: "229046753081",
  appId: "1:229046753081:web:828bdff56710ff7407fae8",
  measurementId: "G-T8XTSSYQ9W"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/icon.png' // Optional: path to your app icon
    }
  );
}); 