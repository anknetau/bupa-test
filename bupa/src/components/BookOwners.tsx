import { useSuspenseQuery } from "@tanstack/react-query";
import type { BookOwner } from "../api/types";

const Spinner = () => {
  return <>🌀</>;
};

const BookOwners = () => {
  const { data, isFetching, error } = useSuspenseQuery<[BookOwner]>({
    queryKey: ["/test"],
  });

  if (error) return <div>"An error has occurred: " + error.message</div>;

  return (
    <div>
      <h1>Test {isFetching ? <Spinner /> : null}</h1>
      {data.map((bookOwner) => (
        <p key={bookOwner.name}>
          {/* <Button
            onClick={() => {
              // Prefetch the project query
              queryClient.prefetchQuery({
                queryKey: ["project", project.full_name],
                queryFn: () => fetchProject(project.full_name),
              });
              setActiveProject(project.full_name);
            }}
          >
            Load
          </Button>{" "} */}
          {bookOwner.age}
        </p>
      ))}
    </div>
  );
};

export default BookOwners;
