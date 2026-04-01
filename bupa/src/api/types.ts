import { z } from "zod";

export const BookSchema = z.object({
  // Assumption: that these are never absent
  name: z.string(),
  // Assumption: that these are the only 3 types in this response
  type: z.enum(["Hardcover", "Paperback", "Ebook"]),
});

export const BookOwnerSchema = z.object({
  // Assumption: that these are never absent, and that responses like "NAME" and "AGE" are incorrect.
  name: z.string(),
  age: z.number(),
  books: z.array(BookSchema),
});

export const BookOwnerListSchema = z.array(BookOwnerSchema);

export type Book = z.infer<typeof BookSchema>;
export type BookOwner = z.infer<typeof BookOwnerSchema>;
