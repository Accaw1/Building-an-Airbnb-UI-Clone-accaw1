import { Suspense } from "react";
import { RoomRoute } from "@/components/RoomRoute";

const RoomPage = () => (
  <Suspense
    fallback={
      <p role="status" className="p-10">
        Loading room...
      </p>
    }
  >
    <RoomRoute />
  </Suspense>
);
export default RoomPage;
