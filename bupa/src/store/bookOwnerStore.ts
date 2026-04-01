import { create } from "zustand";
import type { Book, BookOwner } from "@/api/types";

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

// This will make a synthetic book ID from a book's title and .
// Assumption: that there's no better ID to use.
export const makeBookId = (book: Book): string => {
  let type = "";
  switch (book.type) {
    case "Ebook":
      type = "E";
      break;
    case "Hardcover":
      type = "H";
      break;
    case "Paperback":
      type = "P";
      break;
    default:
      type = "" as never;
      break;
  }
  return book.name + "-" + type;
};

export const uniqueStrings = (strings: string[]): string[] => {
  return strings.reduce(
    (acc, s) => (acc.includes(s) ? acc : [...acc, s]),
    [] as string[],
  );
};

export const uniqueBooks = (data: BookOwner[]): Book[] => {
  const idsSeen: string[] = [];
  const result: Book[] = [];
  data.forEach((bookOwner) => {
    bookOwner.books.forEach((book) => {
      const bookId = makeBookId(book);
      if (!idsSeen.includes(bookId)) {
        idsSeen.push(bookId);
        result.push(book);
      }
    });
  });
  return result;
};

export const bookListSortedByTitle = (bookList: Book[]) => {
  return [...bookList].sort((a: Book, b: Book) => {
    return a.name.localeCompare(b.name);
  });
};
