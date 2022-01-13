/* eslint-disable import/prefer-default-export */
export const findFriends = (friends, searchQuery) => {
    const friend = friends.find((match) => match === searchQuery);
    return friend;
};
