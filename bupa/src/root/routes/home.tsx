import GroupedBooks from "@/components/GroupedBooks";
import { Container, Flex, Separator, Spinner } from "@chakra-ui/react";
import { GetBooksButton } from "../../components/ui/GetBooksButton";
import { semanticColour } from "../palette";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { BookOwner } from "@/api/types";
import { fetchBookOwners } from "@/api/api";
import { useBookOwnerStore } from "@/store/bookOwnerStore";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { HardcoverOnlyLink } from "@/components/ui/HardcoverOnlyLink";

/* eslint-disable react-refresh/only-export-components */
export function meta() {
  return [{ title: "Bupa Test" }, { name: "description", content: "Bupa" }];
}

const Home = () => {
  const store = useBookOwnerStore();
  const { isFetching, error } = useSuspenseQuery<BookOwner[]>({
    queryKey: [],
    queryFn: async () => {
      const result = await fetchBookOwners();
      store.update(result);
      return result;
    },
  });

  return (
    <Container width={{ base: "90%", md: "60%" }}>
      {error ? (
        <ErrorAlert error={error.message} />
      ) : isFetching ? (
        <Spinner size="lg" color={semanticColour.spinnerColour} />
      ) : (
        <Content />
      )}
    </Container>
  );
};

const Content = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="flex-start"
        p="2"
        justify="center"
        gap="4"
        mt="8"
      >
        <GroupedBooks ownedBy="adults" />
        <GroupedBooks ownedBy="children" />
      </Flex>
      <Separator size="lg" m="4" />
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        justify="flex-end"
        align="center"
        p="2"
        gap="4"
      >
        <HardcoverOnlyLink />
        <GetBooksButton />
      </Flex>
    </>
  );
};

export default Home;
