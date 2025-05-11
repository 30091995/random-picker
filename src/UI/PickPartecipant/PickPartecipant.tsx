"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/Button/Button";
import { getRandomParticipant } from "@/app/actions/pick-random";

export const PickPartecipant = () => {
  const [randomParticipants, setRandomParticipants] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();

  const handlePickRandom = () => {
    startTransition(async () => {
      try {
        const response = await getRandomParticipant();
        if (!response) {
          console.log("No participants found");
        } else {
          setRandomParticipants((prevState) => [
            ...prevState,
            response.fullName,
          ]);
        }
      } catch (err) {
        console.log("An error occurred while fetching the participant.");
      }
    });
  };

  return (
    <div className="grid gap-4">
      <Button
        label={isPending ? "Loading..." : "Estrai random"}
        onClick={handlePickRandom}
        className="justify-self-start"
      />
      <div className="flex flex-col">
        {randomParticipants.length > 0 &&
          randomParticipants.map((partecipant, index) => (
            <span
              key={index}
            >{`${partecipant} -> (escluso dalle prossime estrazioni)`}</span>
          ))}
      </div>
    </div>
  );
};
