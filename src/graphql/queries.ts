// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFirstType = /* GraphQL */ `
  query GetFirstType($id: ID!) {
    getFirstType(id: $id) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const listFirstTypes = /* GraphQL */ `
  query ListFirstTypes(
    $filter: ModelFirstTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFirstTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
      }
      nextToken
    }
  }
`;
