importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAOUZn3JvtGxdWIvGnmfSLwXd_quZq_3mw",
    authDomain: "nuxt-notification-12345.firebaseapp.com",
    projectId: "nuxt-notification-12345",
    storageBucket: "nuxt-notification-12345.appspot.com",
    messagingSenderId: "210612044348",
    appId: "1:210612044348:web:a064171b7027751c38f939",
    measurementId: "G-L951BN0GE5"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});