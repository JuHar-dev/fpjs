import { expect } from "chai";
import { left, right } from "../lib/either";

describe("Either", () => {
  it("should be right when right was used to create the either", () => {
    const data = "this is a string";
    const either = right(data);
    expect(either.isRight()).to.equal(true);
    either.fold(
      (l) => null,
      (r) => expect(r).to.equal(data),
    );
  });

  it("should be right when right was used to create the either (with boolean)", () => {
    const either = right(false);
    expect(either.isRight()).to.equal(true);
    either.fold(
      (l) => null,
      (r) => expect(r).to.equal(false),
    );
  });

  it("should be left when left was used to create the either", () => {
    const data = "this is a string";
    const either = left(data);
    expect(either.isLeft()).to.equal(true);
    either.fold(
      (l) => expect(l).to.equal(data),
      (r) => null,
    );
  });
});
