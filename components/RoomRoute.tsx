"use client";

import { useParams } from "next/navigation";
import { RoomView } from "./RoomView";

export const RoomRoute = () => {
  const { id } = useParams<{ id: string }>();
  return <RoomView key={id} id={id} />;
};
