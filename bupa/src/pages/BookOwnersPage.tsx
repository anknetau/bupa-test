import BookOwners from "@/components/BookOwners";
import { Main } from "@/components/chakra_base";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Box, Flex } from "@chakra-ui/react";

export const BookOwnersPage = () => {
  return (
    <>
      <Main>
        <Flex direction="column" minH="100vh">
          <Box flex="1">
            <Header />
            <BookOwners />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Flex>
      </Main>
    </>
  );
};
