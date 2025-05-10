"use client";
import { Button } from "@/components/Button/Button";
import { Partecipant } from "@/components/List/List";
import { useMutation } from "@tanstack/react-query";

const fetchRandom = async () => {
  const res = await fetch("/api/random");
  if (!res.ok) {
    throw new Error("Failed to fetch random");
  }
  return res.json(); // Return the parsed data
};

export const PickPartecipant = () => {
  const {
    mutate: getRandomParticipant,
    data: randomPartecipant,
    isPending,
  } = useMutation<Partecipant, Error>({
    mutationFn: fetchRandom,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-2">
      <Button label="Estrai random" onClick={getRandomParticipant} />
      {randomPartecipant && <span>{randomPartecipant.fullName}</span>}
    </div>
  );
};
