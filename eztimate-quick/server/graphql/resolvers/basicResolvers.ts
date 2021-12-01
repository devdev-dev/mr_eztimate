import { UserResolvers } from '../../../generated/graphql';

export const usersResolvers: UserResolvers = {
  name(user) {
    return user.name && user.name.length > 0 ? user.name : 'Anonymous';
  }
};
