import { useQuery } from "@apollo/client/react";

import { GET_AVAILABLE_QUERIES } from "../graphql/queries/getAvailableQueries";

import { Box, Typography } from "@mui/material";

const AvailableQueries = () => {
  const { data, loading, error } = useQuery(GET_AVAILABLE_QUERIES);

  if (loading) {
    return <Typography>Loading available queries...</Typography>;
  }

  if (error) {
    return (
      <Typography color="error">Unable to load available queries.</Typography>
    );
  }

  const availableQueries =
    data?.__schema?.queryType?.fields.map(
      (field: { name: string }) => field.name,
    ) ?? [];

  return (
    <Box
      component="section"
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Available Queries
      </Typography>

      <Box
        component="ul"
        sx={{
          textAlign: "left",
        }}
      >
        {availableQueries.map((query: string) => (
          <li key={query}>{query}</li>
        ))}
      </Box>
    </Box>
  );
};

export default AvailableQueries;
