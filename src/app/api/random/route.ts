import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET() {
    const snapshot = await adminDb.collection("Partecipants").orderBy("createdAt", "asc").get();
    const docs = snapshot.docs;
  
    if (docs.length === 0) {
      return NextResponse.json({ error: "No participants found" }, { status: 404 });
    }
  
    const randomIndex = Math.floor(Math.random() * docs.length);
    const doc = docs[randomIndex];
  
    return NextResponse.json({ id: doc.id, ...doc.data() });
  }