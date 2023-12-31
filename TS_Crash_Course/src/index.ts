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

// void function return
const log = (message: string | number): void => {
  console.log(message)
}
log('true')

//interface

interface UserInterface {
  id: number
  name: string
}

const newPerson: UserInterface = {
  id: 1,
  name: 'John Doe',
}

// interface function

interface MathFunc {
  (x: number, y: number): number
}

const add2: MathFunc = (x: number, y: number): number => {
  return x + y
}
const sub: MathFunc = (x: number, y: number): number => {
  return x - y
}

//classes

interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} has been registered!`
  }
}

const dani = new Person(1, 'dani')
console.log(dani)
console.log(dani.register())

//class inheritane
class Employee extends Person {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emplo = new Employee(3, 'shawn', 'Developer')
console.log(emplo.register())

//Gnormal function

// const getArray = (items: any[]): any[] => {
//   return new Array().concat(items)
// }

// const numArray = getArray([1, 2, 3])
// const strArray = getArray(['dani1', 'dani2'])
// strArray.push('dani3')
// console.log(numArray, strArray)

//with Generic

const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items)
}

const numArray = getArray<number>([1, 2, 3])
const strArray = getArray<string>(['dani1', 'dani2'])
strArray.push('dani3')
console.log(numArray, strArray)
