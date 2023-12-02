// testing

// Type Aliases: Creating our own Type

// type Employee ={
//     readonly id: number,
//     name: string,
//     isAdmin?: boolean
// }
// let dylanProfile: Employee ={
//     id: 0,
//     name: 'dylan k.'
// }
// // Union Types: Can allow a variable to be one of many types (number | string)
// // TypeScript Arrow Function
// const kgToLbs = (weight: (number | string)): number =>{
//     if (typeof weight === 'string'){
//         return parseInt(weight)*2.2
//     }
//     return weight *2.2
// }
// console.log(kgToLbs(95))



// Literal Types (exact)

let  quantity: (25 | 50 | 75 | 100) = 50

// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
let mph: number | null = 25
mph = 53
let ride = {
    // falsy values =null, undefined, o, '', false
    currentSpeed: mph ?? null
}
console.log(ride)

// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
// const inputEl = document.getElementById("#input") as HTMLInputElement
// inputEl.value


// Creating Classes
class Cohort{
    readonly id: number
    private name:string
    number: number

    constructor(cohortId: number, cohortName: string, cohortNumber:number){
        this.id = cohortId,
        this.name = cohortName,
        this.number = cohortNumber
    }

    printInfo = (): string => {
        return `This is cohort: ${this.name}-${this.number}`
    }

    printName = (): string => {
        return this.name
    }

}

const thieves = new Cohort(0, 'thieves', 133)
console.log(thieves.printInfo())

// private properties and accessing them
console.log(thieves.printName())


// typeof vs instanceof
console.log(thieves instanceof  Cohort)




// Building a class with parameter properties: Preferred way
class Team {
    constructor(
        public readonly id: number, 
        private _name: string, 
        public city: string){}

    printInfo = (): string =>{
        return `The ${this._name} are from ${this.city}`
    }
}

const eagles = new Team(1, 'eagles', 'philly')
console.log(eagles.printInfo())

// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/


// interface MUST be an object

interface Player{
    playerName: string,
    playerNumber?: number
}
 class Team2 implements Player{
    constructor(
        public readonly id: number,
        private _name: string,
        public city: string,
        public playerName:string

    ){}

    printInfo = (): string => {
        return `${this.playerName} plays for the ${this.city} ${this._name}`
    }
 }
const bulls = new Team2(2, 'bulls', 'chicago', 'michael jordan')
console.log(bulls.printInfo())



// Homework

// 1. Given the data below, define a type alias for representing users.
type User = {
    name: string;
    age: number;
    company?: string; 
};
let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

let today: DayOfWeek = 'Monday';


// 3. Given the Person class below, create a getter for getting the full name of a person.
// class Person {
//     constructor(
//         public firstName:string, 
//         public lastName:string) {}

//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//  }
    

//     let person = new Person('heather', 'smallwood');
//     console.log(person.fullName); 


// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}

//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Employee extends Person {
//     constructor(
//         public _firstName: string,
//         public _lastName: string,
//         public salary: number 
//     ) {
//         super(_firstName, _lastName);
//     }
// }


// let employee = new Employee('Heather', 'Smallwood', 130000);
// console.log(employee.fullName); 
// console.log(employee.salary);   




// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
// let employee = {
//     name:'Christian Askew',
//     salary:1_000_000,
//     address:{
//         street:'Thieves st',
//         city:'Seattle',
//         zipCode: 98101
//     }
// };

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}


let employee: Employee = {
    name: 'Christian Askew',
    salary: 1_000_000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
