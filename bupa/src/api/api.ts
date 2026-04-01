import { QueryClient } from "@tanstack/react-query";
import { BookOwnerListSchema, type BookOwner } from "./types";
import { ZodError } from "zod";

export const BASE_URL_LOCAL = "http://localhost:5173";
export const BASE_URL_PROD = "https://digitalcodingtest.bupa.com.au";

export const PATH_BOOK_OWNERS = "/api/v1/bookowners";

export const defaultQueryFn = async ({
  queryKey,
}: {
  queryKey: readonly unknown[];
}) => {
  console.log(`${BASE_URL_PROD}${queryKey[0]}`);
  const data = await fetch(`${BASE_URL_PROD}${queryKey[0]}`);
  return await data.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: false,
    },
  },
});

export const fetchBookOwners = async (): Promise<BookOwner[]> => {
  const json: unknown = await queryClient.fetchQuery({
    queryKey: [PATH_BOOK_OWNERS],
  });

  try {
    return BookOwnerListSchema.parse(json);
  } catch (err) {
    if (err instanceof ZodError) {
      throw new Error("Invalid API response");
    }
    throw err;
  }
};
