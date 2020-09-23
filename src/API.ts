/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFirstTypeInput = {
  id?: string | null,
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
};

export type ModelFirstTypeConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelFirstTypeConditionInput | null > | null,
  or?: Array< ModelFirstTypeConditionInput | null > | null,
  not?: ModelFirstTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFirstTypeInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteFirstTypeInput = {
  id?: string | null,
};

export type ModelFirstTypeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelFirstTypeFilterInput | null > | null,
  or?: Array< ModelFirstTypeFilterInput | null > | null,
  not?: ModelFirstTypeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateFirstTypeMutationVariables = {
  input: CreateFirstTypeInput,
  condition?: ModelFirstTypeConditionInput | null,
};

export type CreateFirstTypeMutation = {
  createFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type UpdateFirstTypeMutationVariables = {
  input: UpdateFirstTypeInput,
  condition?: ModelFirstTypeConditionInput | null,
};

export type UpdateFirstTypeMutation = {
  updateFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type DeleteFirstTypeMutationVariables = {
  input: DeleteFirstTypeInput,
  condition?: ModelFirstTypeConditionInput | null,
};

export type DeleteFirstTypeMutation = {
  deleteFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type GetFirstTypeQueryVariables = {
  id: string,
};

export type GetFirstTypeQuery = {
  getFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type ListFirstTypesQueryVariables = {
  filter?: ModelFirstTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFirstTypesQuery = {
  listFirstTypes:  {
    __typename: "ModelFirstTypeConnection",
    items:  Array< {
      __typename: "FirstType",
      id: string,
      title: string,
      content: string,
      price: number | null,
      rating: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFirstTypeSubscription = {
  onCreateFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnUpdateFirstTypeSubscription = {
  onUpdateFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnDeleteFirstTypeSubscription = {
  onDeleteFirstType:  {
    __typename: "FirstType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
  } | null,
};
