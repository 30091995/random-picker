'use server';

import { adminDb } from '@/lib/firebase-admin'; 
// Server action to get a random participant
export const getRandomParticipant = async () => {
  const snapshot = await adminDb.collection("Partecipants").orderBy("createdAt", "asc").get();
  const docs = snapshot.docs;

  if (docs.length === 0) {
    return null
  }

  const randomIndex = Math.floor(Math.random() * docs.length);
  const doc = docs[randomIndex];

  return { id: doc.id, fullName: doc.data().fullName };
}