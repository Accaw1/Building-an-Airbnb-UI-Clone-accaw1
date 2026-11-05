import { Suspense } from "react";
import { CatalogView } from "@/components/CatalogView";

const CatalogPage = () => (
  <Suspense
    fallback={
      <p role="status" className="p-10">
        Loading results...
      </p>
    }
  >
    <CatalogView />
  </Suspense>
);
export default CatalogPage;
