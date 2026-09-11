import { gql, type TypedDocumentNode } from "@apollo/client";

type AvailableQueriesData = {
  __schema: {
    queryType: {
      fields: {
        name: string;
      }[];
    } | null;
  };
};

type AvailableQueriesVariables = Record<string, never>;

export const GET_AVAILABLE_QUERIES: TypedDocumentNode<
  AvailableQueriesData,
  AvailableQueriesVariables
> = gql`
  query GetAvailableQueries {
    __schema {
      queryType {
        fields {
          name
        }
      }
    }
  }
`;
