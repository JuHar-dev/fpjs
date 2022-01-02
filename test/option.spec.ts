import { expect } from "chai";
import { some, none } from "../lib/option";

describe("option", () => {
  it("should be some if some was used to create option", () => {
    const value = "TNUFcnHvXmigApYEyQWu";
    const result = some(value);
    expect(result.isSome()).to.equal(true);
  });
  it("should be none if none was used to create option", () => {
    const result = none();
    expect(result.isNone()).to.equal(true);
  });
});
