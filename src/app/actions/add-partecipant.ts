'use server';

import { adminDb } from "@/lib/firebase-admin";
import { Timestamp } from "firebase-admin/firestore";

export const savePartecipant = async (fullName: string) => {
    const docRef = await adminDb
    .collection('Partecipants')
    .add({ fullName, createdAt: Timestamp.now() });
    
  return { success: true, id: docRef.id };
}
