import { QueryResolvers, User } from '../../../generated/graphql';

export const queryResolvers: QueryResolvers = {
  async getUser(parent, { id }, {}) {
    return { _id: id } as User;
  }
};
