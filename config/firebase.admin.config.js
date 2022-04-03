import admin from 'firebase-admin'

import serviceAccount from './firebaseAdminSdk.js'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FirebaseDBURL
})

export default admin
