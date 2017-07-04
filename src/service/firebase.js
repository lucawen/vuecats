import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBKYFp_VGXFPFtsrcZPSEzEyVSwbXoCzc4',
  authDomain: 'testvue-2e62d.firebaseapp.com',
  databaseURL: 'https://testvue-2e62d.firebaseio.com',
  projectId: 'testvue-2e62d',
  storageBucket: 'testvue-2e62d.appspot.com',
  messagingSenderId: '158504200334'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
