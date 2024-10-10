import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Deal {
    id: String!
    street: String!
    city: String!
    state: String!
    area: Float!
    appointmentDate: String!
    price: Float!
    status: String!
    numOfPeople: Int!
    customerId: String!
  }

  type Query {
    getDeal(id: String!): Deal
    recentDeals(limit: Int!): [Deal]
  }

  input DealInput {
    street: String!
    city: String!
    state: String!
    area: Float!
    appointmentDate: String!
    price: Float!
    status: String!
    numOfPeople: Int!
    customerId: String!
  }

  type Mutation {
    createDeal(input: DealInput!): Deal
    updateDeal(id: String!, input: DealInput!): Deal
  }
`);

export default schema;
