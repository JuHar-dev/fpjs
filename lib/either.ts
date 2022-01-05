export abstract class Either<L, R> {
  protected left: L | undefined;
  protected right: R | undefined;

  isRight(): boolean {
    if (this.right !== undefined) return true;
    return false;
  }

  isLeft(): boolean {
    return !this.isRight();
  }

  fold<B>(l: (left: L) => B, r: (right: R) => B): B {
    if (this.left) {
      return l(this.left);
    } else if (this.right) {
      return r(this.right);
    }
    throw Error("Either was neither right or left (this should never happen and there is something seriously wrong)");
  }
}

export function left<L, R>(l: L): Either<L, R> {
  return new Left(l);
}

export function right<L, R>(r: R): Either<L, R> {
  return new Right(r);
}

export class Left<L, R> extends Either<L, R> {
  constructor(left: L) {
    super();
    if (left === undefined) {
      throw Error("Value of an either can not be undefined.");
    }
    this.left = left;
    this.right = undefined;
  }
}

export class Right<L, R> extends Either<L, R> {
  constructor(right: R) {
    super();
    if (right === undefined) {
      throw Error("Value of an either can not be undefined.");
    }
    this.right = right;
    this.left = undefined;
  }
}
