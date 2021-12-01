import { Resolvers } from '../../../generated/graphql';
import { usersResolvers } from './basicResolvers';
import { mutationResolvers } from './mutationResolvers';
import { queryResolvers } from './queryResolvers';

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  User: usersResolvers
};
