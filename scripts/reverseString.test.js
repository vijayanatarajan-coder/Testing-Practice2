const reverseString = require("./reverseString");

test("Reverse string 'hello' => 'olleh'", () => {
  expect(reverseString("hello")).toMatch("olleh");
});
