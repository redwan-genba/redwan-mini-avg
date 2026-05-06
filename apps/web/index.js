// apps/web/index.js
//
// A throwaway script just to prove the workspace wiring works.
// We import `greet` from the shared package and log a frontend-flavoured greeting.

const { greet } = require("@mini-ag/api-contracts");

console.log(greet("Frontend"));
