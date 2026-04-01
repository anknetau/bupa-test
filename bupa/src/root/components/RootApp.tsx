import { Suspense } from "react";

import { queryClient } from "../../api/api.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { StrictMode } from "react";
import { Outlet } from "react-router";

export default function RootApp() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </QueryClientProvider>
    </StrictMode>
  );
}
