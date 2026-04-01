import { Link } from "@chakra-ui/react";
import { semanticColour } from "../palette";
import { useBookOwnerStore } from "@/store/bookOwnerStore";

export const HardcoverOnlyLink = () => {
  const { hardcoverOnly, toggleHardcoverOnly } = useBookOwnerStore();
  return (
    <Link
      onClick={() => toggleHardcoverOnly()}
      textDecoration="underline"
      fontWeight="bold"
      color={semanticColour.link}
    >
      {hardcoverOnly ? "All" : "Hardcover Only"}
    </Link>
  );
};
