'use strict'

import users from './users.js';



  const isActivUsers = users.filter(user => !user.isActive);
  console.log(isActivUsers);