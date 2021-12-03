import {  MutationResolvers, User } from '../../../generated/graphql';

export const mutationResolvers: MutationResolvers = {
  createActiveUser: async (_, {}, { db }) => {
    console.log("create")
    const { insertedId } = await db.collection('users').insertOne({});
    const user: User = { _id: insertedId.toHexString() };
    return user;
  },
  updateActiveUser: async (_, { input }, { db, userId }) => {
    let update = {};
    if (input.avatar !== undefined) update = { ...update, avatar: input.avatar };
    if (input.name !== undefined) update = { ...update, name: input.name };

    const { value } = await db.collection('users').findOneAndUpdate(
      { _id: userId },
      {
        $set: update
      },
      { returnDocument: 'after' }
    );

    return value as User;
  }
};
