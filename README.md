# funpjs
Funpjs provides basic implementations of functional programming patterns, like either or option!
## Either
The Either type can have two values. A right and a left one. You can create an either as following:
```
const either: Either<L, R> = new Left<L, R>(new L());
```
This will create an either that has a value on the left side. To create an either that has a value on the right side just swap out ```Left``` with ```Right```, like so: 
```
const either: Either<L, R> = new Right<L, R>(new R());
```
Because this is kind of long to write, there is a shortcut that does the same as shown above:
```
const either = left<L, R>(new L());
const either = right<L, R>(new R());
```

To get the current values of the either, you can use the ```fold``` method: 
```
either.fold((l) => {}, (r) => {});
```
You can also check for its current state:
```
const isLeft = either.isLeft();
const isRight = either.isRight();
```
## Option
A similar concept to either is option. The difference is that it can hold one value or no value and not two different values.
To create an option that has no value, do the following:
```
const option = new None<A>();
```
To create an option that has a value, do the following:
```
const option = new Some<A>(new A());
```
To read its current value you can use the `fold` method once again:
```
option.fold(() => {}, (a) => {});
```
You can also check for its current state: 
```
const isNone = option.isNone();
const isSome = option.isSome();
```
Pretty similiar to eithers!
## Unit
Because you cannot create an instance of void, you need another type to be able to return 'empty' values. That is where Units come in. 
To create a unit just use the prepared `unit` instance of the `Unit` class, like so: 
```
const exampleUnit: Unit = unit;
``` 
## Failure
Often Eithers or Options are used to telled if there is an error or not. For that I have prepared a base class `Failure` that can be used to indicate a failure:
```
const failureOrNot: Either<Failure, R> = left(new Failure('reason')); 
```
You can also extend this class to create your own failures: 
```
class CustomFailure extends Failure{
    constructor(readonly reason: string, readonly example: SomeCustomProperty){
        super(reason);
    }
}
```