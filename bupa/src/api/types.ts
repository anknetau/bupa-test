import { z } from "zod";

export const BookSchema = z.object({
  name: z.string(),
  type: z.enum(["Hardcover", "Paperback", "Ebook"]),
});

export const BookOwnerSchema = z.object({
  name: z.string(),
  age: z.number(),
  books: z.array(BookSchema),
});

export const BookOwnerListSchema = z.array(BookOwnerSchema);

export type Book = z.infer<typeof BookSchema>;
export type Person = z.infer<typeof BookOwnerSchema>;
