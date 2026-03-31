import { Button, HStack } from "@chakra-ui/react";
import BookOwners from "../components/BookOwners";
import { Main } from "../components/chakra_base";

export const BookOwnersPage = () => {
  return (
    <>
      <BookOwners />
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
      <Main>
        <section>
          <article>
            <h2>Title</h2>
            <p>Content</p>
          </article>
        </section>
      </Main>
    </>
  );
};
