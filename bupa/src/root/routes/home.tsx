import { BookOwnersPage } from "@/pages/BookOwnersPage";

/* eslint-disable react-refresh/only-export-components */
export function meta() {
  return [{ title: "Bupa Test" }, { name: "description", content: "Bupa" }];
}

const Home = () => {
  return <BookOwnersPage />;
};
export default Home;
