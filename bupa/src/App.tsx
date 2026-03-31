import { Suspense } from "react";

import BookOwners from "./components/BookOwners.tsx";

import { queryClient } from "./api/api";
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.tsx";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <ErrorBoundary>
          <BookOwners />
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  );
};
