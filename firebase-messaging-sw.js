// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDMjFwCNFE72bctk4BNodId8fLLXMQ_Ulw",
  authDomain: "hello-notification-121eb.firebaseapp.com",
  projectId: "hello-notification-121eb",
  storageBucket: "hello-notification-121eb.firebasestorage.app",
  messagingSenderId: "17313072285",
  appId: "1:17313072285:web:ddbd170a5b062f236fc074",
  measurementId: "G-8W89T2V4CF"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    //icon: '/icon.png'
    icon: 'https://jaeguinocc.github.io/icon.png' // 절대 URL 사용 권장
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});