"use client";

import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import { useState } from "react";

async function addPartecipant(fullName: string) {
  const res = await fetch("/api/partecipants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({fullName}),
  });

  if (!res.ok) {
    console.error("Errore nella POST:", await res.text());
    return "error";
  }
  return "success";
}

export default function NewPartecipant() {
  const [partecipant, setPartecipant] = useState("");
  const handleClick = async () => {
    if (partecipant.length > 0) {
      const response = await addPartecipant(partecipant);
      if (response === "success") {
        setPartecipant("");
      }
    }
  };

  return (
    <>
      <TextInput value={partecipant} onChange={setPartecipant} />
      <Button label="click" onClick={handleClick} />
    </>
  );
}
