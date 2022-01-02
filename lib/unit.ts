export abstract class Unit {}

class _Unit implements Unit {}

export const unit: Unit = new _Unit();
