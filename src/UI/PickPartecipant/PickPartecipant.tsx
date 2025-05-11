"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/Button/Button";
import { getRandomParticipant } from "@/app/actions/pick-random";

export const PickPartecipant = () => {
  const [randomParticipants, setRandomParticipants] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handlePickRandom = () => {
    setError(null);

    startTransition(async () => {
      try {
        const response = await getRandomParticipant();
        if (!response) {
          setError("No participants found");
        } else {
          setRandomParticipants((prevState) => [
            ...prevState,
            response.fullName,
          ]);
        }
      } catch (err) {
        setError("An error occurred while fetching the participant.");
      }
    });
  };

  return (
    <div className="grid gap-4 grid-cols-2">
      <Button
        label={isPending ? "Loading..." : "Estrai random"}
        onClick={handlePickRandom}
      />

      {error && <span className="text-red-500">{error}</span>}

      <h3>Partecipanti estratti</h3>
      {randomParticipants.length > 0 &&
        randomParticipants.map((partecipant, index) => <span key={index}>{partecipant}</span>)}
    </div>
  );
};
