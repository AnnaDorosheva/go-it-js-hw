"use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(users => users.name);

console.log(getNamesSortedByFriendsCount(users));

