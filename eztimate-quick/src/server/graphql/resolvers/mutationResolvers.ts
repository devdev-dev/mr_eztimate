import {  MutationResolvers, User } from '../../../generated/graphql';

export const mutationResolvers: MutationResolvers = {
  createActiveUser: async (_, {}, {  }) => {
    const user: User = { _id: "123" };
    return user;
  },
  updateActiveUser: async (_, { input }, { }) => {
    let update = {};
    if (input.avatar !== undefined) update = { ...update, avatar: input.avatar };
    if (input.name !== undefined) update = { ...update, name: input.name };

    return {_id: "123"} as User;
  }
};
