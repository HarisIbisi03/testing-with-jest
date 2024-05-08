const stack = require("../src/stack");

beforeEach(() => {
  stack.length = 0;
});

test("pop on non-empty stack removes and returns last element", () => {
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toBe(2);
});

test("push adds elements to the stack in the correct order", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.peek()).toBe(3);
});

test("peek does not modify the stack", () => {
  stack.push(1);
  const topElement = stack.peek();
  expect(topElement).toBe(1);
  expect(stack.pop()).toBe(1);
});
