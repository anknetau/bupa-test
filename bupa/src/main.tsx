import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BookOwners from "./components/BookOwners.tsx";

import { queryClient } from "./api/api";
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <ErrorBoundary>
          <BookOwners />
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
);
