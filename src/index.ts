//Basic types

let id: number = 5
let company: string = 'Typescript course'
let data: boolean = true

let id1: number[] = [1, 2, 3]
let arr: any[] = [1, '2', true]

//Tuple
let person: [number, string, boolean] = [1, '2', true]

//Array of Tuple
let people: [number, string][]

// people = [[1, '2'],[1, '2'],]

// prettier-ignore
people = [[1, '2'],[1, '2'],]

//Union
let empl: string | number

//enum
// prettier-ignore
enum Direction1{
    Up=5,down, left, right
}
console.log(Direction1.Up)

// prettier-ignore
enum Direction2{
    Up="up",down="down", left="left", right="right"
}
console.log(Direction2.Up)

//Object
type User = { id: number; name: string }
const user: User = { id: 1, name: 'john' }

//type Assertion
let cid: any = 1
// let cutomId = <number>cid
//or
let customName = cid as string
console.log(typeof customName)

//functions

const add = (x: number, y: number): number => {
  return x + y
}
console.log(add(2, 4))
