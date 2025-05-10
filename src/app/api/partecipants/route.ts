import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { Timestamp } from "firebase-admin/firestore";

export async function GET() {
  const snapshot = await adminDb.collection("Partecipants").orderBy("createdAt", "asc").get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const docRef = await adminDb.collection("Partecipants").add({...body, createdAt: Timestamp.now()});
  return NextResponse.json({ success: true, id: docRef.id });
}