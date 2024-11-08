const capitalize = require("./capitalize");

test("Capitalize 'hello' => 'Hello'", () => {
  expect(capitalize("hello")).toMatch("Hello");
});
