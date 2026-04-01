import { Button } from "@chakra-ui/react";
import { semanticColour } from "../../root/palette";
import { queryClient } from "@/api/api";
import { useBookOwnerStore } from "@/store/bookOwnerStore";

export const GetBooksButton = () => {
  const { resetHardcoverOnly } = useBookOwnerStore();
  return (
    <Button
      bgColor={semanticColour.buttonBackground}
      onClick={() => {
        resetHardcoverOnly();
        return queryClient.invalidateQueries();
      }}
      px={{ base: "16", md: "4" }}
    >
      Get Books
    </Button>
  );
};
