'use strict'

import users from "./users.js";

const getSortedUniqueSkills = user => user.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
}, []).sort().filter(function(elem, index, self) {
    return index === self.indexOf(elem);
});

console.log(getSortedUniqueSkills(users));


