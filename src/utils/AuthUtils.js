import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig_ = {
  apiKey: "AIzaSyAdh6AhIjdLezKR0SH3x6vzbMh1_benKk8",
  authDomain: "barnard-project.firebaseapp.com",
  databaseURL: "https://barnard-project.firebaseio.com",
  projectId: "barnard-project",
  storageBucket: "barnard-project.appspot.com",
  messagingSenderId: "929114075380",
  appId: "1:929114075380:web:3ab89bf036919331262ea1",
  measurementId: "G-4X4KQ1ZF68"
};

class AuthUtils {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig_);
    }

    this.provider_ = new firebase.auth.GoogleAuthProvider();
  }

  async signInWithPopup() {
    return await firebase.auth().signInWithPopup(this.provider_);
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

  static getUser() {
    return AuthUtils.user;
  }

  static setUser(user) {
    AuthUtils.user = user;
  }

  static async getAuthHeader() {
    if (!AuthUtils.user) {
      return 'Bearer ';
    }

    const idToken = await AuthUtils.user.getIdToken();

    return `Bearer ${idToken}`;
  }

  getFirebaseAuth() {
    return firebase.auth();
  }
}


export default AuthUtils;
