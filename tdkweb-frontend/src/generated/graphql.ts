import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Iterable` scalar type represents an array or a Traversable with any kind of data. */
  Iterable: any;
};



export type Content = Node & {
  __typename?: 'Content';
  id: Scalars['ID'];
  /** @deprecated  */
  _id: Scalars['Int'];
  /** @deprecated  */
  contentType: Scalars['String'];
  /** @deprecated  */
  status: Scalars['String'];
  /** @deprecated  */
  createdAt: Scalars['String'];
  /** @deprecated  */
  modifiedAt?: Maybe<Scalars['String']>;
  /** @deprecated  */
  publishedAt?: Maybe<Scalars['String']>;
  /** @deprecated  */
  depublishedAt?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldValues: Scalars['Iterable'];
  /** @deprecated  */
  taxonomyValues: Scalars['Iterable'];
  /** @deprecated  */
  authorName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  extras: Scalars['Iterable'];
};

/** Connection for Content. */
export type ContentConnection = {
  __typename?: 'ContentConnection';
  edges?: Maybe<Array<Maybe<ContentEdge>>>;
  pageInfo: ContentPageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of Content. */
export type ContentEdge = {
  __typename?: 'ContentEdge';
  node?: Maybe<Content>;
  cursor: Scalars['String'];
};

/** Information about the current page. */
export type ContentPageInfo = {
  __typename?: 'ContentPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Field = Node & {
  __typename?: 'Field';
  id: Scalars['ID'];
  /** @deprecated  */
  name: Scalars['String'];
  /** @deprecated  */
  _id: Scalars['Int'];
  /** @deprecated  */
  value?: Maybe<Scalars['Iterable']>;
  /** @deprecated  */
  new: Scalars['Boolean'];
  /**
   * like getValue() but returns single value for single value fields
   * @deprecated
   */
  parsedValue?: Maybe<Scalars['Iterable']>;
  /** @deprecated  */
  twigValue: Scalars['String'];
  /** @deprecated  */
  sortorder: Scalars['Int'];
  /** @deprecated  */
  locale?: Maybe<Scalars['String']>;
  /** @deprecated  */
  version?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  content: Content;
  /** @deprecated  */
  parent?: Maybe<Field>;
  /** @deprecated  */
  type: Scalars['String'];
  /**
   * Used in SelectField, to distinguish between selects for "a list of items"
   * and "select from a list of Content"
   * @deprecated
   */
  contentSelect: Scalars['Boolean'];
  /** @deprecated  */
  translatable: Scalars['Boolean'];
  /** @deprecated  */
  newTranslations: Scalars['Iterable'];
  /**
   * currentLocale is a non persisted field configured during postLoad event
   * @deprecated
   */
  currentLocale?: Maybe<Scalars['String']>;
  /** @deprecated  */
  defaultLocale: Scalars['String'];
};

/** Connection for Field. */
export type FieldConnection = {
  __typename?: 'FieldConnection';
  edges?: Maybe<Array<Maybe<FieldEdge>>>;
  pageInfo: FieldPageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of Field. */
export type FieldEdge = {
  __typename?: 'FieldEdge';
  node?: Maybe<Field>;
  cursor: Scalars['String'];
};

/** Information about the current page. */
export type FieldPageInfo = {
  __typename?: 'FieldPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};


/** A node, according to the Relay specification. */
export type Node = {
  /** The id of this node. */
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  /** @deprecated  */
  relation?: Maybe<Relation>;
  /** @deprecated  */
  relations?: Maybe<RelationConnection>;
  /** @deprecated  */
  content?: Maybe<Content>;
  /** @deprecated  */
  contents?: Maybe<ContentConnection>;
  /** @deprecated  */
  field?: Maybe<Field>;
  /** @deprecated  */
  fields?: Maybe<FieldConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryRelationArgs = {
  id: Scalars['ID'];
};


export type QueryRelationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  fromContent?: Maybe<Scalars['String']>;
  fromContent_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  toContent?: Maybe<Scalars['String']>;
  toContent_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  position?: Maybe<Scalars['Int']>;
};


export type QueryContentArgs = {
  id: Scalars['ID'];
};


export type QueryContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contentType?: Maybe<Scalars['String']>;
  contentType_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifiedAt?: Maybe<Scalars['String']>;
  modifiedAt_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['String']>;
  publishedAt_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  depublishedAt?: Maybe<Scalars['String']>;
  depublishedAt_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryFieldArgs = {
  id: Scalars['ID'];
};


export type QueryFieldsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  sortorder?: Maybe<Scalars['Int']>;
  sortorder_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  version?: Maybe<Scalars['Int']>;
  version_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Relation = Node & {
  __typename?: 'Relation';
  id: Scalars['ID'];
  /** @deprecated  */
  fromContent: Content;
  /** @deprecated  */
  toContent: Content;
};

/** Connection for Relation. */
export type RelationConnection = {
  __typename?: 'RelationConnection';
  edges?: Maybe<Array<Maybe<RelationEdge>>>;
  pageInfo: RelationPageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of Relation. */
export type RelationEdge = {
  __typename?: 'RelationEdge';
  node?: Maybe<Relation>;
  cursor: Scalars['String'];
};

/** Information about the current page. */
export type RelationPageInfo = {
  __typename?: 'RelationPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type TeamQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type NotFoundErrorQueryVariables = Exact<{ [key: string]: never; }>;


export type NotFoundErrorQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues'>
      )> }
    )>>> }
  )> }
);

export type BlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type BlocksQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type ShowsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowsQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type ShowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShowQuery = (
  { __typename?: 'Query' }
  & { content?: Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'id' | 'contentType' | 'fieldValues' | 'taxonomyValues'>
  )> }
);

export type ShowPlayRelationsQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type ShowPlayRelationsQuery = (
  { __typename?: 'Query' }
  & { relations?: Maybe<(
    { __typename?: 'RelationConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'RelationEdge' }
      & { node?: Maybe<(
        { __typename?: 'Relation' }
        & Pick<Relation, 'id'>
        & { fromContent: (
          { __typename?: 'Content' }
          & Pick<Content, 'id'>
        ), toContent: (
          { __typename?: 'Content' }
          & Pick<Content, 'id'>
        ) }
      )> }
    )>>> }
  )> }
);

export type PlaysQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaysQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type PlayQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayQuery = (
  { __typename?: 'Query' }
  & { content?: Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'id' | 'contentType' | 'fieldValues' | 'taxonomyValues'>
  )> }
);

export type ContactDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactDetailsQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type InfosQueryVariables = Exact<{ [key: string]: never; }>;


export type InfosQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = (
  { __typename?: 'Query' }
  & { contents?: Maybe<(
    { __typename?: 'ContentConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ContentEdge' }
      & { node?: Maybe<(
        { __typename?: 'Content' }
        & Pick<Content, 'id' | 'fieldValues' | 'taxonomyValues'>
      )> }
    )>>> }
  )> }
);

export const TeamDocument = gql`
    query Team {
  contents(contentType: "people") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamGQL extends Apollo.Query<TeamQuery, TeamQueryVariables> {
    document = TeamDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NotFoundErrorDocument = gql`
    query NotFoundError {
  contents(contentType: "404_messages") {
    edges {
      node {
        id
        fieldValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NotFoundErrorGQL extends Apollo.Query<NotFoundErrorQuery, NotFoundErrorQueryVariables> {
    document = NotFoundErrorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BlocksDocument = gql`
    query Blocks {
  contents(contentType: "blocks") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BlocksGQL extends Apollo.Query<BlocksQuery, BlocksQueryVariables> {
    document = BlocksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShowsDocument = gql`
    query Shows {
  contents(contentType: "shows") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShowsGQL extends Apollo.Query<ShowsQuery, ShowsQueryVariables> {
    document = ShowsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShowDocument = gql`
    query Show($id: ID!) {
  content(id: $id) {
    id
    contentType
    fieldValues
    taxonomyValues
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShowGQL extends Apollo.Query<ShowQuery, ShowQueryVariables> {
    document = ShowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShowPlayRelationsDocument = gql`
    query ShowPlayRelations($id: String) {
  relations(fromContent: $id) {
    edges {
      node {
        id
        fromContent {
          id
        }
        toContent {
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShowPlayRelationsGQL extends Apollo.Query<ShowPlayRelationsQuery, ShowPlayRelationsQueryVariables> {
    document = ShowPlayRelationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PlaysDocument = gql`
    query Plays {
  contents(contentType: "plays") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PlaysGQL extends Apollo.Query<PlaysQuery, PlaysQueryVariables> {
    document = PlaysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PlayDocument = gql`
    query Play($id: ID!) {
  content(id: $id) {
    id
    contentType
    fieldValues
    taxonomyValues
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PlayGQL extends Apollo.Query<PlayQuery, PlayQueryVariables> {
    document = PlayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ContactDetailsDocument = gql`
    query ContactDetails {
  contents(contentType: "contact_details") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ContactDetailsGQL extends Apollo.Query<ContactDetailsQuery, ContactDetailsQueryVariables> {
    document = ContactDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InfosDocument = gql`
    query Infos {
  contents(contentType: "infos") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InfosGQL extends Apollo.Query<InfosQuery, InfosQueryVariables> {
    document = InfosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const HomepageDocument = gql`
    query Homepage {
  contents(contentType: "homepage") {
    edges {
      node {
        id
        fieldValues
        taxonomyValues
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HomepageGQL extends Apollo.Query<HomepageQuery, HomepageQueryVariables> {
    document = HomepageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }