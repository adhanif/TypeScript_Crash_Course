"use strict";
//Basic types
let id = 5;
let company = 'Typescript course';
let data = true;
let id1 = [1, 2, 3];
let arr = [1, '2', true];
//Tuple
let person = [1, '2', true];
//Array of Tuple
let people;
// people = [[1, '2'],[1, '2'],]
// prettier-ignore
people = [[1, '2'], [1, '2'],];
//Union
let empl;
//enum
// prettier-ignore
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["down"] = 6] = "down";
    Direction1[Direction1["left"] = 7] = "left";
    Direction1[Direction1["right"] = 8] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
// prettier-ignore
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = { id: 1, name: 'john' };
//type Assertion
let cid = 1;
// let cutomId = <number>cid
//or
let customName = cid;
console.log(typeof customName);
//functions
const add = (x, y) => {
    return x + y;
};
console.log(add(2, 4));