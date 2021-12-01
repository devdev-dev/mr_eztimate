import {  QueryResolvers, User } from '../../../generated/graphql';

export const queryResolvers: QueryResolvers = {
  async getUser(parent, { id }, { db }) {
    return {} as User;
  }
};
