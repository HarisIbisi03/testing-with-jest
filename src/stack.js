const _ = require("underscore");

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
  stack.unshift(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
  if (stack.length === 0) {
    return undefined;
  }
  return stack.shift();
};

// Returnerar det översta elementet i stacken
exports.peek = function () {
  if (stack.length === 0) {
    return undefined;
  } else {
    return stack[0];
  }
};
