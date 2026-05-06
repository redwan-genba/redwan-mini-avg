// packages/api-contracts/src/index.js
//
// This is the "recipe binder" — the shared code that both apps will use.
// For now it just exports one tiny function. Later we'll put real Zod
// schemas in here.

function greet(name) {
  return `Hello, ${name}! Greetings from @mini-ag/api-contracts, edited to see the live update in both apps.`;
}

module.exports = { greet };
