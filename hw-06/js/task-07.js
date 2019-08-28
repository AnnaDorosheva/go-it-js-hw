'use strict'

import users from './users.js';
const calculateTotalBalance = users.reduce((bal, user) => bal + user.balance, 0);
  
  console.log(calculateTotalBalance); // 20916


