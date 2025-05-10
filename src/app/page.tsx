import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import PartecipantsList from "@/UI/PartecipantsList/PartecipantsList";
import NewPartecipant from "@/UI/NewPartecipant/NewPartecipant";
import { PickPartecipant } from "@/UI/PickPartecipant/PickPartecipant";


const Home = async () => {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="grid grid-cols-[auto_1fr] gap-50 overflow-hidden">
        <div className="flex flex-col gap-[32px] items-center sm:items-start overflow-hidden">
          <NewPartecipant />
          <PickPartecipant />
        </div>
        <PartecipantsList />
      </main>
    </div>
  );
};

export default Home;
