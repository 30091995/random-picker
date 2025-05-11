import { List } from "@/components/List/List";
import { adminDb } from "@/lib/firebase-admin";
import NewPartecipant from "@/UI/NewPartecipant/NewPartecipant";
import { PickPartecipant } from "@/UI/PickPartecipant/PickPartecipant";
import { revalidateTag } from "next/cache";

const getParticipants = async () => {
  const snapshot = await adminDb
    .collection("Partecipants")
    .orderBy("createdAt", "asc")
    .get();

  
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    fullName: doc.data().fullName as string,
  }));
};

export default async function PartecipantsView() {
  const participants = await getParticipants();
  
  return (
    <main className="grid grid-cols-[auto_1fr] gap-50 overflow-hidden">
      <div className="flex flex-col gap-[32px] items-center sm:items-start overflow-hidden">
        <NewPartecipant />
        <PickPartecipant />
      </div>
      <List items={participants} />
    </main>
  );
}
