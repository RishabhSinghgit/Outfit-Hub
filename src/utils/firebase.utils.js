import { initializeApp } from "firebase/app"; /** Creates an app instance config */
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, indexedDBLocalPersistence, getDoc, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYSwMZ9YvDTbQKr8CxdJINtA4rVSjOmro",
    authDomain: "outfit-hub.firebaseapp.com",
    projectId: "outfit-hub",
    storageBucket: "outfit-hub.appspot.com",
    messagingSenderId: "118276755343",
    appId: "1:118276755343:web:6437c56751ad08bc7745fa"
};

const fireBaseInstance = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithPopupMethod = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, provider)
export const db = getFirestore(); /** Coonnects to the firebase databse console */

/** To fetch and   To check existing document reference , a type of object firebase uses when talking about actual instance of document model   */
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShop = await getDoc(userDocRef);      // to get the user's document

    if (!userSnapShop.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {  displayName,email,  createdAt, ...additionalInformation});
        } catch (error) {
            console.log(`Error While Creating an User`, error)
        }
  }

}

export const  createAuthUserWithEmailAndPassword = async(email, password)=>{
      
      if (!email || !password) return;

       const response = await createUserWithEmailAndPassword(auth,email, password);
       return response
}

