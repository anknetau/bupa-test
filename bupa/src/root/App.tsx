import { Suspense } from "react";

import { queryClient } from "../api/api.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { PageRoot } from "./PageRoot.tsx";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <ErrorBoundary>
          <PageRoot />
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  );
};
