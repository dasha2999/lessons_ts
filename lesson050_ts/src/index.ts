// без webpack можно селать nmp tsc -w
// настройка webpack medium.com
// чтобы добавить modul: npm install


// ts самонастраивающийся язык
// типы : типом может все что угодно
//  когда константа, то тип может быть то что написано после = , и оно же может быть типом по определению для let , делая из нее константу и это должно быть обосновано, делается это с помощью as  и называется кастовать

// 'any' лучше не использовать, потому что он как бы отключает  ts и включает js(динамически типизирован)

// типы через |  называется юнион как бы общий
// let userStatus: 'admin' | 'user' | 'none'='admin';
// тогда можно только из этих вариантов

// let user=undefined;
// тип unknow не дает видеть подсказки (методы, например), потому что не знает тип
// unknow можно испольовать только когда проверишь тип с помощью if

// let a:any='Kell'
// console.log(a.togiii())//можно писать всякую фигню

// тип enum тип перчисления
// const SIZIS={
//     S:'S',
//     L:'L',
//     XS:'XS',
//     XL:'XL',
//     M:'M'

// }

// enum Size{
//     S,
//     L,
//     XS,
//     XL,
//     M
// }
// let size: Size=Size.S


// function types
// type aliases,interface
// never|void
// arrays, tules
// duck


// const add=(a:number,b:string)=>{
//     return a+
// }
// другой синтаксис
// const add:(a:number,b:string)=>number=(a,b)=>{
//     return a+b
// }
// yне лучший вариант
// const res=add(1,'as');
// знак ? после переменной означает, что аргумет может существовать, а может нет
// const add=(a:number,b?:string)=>{
//     return a+b
// }
// const res=add(1)

// const func=(a:number)=>{
//     throw new Error('some custom error')
// }
// тип функции never, потому что нет return
// между never и любым другим типом вернет вседа другой тип


// const c=2;
// const d=3;
// const result =c<d ? 'hello':'goodbye'

//----------------------------------------------------------------------------

// тип void
// void помечает результат функции у которой нет return
// const func = (a:number) =>{
//     console.log(a**2)
// }

// const res=func(3);
// console.log(res)

//-----------------------------------------------------------------------------

// arrays
// 1)
// если одного типа
// const arr: number[]=[2,3,4];

// const func=(arr:number[])=>{

// }

// если разного типа
// const arr: (number|string)[]=['as','ae',3,2]


// двухмерный массив
// const arr: (number|string)[][]=[[1,0],['sd',1]];

// 2)
// через дженерик
// const arr2:Array<number>=[2,3,4];
// предпочтительно первый


// tuple или кортеж(массив со строгоопределенным количеством элеметнов и строгоопределенного типа)
// const arr: [number,string, boolean]=[2,'as',true];

// arr.push(99); //ошибка typescripta
// console.log(arr)

//--------------------------------------------------------------------------

// aliases

// const jhon={
//     name:'Jhon',
//     age:22,
//     city:'Boston'
// }
// если нужно много однотипных объектов

// type Person ={
//     name:string
//     age:number
//     city: string
    // status: 'admin'|'user'|'none';  можно добавить
    // rograminSscills?: string[] -? означает, что поле может отсутствовать(опциональное)
    // run;(destination:string)=>void //или
    // walk():void
// }
// Person это тип (описание). Обратиться к полям нельзя
// и тогда

// const peter:Person={
//     name:'Peter',
//     age:28,
//     city:'Gomel'
// }
// const valerchik={
//     username: 2,
//     name:'valerchik',
//     age:32,
//     city: 'Buda'
// }

// const arr:Person[]=[jhon,peter,valerchik];
// и даже если добавить правильные поля , typescript примет его это называется утиной типизацией duck

//--------------------------------------------------------------------------

// interface

// буква I по договоренности
// interface IAnimal {
    // paws:number;
    // hasTail:boolean
    // run? ():void //поля в и нтерфейсе можно делать опциональными
//     walk?: (destination:string)=>void//или
// }

// const cat: IAnimal={
//     animalName: 'Murzik',
//     hasTail:true,
//     paws:4,
//     run() {},
//     walk() {},
// }
// отличия между интерфейсом и типом

// Если переопределить тип, то выдаст ошибкую Так делать нельзя

// interface IAnimal {
//     animalName: string
// }
// А  интерфейс объединяет два или несколько объявлений, расширяясь


// Union intersection for type

// для простых понятно number|string
// для сложных должно удовлетворять хотя бы одному типу полностью, остальные свойства по выбору

//--------------------------------------------------------------------

// UNION
// type Car ={
//     model: string
//     engineVol:number
// };

// type Moped={
//     hasSeat:boolean
//     wheels:number
// }

// с интерфейсом работает точно также

// interface Car {
//     model: string
//     engineVol:number
// };

// лучше испольовать или то или то
// type Moped ={
//     hasSeat:boolean
//     wheels:number
// }
// type CaroMoped=Car|Moped;

// const buggle:CaroMoped = {
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false
// }


//  in  бинарный строка in объект проверяет наличие поля строка в объекте, а если нет, идет дальше в прототип 
// function showModel (obj: CaroMoped){
//     if ('model' in obj){
//         console.log(obj)
//     } else {
//         console.log(obj)
//     }
// }
// функция-предикат возвращает булево значение


// function showModel (obj: CaroMoped){
//     if (isCar(obj)){
//         console.log(obj)
//     } else {
//         console.log(obj)
//     }
// }

//-------------------------------------------------------------------------

// Intersection
// должны присутствовать все поля

// type Car ={
//     price: number
//     model: string
//     engineVol:number
// };

// type Moped={
//     // price: string
//     hasSeat:boolean
//     wheels:number
// }

// type CaroMoped= Car & Moped;

// const buggle:CaroMoped = {
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false,
//     wheels: 2,
//     price:2
// }

// const isCar = (val:CaroMoped) : val is Car =>{
//     return 'model' in val // проверить на тип
// } 

// если два поля одинаковые пишется один раз, а если они разного типа, то выдает ошибку type never.
// тогда в предикате нужно проверять не только наличие поля, но его typeOf

// для интерфейсов валидно union и Intersection

// interface ILodka {
//     vesla: number
// }

// interface IShip {
//     height: number,
//     width: number,
// }

// interface ISwimmingShip extends IShip, ILodka{
//     swim() : void,
// }

// const obj: ISwimmingShip = {
//     vesla: 2,
//     swim: () => {},
//     height: 2,
//     width: 1
// }

//--------------------------------

// keyof typeof

// interface IUser {
//     name: string,
//     age: number
// }

// type Smth = keyof IUser
// Smth - тип, для какого-нибудь поля User

// const key: Smth = 'age'

// const user: IUser = {
//     age: 21,
//     name: 'John'
// }

// console.log(user[key])


//------------------------------

// typeof - возвращает тип

// const person = {
//     name: 'Peter',
//     age: 18,
//     stack: [3,4,5,6]
// }

// type Person = typeof person

// должны быть такие же поля
// const person2: Person = {
//     userName: 'Valera',
//     city: 'Gomel',
//     stack: [2,3,4]
// }

// получение ключей из неизвестного объекта
// const person = {
//     name: 'Peter',
//     age: 18,
//     stack: [3,4,5,6]
// }

// type PersonKey = keyof typeof person

// const key: PersonKey = 'stack'

// person[key]

//------------------------------

// сервисные типы
// ReturnType - очень часто
// Parameters - редко
// Omit
// Pick
// Partial

// type Person = Omit<Programmer, 'stack' | 'amountOfVygoranye'> // используется для исключения полей
// type Person2 = Pick<Programmer, 'age' | 'name'> // используется для выбора конкретных полей
// type Person3 = Partial<Programmer> // делает все поля опциональными
// type Person4 = Required<Programmer> // делает все поля обязательными


// function add (a: number, b: number) {
//     return a + b
// }

// мы не знаем, что возращаем
// type A = ReturnType<typeof add>
// type B = Parameters<typeof add>

// add(...smth)

// type Programmer = {
//     name: string,
//     age: number,
//     stack: string[]
//     amountOfVygoranye: number
// }


//----------------------------------

// Promise

// new Promise<number>((res) => {
//     res(2)
// }).then((val) => {

// })

//------------------------------------

// дженерик

// interface IPerson<T> {
//     name: string
//     age: number
//     job: string
    // skills: [string | {tech: string, expYears: number} | {zernoType: string, usedPechka: boolean}] // - плохое решение 
//     skills: T[]
// }

// person1.skills.forEach(() => {})

// const person1: IPerson<{tech: string, expYears: number}> = {
//     name: 'John',
//     age: 23,
//     job: 'Programmer',
//     skills: [{tech: 'CSS', expYears: 2}, {tech: 'HTML', expYears: 4}]
// }

// const person2: IPerson<{zernoType: string, usedPechka: boolean}> = {
//     name: 'Valerchik',
//     age: 18,
//     job: 'Pekar',
//     skills: [{zernoType: 'Psheno', usedPechka: true}, {zernoType: 'Oves', usedPechka: false}]
// }

// const person3: IPerson = {
//     name: 'Oleg',
//     age: 15,
//     job: 'Shkolnik',
//     skills: ['dota2', 'tiktok']
// }


//-------------------------------------

// function - дженерик 

// function mergeObj2 <T> (a: T) {}  

// const kot = {
//     klichka: 'Murzik',
//     isShalun: true
// }

// const pes = {
//     petName: 'Bobik',
//     speed: 3
// }

// const zhiraff = {
//     sheya: 200,
//     nogi: 1
// }

// const mergeObj = (obj1: typeof kot obj2: typeof pes) => {
//         return Object.assign(obj1, obj2)
// }

// const mergeObj = <T, U>(obj1: T, obj2: U) => {
//     return Object.assign(obj1 as object, obj2)
// }

// const mergeObj = <T , U> (obj1: T, obj2: U): T & U => {
//     return Object.assign(obj1 as {} & T, obj2)
// }

// const mergeObj = <T extends object, U extends object> (obj1: T, obj2: U): T & U => {
//     return Object.assign(obj1 ,obj2)
// }

// const kotoPes = mergeObj(kot, pes)

// kotoPes.

// const kotZhiraff = mergeObj(kot, zhiraff) 

// const result = mergeObj()

// const kotoPes = mergeObj<typeof kot, typeof pes>(kot, pes)

// const mergeObj = <T>(obj1, obj2) => {
//     return Object.assign(obj1, obj2)
// }

// const res = mergeObj({a:1}, {b: false})


// const raiseByOne = <T extends object, U extends keyof T> (obj: T, key: U) => {
//     if(typeof obj[key] === 'number') {
//         return { ...obj, [key]: (obj[key] as number) + 1} // zhraff['nogi']
//     }
// }

// raiseByOne(zhiraff, 'nogi')


//---------------------------

// classes

// class Person {
    // userName: string
    // age: number
    // city: string
    // protected // - становится доступен только в классе
    // private // - доступно только в пределах класса
//     isProgrammer = false 

//     constructor (public userName: string, public age: number, public city: string) {
//         this.userName = userName        
//         this.age = age
//         this.city = city   
//     }
// }

// let p1 = new Person('Oleg', 2, 'Gomel')

// class FootballPlayer extends Person {
//     medals: number

//     constructor (medals: number, ...args: [string,number, string]) {
//         super(...args)
//         this.medals = medals
//         this.isProgrammer = false
//     }
// }

// let fb1 = new FootballPlayer(2, 'Peter', 12, 'Volotova')

// fb1.isProgrammer = true

