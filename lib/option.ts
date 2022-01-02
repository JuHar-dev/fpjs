export abstract class Option<A> {
  protected some: A | undefined;
  protected none: None<A> | undefined;

  public isSome(): boolean {
    return this.some !== undefined;
  }

  public isNone(): boolean {
    return !this.isSome();
  }

  fold<B>(none: () => B, r: (some: A) => B): B {
    if (this.isNone()) {
      return none();
    } else if (this.isSome()) {
      return r(this.some!);
    }
    throw Error();
  }
}

export class None<A> extends Option<A> {
  constructor() {
    super();
    this.none = this;
    this.some = undefined;
  }
}

export class Some<A> extends Option<A> {
  constructor(a: A) {
    super();
    this.none = undefined;
    this.some = a;
  }
}

export function none<A>(): None<A> {
  return new None();
}

export function some<A>(a: A): Some<A> {
  return new Some(a);
}

export function optionOf<T>(value: T | null): Option<T> {
  if (value === null) {
    return none();
  } else {
    return new Some<T>(value);
  }
}
