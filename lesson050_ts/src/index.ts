// never

import { type } from "os";

// enum Size {
//     S,
//     M,
//     XL,
//     XS
// }

// let size: Size = Size.M;

// const NOSKI_SIZES = {
//     S: 'S',
//     L: 'L',
//     XS: 'XS',
//     XL: 'XL',
//     M: 'M'
// };



// function type
// type aliases, interface
// arrays, tuples
// duck


// type aliases
// type Person = {
//     name: string,
//     age: number,
//     city: string,
    // status: 'admin' | 'user' | 'none'
// }

// const john : Person = {
//     name: 'John',
//     age: 22,
//     city: 'Boston'
// }

// const peter : Person = {
//     name: 'Peter',
//     age: 23,
//     city: 'Gomel'
// }

// const valerchik = {
//     userName: 2,
//     vozrast: false
// }

// const arr : Person[] = [john, peter, valerchik]


// tuples
// const arr: [number, string, boolean] = [2, 'hello', false]
// arr.push(99)
// console.log(arr)


// arrays
// const arr: (number | string)[] = ['hello','world',3,6]


// двумерный массив
// const arr: number[][] = [[2,3], [5,4]]

// const func = (arr: number[]) => {
// }

// const arr: Array<number> = [2,3,4]
// const arr2: number[] = [2,3,4]




// void
// const func = (a: number) => {
//     console.log(a ** 2)
// }
// func(3)


// const a = 2
// const b = 3

// const res = a < b ? 'hello' : 'goodbye'

// const func = (a: number) => {
//     if(Math.random() > 0.5) {
//         throw new Error('some custom error')
//     } else {
//         return 2
//     }
// }


// const add = (a: number, b: number): number => {
//     return a + b
// }

// const add1 : (a: number, b: string) => number = (a,b) => {
//     return Number(a + b)
// }

// ? - аргумент может существовать(или нет)
// const add2 = (a: number, b?: number): number => {
//     if(b) {
//         return Number(a + b)
//     } else {
//         return a * 2
//     }
// }

// const res = add(1,3)