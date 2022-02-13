const { gql } = require('apollo-server')
const typeDefs = gql`
  type Character {
    id: ID
    name: String
    birthday: String
    occupation: [String]
    image: String
    status: String
    nickname: String
    appearance: [Int]
    portrayed: String
    category: String
    better_call_saul_appearance: [Int]
  }
  type Query {
    Characters: [Character]
    Character(id:ID!): Character
  }
`;

module.exports = typeDefs;