import { useQuery } from "@apollo/client/react";

import { GET_AVAILABLE_QUERIES } from "../graphql/queries/getAvailableQueries";

import "./AvailableQueries.css";

const AvailableQueries = () => {
  const { data, loading, error } = useQuery(GET_AVAILABLE_QUERIES);

  if (loading) {
    return <p>Loading available queries...</p>;
  }

  if (error) {
    return <p>Unable to load available queries.</p>;
  }

  const availableQueries =
    data?.__schema?.queryType?.fields.map(
      (field: { name: string }) => field.name,
    ) ?? [];

  return (
    <section className="available-queries">
      <h2>Available Queries</h2>

      <ul>
        {availableQueries.map((query: string) => (
          <li key={query}>{query}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableQueries;
