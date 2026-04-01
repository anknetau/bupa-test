import { create } from "zustand";
import type { BookOwner } from "@/api/types";

export const useBookOwnerStore = create((set) => ({
  bookOwnerList: [] as BookOwner[],
  update: (newList: BookOwner[]) => set({ bookOwnerList: newList }),
}));

// Assumption: comparisons are based on whatever comes first in the name, with a simple
// localeCompare.
export const bookOwnerListSortedByName = (bookOwnerList: BookOwner[]) => {
  return [...bookOwnerList].sort((a: BookOwner, b: BookOwner) => {
    return a.name.localeCompare(b.name);
  });
};
