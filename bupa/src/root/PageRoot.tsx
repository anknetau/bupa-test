import BookOwners from "../components/BookOwners";
import { Provider } from "../components/ui/provider";

export const PageRoot = () => {
  return (
    <Provider>
      <BookOwners />
    </Provider>
  );
};
