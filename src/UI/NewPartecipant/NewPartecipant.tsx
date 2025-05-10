"use client";

import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Function that performs the POST request
async function addPartecipant(fullName: string) {
  const res = await fetch("/api/partecipants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Errore nella POST");
  }

  return "success";
}

export default function NewPartecipant() {
  const [partecipant, setPartecipant] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addPartecipant,
    onSuccess: () => {
      setPartecipant(""); // Clear input on success
      queryClient.invalidateQueries({ queryKey: ["partecipants"] }); // Refresh list
    },
    onError: (error) => {
      console.error("Errore nella POST:", error);
    },
  });

  const handleClick = () => {
    if (partecipant.length > 0) {
      mutation.mutate(partecipant);
    }
  };

  return (
    <>
      <TextInput value={partecipant} onChange={setPartecipant} />
      <Button label={mutation.isPending ? "Sending..." : "Click"} onClick={handleClick} />
    </>
  );
}
