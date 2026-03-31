import { useSuspenseQuery } from "@tanstack/react-query";
import type { BookOwner } from "../api/types";
import { fetchBookOwners } from "../api/api";

const Spinner = () => {
  return <>🌀</>;
};

const BookOwners = () => {
  const { data, isFetching, error } = useSuspenseQuery<BookOwner[]>({
    queryKey: [],
    queryFn: fetchBookOwners,
  });

  if (error) return <div>"An error has occurred: " + error.message</div>;

  return (
    <div>
      <h1>{isFetching ? <Spinner /> : null}</h1>
      {data.map((bookOwner) => (
        <>
          <p>{bookOwner.name}</p>
          <p>{bookOwner.age}</p>
        </>
      ))}
    </div>
  );
};

export default BookOwners;

//   {/* <Button
//   onClick={() => {
//     // Prefetch the project query
//     queryClient.prefetchQuery({
//       queryKey: ["project", project.full_name],
//       queryFn: () => fetchProject(project.full_name),
//     });
//     setActiveProject(project.full_name);
//   }}
// >
//   Load
// </Button>{" "} */}
