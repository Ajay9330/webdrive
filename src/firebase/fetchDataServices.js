import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

/**
 * Fetch user-specific data from Firestore
 * @param {string} userId - The user ID to fetch data for
 * @param {string} collectionName - The name of the collection to fetch data from
 * @returns {Promise<Array>} - A promise that resolves to an array of documents
 */
export const fetchUserData = async (userId, collectionName) => {
  const q = query(collection(db, collectionName), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// // Specific functions for each data type, if you need them
// export const fetchUserImages = (userId) => fetchUserData(userId, 'images');
// export const fetchUserFiles = (userId) => fetchUserData(userId, 'files');
// export const fetchUserLinks = (userId) => fetchUserData(userId, 'links');
// export const fetchUserNotes = (userId) => fetchUserData(userId, 'notes');
