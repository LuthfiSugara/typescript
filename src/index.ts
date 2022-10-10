// Basic Types
let id: number = 5
let company: string = 'Luthfi Sugara'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'luthfi', true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'luthfi'],
    [2, 'rizki'],
    [3, 'tony'],
]

// union
let pid: string | number
pid = 22 // '22'

// Enum
enum Direction1{
    Up, 
    Down,
    Right,
    Left
}
console.log(Direction1.Up);

enum Direction2{
    Up = 'Up', 
    Down = 'Down',
    Right = 'Right',
    Left = 'Left'
}
console.log(Direction2.Up);


// Onjects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'luthfi'
}

// TYpe Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number{
    return x + y
}

// Void
function log(message: string | number): void{
    console.log(message)
}
log('success')

// Interfaces
interface UserInterface {
    id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'luthfi'
}

interface mathFunc{
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y
const sub: mathFunc = (x: number, y: number): number => x - y 

// Class
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is new registered`
    }
}

const luthfi = new Person(1, 'luhtfi')
console.log(luthfi);

// Subclasses
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'luthfi', 'Developer')
console.log(emp)

// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['luthfi', 'sugara'])

// numArray.push('hello')