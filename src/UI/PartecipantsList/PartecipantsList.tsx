"use client"; // Questo è un componente client

import { List, Partecipant } from '@/components/List/List';
import { useQuery } from '@tanstack/react-query';

// Function to fetch participants
const fetchParticipants = async () => {
  const res = await fetch('/api/partecipants');
  if (!res.ok) {
    throw new Error('Failed to fetch participants');
  }
  return res.json(); // Return the parsed data
};

export default function PartecipantsList() {
  // Use React Query's useQuery hook to fetch data
  const { data: participants, isLoading, isError, error } = useQuery<Partecipant[], Error>(
    {queryKey: ["partecipants"], queryFn: fetchParticipants}, 
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return <List items={participants ?? []} />;
}