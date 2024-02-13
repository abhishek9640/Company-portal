import {sendPasswordResetEmail} from 'firebase/auth';
import { auth, firestore } from './firebase';
import {  doc, getDoc, setDoc } from 'firebase/firestore';


export const resetPasswordAPI = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: "Password reset email sent. Please check your inbox." };
    } catch (error) {
      // Handle password reset errors
      return { success: false, message: "Password reset failed. Please check your email address." };
    }
  };

  export const getUserProfile = async (userId) => {
    try {
      const docRef = doc(firestore, 'users', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  };
  
  export const createUserProfile = async (userId, data) => {
    try {
      const docRef = doc(firestore, 'users', userId);
      await setDoc(docRef, data);
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  };