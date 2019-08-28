'use strict'

import users from './users.js';


const getUsersWithEyeColor = (user, color) => user.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));