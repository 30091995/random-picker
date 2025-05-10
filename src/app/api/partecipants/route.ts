import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET() {
  const snapshot = await adminDb.collection("Partecipants").get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const docRef = await adminDb.collection("Partecipants").add(body);
  return NextResponse.json({ success: true, id: docRef.id });
}