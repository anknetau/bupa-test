import { QueryClient } from "@tanstack/react-query";

export const BASE_URL_LOCAL = "https://localhost";
export const BASE_URL_PROD = "https://digitalcodingtest.bupa.com.au";

export const PATH_BOOK_OWNERS = "/api/v1/bookowners";

// export const fetchBookOwners = async () => {
//   const res = await fetch();
//   const json = await res.json();
//   return BookOwnerListSchema.parse(json);
// };

export const defaultQueryFn = async ({
  queryKey,
}: {
  queryKey: readonly unknown[];
}) => {
  const data = await fetch(`${BASE_URL_LOCAL}${queryKey[0]}`);
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

// ----

// import { BookOwnerListSchema } from "./api/types";

// async function fetchUser(): Promise<User> {
//   const res = await fetch("/api/user");
//   const json = await res.json();

//   return UserSchema.parse(json); // runtime validation
// }

// TODO: Too many requests
