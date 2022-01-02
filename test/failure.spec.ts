import { expect } from "chai";
import Failure from "../lib/failure";

describe("failure", () => {
  it("should have the same reason that was passed", () => {
    const reason = "a52834de-d0c9-50b4-9064-9ef2ba2c5880";
    const failure = new Failure(reason);
    expect(failure.reason).to.equal(reason);
  });
});
