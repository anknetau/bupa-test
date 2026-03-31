import { Provider } from "../components/ui/provider";
import { BookOwnersPage } from "../pages/BookOwnersPage";

export const PageRoot = () => {
  return (
    <Provider>
      <BookOwnersPage />
    </Provider>
  );
};
