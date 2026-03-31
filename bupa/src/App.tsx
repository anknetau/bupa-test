import { Suspense } from "react";

import BookOwners from "./components/BookOwners.tsx";

import { queryClient } from "./api/api";
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { Provider } from "./components/ui/provider.tsx";

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

export const PageRoot = () => {
  return (
    <Provider>
      <BookOwners />
    </Provider>
  );
};
