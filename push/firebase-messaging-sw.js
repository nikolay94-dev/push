// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');
importScripts('https://code.jquery.com/jquery-3.4.1.min.js');

firebase.initializeApp({
    messagingSenderId: '231477857272'
});

const messaging = firebase.messaging();