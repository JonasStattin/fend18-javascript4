function whatIsMyType() {
  const a = 'a';
  const b = 0;
  const c = function() {
    return false;
  };
  const d = () => {
    return false;
  };
  const e = { 
    foo: 'bar'
  };
  const f = ['foo', 'bar'];
  const g = true;
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
  console.log(typeof e);
  console.log(typeof f);
  console.log(typeof g);
  console.log(e instanceof Object);
  console.log(f instanceof Array);
}

whatIsMyType();

// ----

function aGameOfOnes() {
  const one = 1;
  const ett = '1';
  
  console.log(one == ett);
  console.log(one === ett);
}

// aGameOfOnes();

// ----

function masterOfNone() {
  console.log('' == 0);
  console.log('' === 0);
  console.log('' == undefined);
  console.log('' == null);
  console.log('' == false);
  console.log('' === false);
}

// masterOfNone();

// ----

function masterOfNone2() {
  console.log(0 == undefined);
  console.log(0 == null);
  console.log(0 == false);
  console.log(0 === false);
}

// masterOfNone2();

// ----

function masterOfNone3() {
  console.log(undefined == false);
  console.log(undefined == null);
  console.log(undefined === null);
  console.log('...');
  console.log(null == false);
}

// masterOfNone3();

// ----

function masterOfNone4() {
  const myVar = false;
  const myZero = 0;
  let notDefinedYet;

  console.log(myVar == myZero);
  console.log(myVar === myZero);
  console.log('...');
  console.log(myVar == notDefinedYet);
  console.log(myVar ===  notDefinedYet);
  console.log('...');
  console.log(myZero == notDefinedYet);
  console.log(myZero ===  notDefinedYet);
  console.log('...');
  console.log(notDefinedYet == false);
  console.log(notDefinedYet != true);
  console.log(notDefinedYet !== true);
  console.log(notDefinedYet == undefined);
  console.log(notDefinedYet === undefined);
  console.log(notDefinedYet == null);
  console.log(notDefinedYet === null);
}

// masterOfNone4();

// ----

function gotThatReference() {
  const objA = {
    foo: 'bar'
  };
  const objB = {
    foo: 'bar'
  };
  const objC = objA;

  const objD = {
    a: '1',
    b: '2'
  };

  const objE = {
    b: '2',
    a: '1'
  };

  console.log(objA == objB);
  console.log(objA == objC);
  console.log(objA === objC);
  console.log(JSON.stringify(objA) === JSON.stringify(objB));
  console.log(JSON.stringify(objD) === JSON.stringify(objE));
}

// gotThatReference();

// ----

function gotThatReference2() {
  const arrA = ['foo', 'bar'];
  const arrB = ['foo', 'bar'];
  const arrB2 = ["foo", "bar"];
  const arrC = arrA;

  console.log(arrA == arrB);
  console.log(arrA == arrC);
  console.log(arrA === arrC);
  console.log(JSON.stringify(arrA) === JSON.stringify(arrB));
  console.log(JSON.stringify(arrA) === JSON.stringify(arrB2));
}

// gotThatReference2();

function gotThatReference3() {
  const funcA = function() {
    return 'foo';
  };
  const funcB = function() {
    return 'foo';
  };
  const funcC = funcA;

  console.log(funcA == funcB);
  console.log(funcA == funcC);
  console.log(funcA === funcC);
  console.log(JSON.stringify(funcA) === JSON.stringify(funcC));
}

// gotThatReference3();