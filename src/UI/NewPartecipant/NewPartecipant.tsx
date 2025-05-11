"use client";

import { savePartecipant } from "@/app/actions/add-partecipant";
import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function NewPartecipant() {
  const [partecipant, setPartecipant] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    if (partecipant.length > 0) {
      startTransition(async () => {
        try {
          await savePartecipant(partecipant);
          setPartecipant("");
          router.refresh();
        } catch (err) {
          console.error("Error adding:", err);
        }
      });
    }
  };

  return (
    <div className="flex gap-4">
      <TextInput value={partecipant} onChange={setPartecipant} />
      <Button label={isPending ? "Aggiungendo alla lista..." : "Aggiungi partecipante"} onClick={handleClick} />
    </div>
  );
}
