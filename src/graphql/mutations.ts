// tslint:disable
// this is an auto generated file. This will be overwritten

export const createFirstType = /* GraphQL */ `
  mutation CreateFirstType(
    $input: CreateFirstTypeInput!
    $condition: ModelFirstTypeConditionInput
  ) {
    createFirstType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const updateFirstType = /* GraphQL */ `
  mutation UpdateFirstType(
    $input: UpdateFirstTypeInput!
    $condition: ModelFirstTypeConditionInput
  ) {
    updateFirstType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const deleteFirstType = /* GraphQL */ `
  mutation DeleteFirstType(
    $input: DeleteFirstTypeInput!
    $condition: ModelFirstTypeConditionInput
  ) {
    deleteFirstType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
