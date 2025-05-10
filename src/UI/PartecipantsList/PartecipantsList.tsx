"use client"; // Questo è un componente client

import { useEffect, useState } from "react";
import { List, Partecipant } from "@/components/List/List";

export default function PartecipantsList() {
  const [partecipants, setPartecipants] = useState<Partecipant[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/partecipants");
    const data = await res.json();
    setPartecipants(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  

  return <List items={partecipants} />;
}
