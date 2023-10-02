/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

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
//---------------------------------------------------------------------------------
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
//--------------------------------------------------------------
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
// сервисные типы
// ReturnType - очень часто
// Parameters - редко
// Omit
// Pick
// Partial
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
// type Person = Omit<Programmer, 'stack' | 'amountOfVygoranye'> // используется для исключения полей
// type Person2 = Pick<Programmer, 'age' | 'name'> // используется для выбора конкретных полей
// type Person3 = Partial<Programmer> // делает все поля опциональными
// type Person4 = Required<Programmer> // делает все поля обязательными
//----------------------------------------------------------
// Promise
// new Promise<number>((res) => {
//     res(2)
// }).then((val) => {
// })

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQsdC10Lcgd2VicGFjayDQvNC+0LbQvdC+INGB0LXQu9Cw0YLRjCBubXAgdHNjIC13XHJcbi8vINC90LDRgdGC0YDQvtC50LrQsCB3ZWJwYWNrIG1lZGl1bS5jb21cclxuLy8g0YfRgtC+0LHRiyDQtNC+0LHQsNCy0LjRgtGMIG1vZHVsOiBucG0gaW5zdGFsbFxyXG5cclxuXHJcbi8vIHRzINGB0LDQvNC+0L3QsNGB0YLRgNCw0LjQstCw0Y7RidC40LnRgdGPINGP0LfRi9C6XHJcbi8vINGC0LjQv9GLIDog0YLQuNC/0L7QvCDQvNC+0LbQtdGCINCy0YHQtSDRh9GC0L4g0YPQs9C+0LTQvdC+XHJcbi8vICDQutC+0LPQtNCwINC60L7QvdGB0YLQsNC90YLQsCwg0YLQviDRgtC40L8g0LzQvtC20LXRgiDQsdGL0YLRjCDRgtC+INGH0YLQviDQvdCw0L/QuNGB0LDQvdC+INC/0L7RgdC70LUgPSAsINC4INC+0L3QviDQttC1INC80L7QttC10YIg0LHRi9GC0Ywg0YLQuNC/0L7QvCDQv9C+INC+0L/RgNC10LTQtdC70LXQvdC40Y4g0LTQu9GPIGxldCAsINC00LXQu9Cw0Y8g0LjQtyDQvdC10LUg0LrQvtC90YHRgtCw0L3RgtGDINC4INGN0YLQviDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L7QsdC+0YHQvdC+0LLQsNC90L4sINC00LXQu9Cw0LXRgtGB0Y8g0Y3RgtC+INGBINC/0L7QvNC+0YnRjNGOIGFzICDQuCDQvdCw0LfRi9Cy0LDQtdGC0YHRjyDQutCw0YHRgtC+0LLQsNGC0YxcclxuXHJcbi8vICdhbnknINC70YPRh9GI0LUg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwsINC/0L7RgtC+0LzRgyDRh9GC0L4g0L7QvSDQutCw0Log0LHRiyDQvtGC0LrQu9GO0YfQsNC10YIgIHRzINC4INCy0LrQu9GO0YfQsNC10YIganMo0LTQuNC90LDQvNC40YfQtdGB0LrQuCDRgtC40L/QuNC30LjRgNC+0LLQsNC9KVxyXG5cclxuLy8g0YLQuNC/0Ysg0YfQtdGA0LXQtyB8ICDQvdCw0LfRi9Cy0LDQtdGC0YHRjyDRjtC90LjQvtC9INC60LDQuiDQsdGLINC+0LHRidC40LlcclxuLy8gbGV0IHVzZXJTdGF0dXM6ICdhZG1pbicgfCAndXNlcicgfCAnbm9uZSc9J2FkbWluJztcclxuLy8g0YLQvtCz0LTQsCDQvNC+0LbQvdC+INGC0L7Qu9GM0LrQviDQuNC3INGN0YLQuNGFINCy0LDRgNC40LDQvdGC0L7QslxyXG5cclxuLy8gbGV0IHVzZXI9dW5kZWZpbmVkO1xyXG4vLyDRgtC40L8gdW5rbm93INC90LUg0LTQsNC10YIg0LLQuNC00LXRgtGMINC/0L7QtNGB0LrQsNC30LrQuCAo0LzQtdGC0L7QtNGLLCDQvdCw0L/RgNC40LzQtdGAKSwg0L/QvtGC0L7QvNGDINGH0YLQviDQvdC1INC30L3QsNC10YIg0YLQuNC/XHJcbi8vIHVua25vdyDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC+0LLQsNGC0Ywg0YLQvtC70YzQutC+INC60L7Qs9C00LAg0L/RgNC+0LLQtdGA0LjRiNGMINGC0LjQvyDRgSDQv9C+0LzQvtGJ0YzRjiBpZlxyXG5cclxuLy8gbGV0IGE6YW55PSdLZWxsJ1xyXG4vLyBjb25zb2xlLmxvZyhhLnRvZ2lpaSgpKS8v0LzQvtC20L3QviDQv9C40YHQsNGC0Ywg0LLRgdGP0LrRg9GOINGE0LjQs9C90Y5cclxuXHJcbi8vINGC0LjQvyBlbnVtINGC0LjQvyDQv9C10YDRh9C40YHQu9C10L3QuNGPXHJcbi8vIGNvbnN0IFNJWklTPXtcclxuLy8gICAgIFM6J1MnLFxyXG4vLyAgICAgTDonTCcsXHJcbi8vICAgICBYUzonWFMnLFxyXG4vLyAgICAgWEw6J1hMJyxcclxuLy8gICAgIE06J00nXHJcblxyXG4vLyB9XHJcblxyXG4vLyBlbnVtIFNpemV7XHJcbi8vICAgICBTLFxyXG4vLyAgICAgTCxcclxuLy8gICAgIFhTLFxyXG4vLyAgICAgWEwsXHJcbi8vICAgICBNXHJcbi8vIH1cclxuLy8gbGV0IHNpemU6IFNpemU9U2l6ZS5TXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdHlwZXNcclxuLy8gdHlwZSBhbGlhc2VzLGludGVyZmFjZVxyXG4vLyBuZXZlcnx2b2lkXHJcbi8vIGFycmF5cywgdHVsZXNcclxuLy8gZHVja1xyXG5cclxuXHJcbi8vIGNvbnN0IGFkZD0oYTpudW1iZXIsYjpzdHJpbmcpPT57XHJcbi8vICAgICByZXR1cm4gYStcclxuLy8gfVxyXG4vLyDQtNGA0YPQs9C+0Lkg0YHQuNC90YLQsNC60YHQuNGBXHJcbi8vIGNvbnN0IGFkZDooYTpudW1iZXIsYjpzdHJpbmcpPT5udW1iZXI9KGEsYik9PntcclxuLy8gICAgIHJldHVybiBhK2JcclxuLy8gfVxyXG4vLyB50L3QtSDQu9GD0YfRiNC40Lkg0LLQsNGA0LjQsNC90YJcclxuLy8gY29uc3QgcmVzPWFkZCgxLCdhcycpO1xyXG4vLyDQt9C90LDQuiA/INC/0L7RgdC70LUg0L/QtdGA0LXQvNC10L3QvdC+0Lkg0L7Qt9C90LDRh9Cw0LXRgiwg0YfRgtC+INCw0YDQs9GD0LzQtdGCINC80L7QttC10YIg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMLCDQsCDQvNC+0LbQtdGCINC90LXRglxyXG4vLyBjb25zdCBhZGQ9KGE6bnVtYmVyLGI/OnN0cmluZyk9PntcclxuLy8gICAgIHJldHVybiBhK2JcclxuLy8gfVxyXG4vLyBjb25zdCByZXM9YWRkKDEpXHJcblxyXG4vLyBjb25zdCBmdW5jPShhOm51bWJlcik9PntcclxuLy8gICAgIHRocm93IG5ldyBFcnJvcignc29tZSBjdXN0b20gZXJyb3InKVxyXG4vLyB9XHJcbi8vINGC0LjQvyDRhNGD0L3QutGG0LjQuCBuZXZlciwg0L/QvtGC0L7QvNGDINGH0YLQviDQvdC10YIgcmV0dXJuXHJcbi8vINC80LXQttC00YMgbmV2ZXIg0Lgg0LvRjtCx0YvQvCDQtNGA0YPQs9C40Lwg0YLQuNC/0L7QvCDQstC10YDQvdC10YIg0LLRgdC10LTQsCDQtNGA0YPQs9C+0Lkg0YLQuNC/XHJcblxyXG5cclxuLy8gY29uc3QgYz0yO1xyXG4vLyBjb25zdCBkPTM7XHJcbi8vIGNvbnN0IHJlc3VsdCA9YzxkID8gJ2hlbGxvJzonZ29vZGJ5ZSdcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8g0YLQuNC/IHZvaWRcclxuLy8gdm9pZCDQv9C+0LzQtdGH0LDQtdGCINGA0LXQt9GD0LvRjNGC0LDRgiDRhNGD0L3QutGG0LjQuCDRgyDQutC+0YLQvtGA0L7QuSDQvdC10YIgcmV0dXJuXHJcbi8vIGNvbnN0IGZ1bmMgPSAoYTpudW1iZXIpID0+e1xyXG4vLyAgICAgY29uc29sZS5sb2coYSoqMilcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcmVzPWZ1bmMoMyk7XHJcbi8vIGNvbnNvbGUubG9nKHJlcylcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGFycmF5c1xyXG4vLyAxKVxyXG4vLyDQtdGB0LvQuCDQvtC00L3QvtCz0L4g0YLQuNC/0LBcclxuLy8gY29uc3QgYXJyOiBudW1iZXJbXT1bMiwzLDRdO1xyXG5cclxuLy8gY29uc3QgZnVuYz0oYXJyOm51bWJlcltdKT0+e1xyXG5cclxuLy8gfVxyXG5cclxuLy8g0LXRgdC70Lgg0YDQsNC30L3QvtCz0L4g0YLQuNC/0LBcclxuLy8gY29uc3QgYXJyOiAobnVtYmVyfHN0cmluZylbXT1bJ2FzJywnYWUnLDMsMl1cclxuXHJcblxyXG4vLyDQtNCy0YPRhdC80LXRgNC90YvQuSDQvNCw0YHRgdC40LJcclxuLy8gY29uc3QgYXJyOiAobnVtYmVyfHN0cmluZylbXVtdPVtbMSwwXSxbJ3NkJywxXV07XHJcblxyXG4vLyAyKVxyXG4vLyDRh9C10YDQtdC3INC00LbQtdC90LXRgNC40LpcclxuLy8gY29uc3QgYXJyMjpBcnJheTxudW1iZXI+PVsyLDMsNF07XHJcbi8vINC/0YDQtdC00L/QvtGH0YLQuNGC0LXQu9GM0L3QviDQv9C10YDQstGL0LlcclxuXHJcblxyXG4vLyB0dXBsZSDQuNC70Lgg0LrQvtGA0YLQtdC2KNC80LDRgdGB0LjQsiDRgdC+INGB0YLRgNC+0LPQvtC+0L/RgNC10LTQtdC70LXQvdC90YvQvCDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INGN0LvQtdC80LXRgtC90L7QsiDQuCDRgdGC0YDQvtCz0L7QvtC/0YDQtdC00LXQu9C10L3QvdC+0LPQviDRgtC40L/QsClcclxuLy8gY29uc3QgYXJyOiBbbnVtYmVyLHN0cmluZywgYm9vbGVhbl09WzIsJ2FzJyx0cnVlXTtcclxuXHJcbi8vIGFyci5wdXNoKDk5KTsgLy/QvtGI0LjQsdC60LAgdHlwZXNjcmlwdGFcclxuLy8gY29uc29sZS5sb2coYXJyKVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gYWxpYXNlc1xyXG5cclxuLy8gY29uc3Qgamhvbj17XHJcbi8vICAgICBuYW1lOidKaG9uJyxcclxuLy8gICAgIGFnZToyMixcclxuLy8gICAgIGNpdHk6J0Jvc3RvbidcclxuLy8gfVxyXG4vLyDQtdGB0LvQuCDQvdGD0LbQvdC+INC80L3QvtCz0L4g0L7QtNC90L7RgtC40L/QvdGL0YUg0L7QsdGK0LXQutGC0L7QslxyXG5cclxuLy8gdHlwZSBQZXJzb24gPXtcclxuLy8gICAgIG5hbWU6c3RyaW5nXHJcbi8vICAgICBhZ2U6bnVtYmVyXHJcbi8vICAgICBjaXR5OiBzdHJpbmdcclxuICAgIC8vIHN0YXR1czogJ2FkbWluJ3wndXNlcid8J25vbmUnOyAg0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICAvLyByb2dyYW1pblNzY2lsbHM/OiBzdHJpbmdbXSAtPyDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0L/QvtC70LUg0LzQvtC20LXRgiDQvtGC0YHRg9GC0YHRgtCy0L7QstCw0YLRjCjQvtC/0YbQuNC+0L3QsNC70YzQvdC+0LUpXHJcbiAgICAvLyBydW47KGRlc3RpbmF0aW9uOnN0cmluZyk9PnZvaWQgLy/QuNC70LhcclxuICAgIC8vIHdhbGsoKTp2b2lkXHJcbi8vIH1cclxuLy8gUGVyc29uINGN0YLQviDRgtC40L8gKNC+0L/QuNGB0LDQvdC40LUpLiDQntCx0YDQsNGC0LjRgtGM0YHRjyDQuiDQv9C+0LvRj9C8INC90LXQu9GM0LfRj1xyXG4vLyDQuCDRgtC+0LPQtNCwXHJcblxyXG4vLyBjb25zdCBwZXRlcjpQZXJzb249e1xyXG4vLyAgICAgbmFtZTonUGV0ZXInLFxyXG4vLyAgICAgYWdlOjI4LFxyXG4vLyAgICAgY2l0eTonR29tZWwnXHJcbi8vIH1cclxuLy8gY29uc3QgdmFsZXJjaGlrPXtcclxuLy8gICAgIHVzZXJuYW1lOiAyLFxyXG4vLyAgICAgbmFtZTondmFsZXJjaGlrJyxcclxuLy8gICAgIGFnZTozMixcclxuLy8gICAgIGNpdHk6ICdCdWRhJ1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhcnI6UGVyc29uW109W2pob24scGV0ZXIsdmFsZXJjaGlrXTtcclxuLy8g0Lgg0LTQsNC20LUg0LXRgdC70Lgg0LTQvtCx0LDQstC40YLRjCDQv9GA0LDQstC40LvRjNC90YvQtSDQv9C+0LvRjyAsIHR5cGVzY3JpcHQg0L/RgNC40LzQtdGCINC10LPQviDRjdGC0L4g0L3QsNC30YvQstCw0LXRgtGB0Y8g0YPRgtC40L3QvtC5INGC0LjQv9C40LfQsNGG0LjQtdC5IGR1Y2tcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGludGVyZmFjZVxyXG5cclxuLy8g0LHRg9C60LLQsCBJINC/0L4g0LTQvtCz0L7QstC+0YDQtdC90L3QvtGB0YLQuFxyXG4vLyBpbnRlcmZhY2UgSUFuaW1hbCB7XHJcbiAgICAvLyBwYXdzOm51bWJlcjtcclxuICAgIC8vIGhhc1RhaWw6Ym9vbGVhblxyXG4gICAgLy8gcnVuPyAoKTp2b2lkIC8v0L/QvtC70Y8g0LIg0Lgg0L3RgtC10YDRhNC10LnRgdC1INC80L7QttC90L4g0LTQtdC70LDRgtGMINC+0L/RhtC40L7QvdCw0LvRjNC90YvQvNC4XHJcbi8vICAgICB3YWxrPzogKGRlc3RpbmF0aW9uOnN0cmluZyk9PnZvaWQvL9C40LvQuFxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBjYXQ6IElBbmltYWw9e1xyXG4vLyAgICAgYW5pbWFsTmFtZTogJ011cnppaycsXHJcbi8vICAgICBoYXNUYWlsOnRydWUsXHJcbi8vICAgICBwYXdzOjQsXHJcbi8vICAgICBydW4oKSB7fSxcclxuLy8gICAgIHdhbGsoKSB7fSxcclxuLy8gfVxyXG4vLyDQvtGC0LvQuNGH0LjRjyDQvNC10LbQtNGDINC40L3RgtC10YDRhNC10LnRgdC+0Lwg0Lgg0YLQuNC/0L7QvFxyXG5cclxuLy8g0JXRgdC70Lgg0L/QtdGA0LXQvtC/0YDQtdC00LXQu9C40YLRjCDRgtC40L8sINGC0L4g0LLRi9C00LDRgdGCINC+0YjQuNCx0LrRg9GOINCi0LDQuiDQtNC10LvQsNGC0Ywg0L3QtdC70YzQt9GPXHJcblxyXG4vLyBpbnRlcmZhY2UgSUFuaW1hbCB7XHJcbi8vICAgICBhbmltYWxOYW1lOiBzdHJpbmdcclxuLy8gfVxyXG4vLyDQkCAg0LjQvdGC0LXRgNGE0LXQudGBINC+0LHRitC10LTQuNC90Y/QtdGCINC00LLQsCDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC+INC+0LHRitGP0LLQu9C10L3QuNC5LCDRgNCw0YHRiNC40YDRj9GP0YHRjFxyXG5cclxuXHJcbi8vIFVuaW9uIGludGVyc2VjdGlvbiBmb3IgdHlwZVxyXG5cclxuLy8g0LTQu9GPINC/0YDQvtGB0YLRi9GFINC/0L7QvdGP0YLQvdC+IG51bWJlcnxzdHJpbmdcclxuLy8g0LTQu9GPINGB0LvQvtC20L3Ri9GFINC00L7Qu9C20L3QviDRg9C00L7QstC70LXRgtCy0L7RgNGP0YLRjCDRhdC+0YLRjyDQsdGLINC+0LTQvdC+0LzRgyDRgtC40L/RgyDQv9C+0LvQvdC+0YHRgtGM0Y4sINC+0YHRgtCw0LvRjNC90YvQtSDRgdCy0L7QudGB0YLQstCwINC/0L4g0LLRi9Cx0L7RgNGDXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBVTklPTlxyXG4vLyB0eXBlIENhciA9e1xyXG4vLyAgICAgbW9kZWw6IHN0cmluZ1xyXG4vLyAgICAgZW5naW5lVm9sOm51bWJlclxyXG4vLyB9O1xyXG5cclxuLy8gdHlwZSBNb3BlZD17XHJcbi8vICAgICBoYXNTZWF0OmJvb2xlYW5cclxuLy8gICAgIHdoZWVsczpudW1iZXJcclxuLy8gfVxyXG5cclxuLy8g0YEg0LjQvdGC0LXRgNGE0LXQudGB0L7QvCDRgNCw0LHQvtGC0LDQtdGCINGC0L7Rh9C90L4g0YLQsNC60LbQtVxyXG5cclxuLy8gaW50ZXJmYWNlIENhciB7XHJcbi8vICAgICBtb2RlbDogc3RyaW5nXHJcbi8vICAgICBlbmdpbmVWb2w6bnVtYmVyXHJcbi8vIH07XHJcblxyXG4vLyDQu9GD0YfRiNC1INC40YHQv9C+0LvRjNC+0LLQsNGC0Ywg0LjQu9C4INGC0L4g0LjQu9C4INGC0L5cclxuLy8gdHlwZSBNb3BlZCA9e1xyXG4vLyAgICAgaGFzU2VhdDpib29sZWFuXHJcbi8vICAgICB3aGVlbHM6bnVtYmVyXHJcbi8vIH1cclxuLy8gdHlwZSBDYXJvTW9wZWQ9Q2FyfE1vcGVkO1xyXG5cclxuLy8gY29uc3QgYnVnZ2xlOkNhcm9Nb3BlZCA9IHtcclxuLy8gICAgIG1vZGVsOiAnc2htdWdneScsXHJcbi8vICAgICBlbmdpbmVWb2w6IDIwMDAsXHJcbi8vICAgICBoYXNTZWF0OiBmYWxzZVxyXG4vLyB9XHJcblxyXG5cclxuLy8gIGluICDQsdC40L3QsNGA0L3Ri9C5INGB0YLRgNC+0LrQsCBpbiDQvtCx0YrQtdC60YIg0L/RgNC+0LLQtdGA0Y/QtdGCINC90LDQu9C40YfQuNC1INC/0L7Qu9GPINGB0YLRgNC+0LrQsCDQsiDQvtCx0YrQtdC60YLQtSwg0LAg0LXRgdC70Lgg0L3QtdGCLCDQuNC00LXRgiDQtNCw0LvRjNGI0LUg0LIg0L/RgNC+0YLQvtGC0LjQvyBcclxuLy8gZnVuY3Rpb24gc2hvd01vZGVsIChvYmo6IENhcm9Nb3BlZCl7XHJcbi8vICAgICBpZiAoJ21vZGVsJyBpbiBvYmope1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9iailcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cob2JqKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vINGE0YPQvdC60YbQuNGPLdC/0YDQtdC00LjQutCw0YIg0LLQvtC30LLRgNCw0YnQsNC10YIg0LHRg9C70LXQstC+INC30L3QsNGH0LXQvdC40LVcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBzaG93TW9kZWwgKG9iajogQ2Fyb01vcGVkKXtcclxuLy8gICAgIGlmIChpc0NhcihvYmopKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhvYmopXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9iailcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBJbnRlcnNlY3Rpb25cclxuLy8g0LTQvtC70LbQvdGLINC/0YDQuNGB0YPRgtGB0YLQstC+0LLQsNGC0Ywg0LLRgdC1INC/0L7Qu9GPXHJcblxyXG4vLyB0eXBlIENhciA9e1xyXG4vLyAgICAgcHJpY2U6IG51bWJlclxyXG4vLyAgICAgbW9kZWw6IHN0cmluZ1xyXG4vLyAgICAgZW5naW5lVm9sOm51bWJlclxyXG4vLyB9O1xyXG5cclxuLy8gdHlwZSBNb3BlZD17XHJcbi8vICAgICAvLyBwcmljZTogc3RyaW5nXHJcbi8vICAgICBoYXNTZWF0OmJvb2xlYW5cclxuLy8gICAgIHdoZWVsczpudW1iZXJcclxuLy8gfVxyXG5cclxuLy8gdHlwZSBDYXJvTW9wZWQ9IENhciAmIE1vcGVkO1xyXG5cclxuLy8gY29uc3QgYnVnZ2xlOkNhcm9Nb3BlZCA9IHtcclxuLy8gICAgIG1vZGVsOiAnc2htdWdneScsXHJcbi8vICAgICBlbmdpbmVWb2w6IDIwMDAsXHJcbi8vICAgICBoYXNTZWF0OiBmYWxzZSxcclxuLy8gICAgIHdoZWVsczogMixcclxuLy8gICAgIHByaWNlOjJcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgaXNDYXIgPSAodmFsOkNhcm9Nb3BlZCkgOiB2YWwgaXMgQ2FyID0+e1xyXG4vLyAgICAgcmV0dXJuICdtb2RlbCcgaW4gdmFsIC8vINC/0YDQvtCy0LXRgNC40YLRjCDQvdCwINGC0LjQv1xyXG4vLyB9IFxyXG5cclxuLy8g0LXRgdC70Lgg0LTQstCwINC/0L7Qu9GPINC+0LTQuNC90LDQutC+0LLRi9C1INC/0LjRiNC10YLRgdGPINC+0LTQuNC9INGA0LDQtywg0LAg0LXRgdC70Lgg0L7QvdC4INGA0LDQt9C90L7Qs9C+INGC0LjQv9CwLCDRgtC+INCy0YvQtNCw0LXRgiDQvtGI0LjQsdC60YMgdHlwZSBuZXZlci5cclxuLy8g0YLQvtCz0LTQsCDQsiDQv9GA0LXQtNC40LrQsNGC0LUg0L3Rg9C20L3QviDQv9GA0L7QstC10YDRj9GC0Ywg0L3QtSDRgtC+0LvRjNC60L4g0L3QsNC70LjRh9C40LUg0L/QvtC70Y8sINC90L4g0LXQs9C+IHR5cGVPZlxyXG5cclxuLy8g0LTQu9GPINC40L3RgtC10YDRhNC10LnRgdC+0LIg0LLQsNC70LjQtNC90L4gdW5pb24g0LggSW50ZXJzZWN0aW9uXHJcblxyXG4vLyBpbnRlcmZhY2UgSUxvZGthIHtcclxuLy8gICAgIHZlc2xhOiBudW1iZXJcclxuLy8gfVxyXG5cclxuLy8gaW50ZXJmYWNlIElTaGlwIHtcclxuLy8gICAgIGhlaWdodDogbnVtYmVyLFxyXG4vLyAgICAgd2lkdGg6IG51bWJlcixcclxuLy8gfVxyXG5cclxuLy8gaW50ZXJmYWNlIElTd2ltbWluZ1NoaXAgZXh0ZW5kcyBJU2hpcCwgSUxvZGthe1xyXG4vLyAgICAgc3dpbSgpIDogdm9pZCxcclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgb2JqOiBJU3dpbW1pbmdTaGlwID0ge1xyXG4vLyAgICAgdmVzbGE6IDIsXHJcbi8vICAgICBzd2ltOiAoKSA9PiB7fSxcclxuLy8gICAgIGhlaWdodDogMixcclxuLy8gICAgIHdpZHRoOiAxXHJcbi8vIH1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBrZXlvZiB0eXBlb2ZcclxuXHJcbi8vIGludGVyZmFjZSBJVXNlciB7XHJcbi8vICAgICBuYW1lOiBzdHJpbmcsXHJcbi8vICAgICBhZ2U6IG51bWJlclxyXG4vLyB9XHJcblxyXG4vLyB0eXBlIFNtdGggPSBrZXlvZiBJVXNlclxyXG4vLyBTbXRoIC0g0YLQuNC/LCDQtNC70Y8g0LrQsNC60L7Qs9C+LdC90LjQsdGD0LTRjCDQv9C+0LvRjyBVc2VyXHJcblxyXG4vLyBjb25zdCBrZXk6IFNtdGggPSAnYWdlJ1xyXG5cclxuLy8gY29uc3QgdXNlcjogSVVzZXIgPSB7XHJcbi8vICAgICBhZ2U6IDIxLFxyXG4vLyAgICAgbmFtZTogJ0pvaG4nXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJba2V5XSlcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyB0eXBlb2YgLSDQstC+0LfQstGA0LDRidCw0LXRgiDRgtC40L9cclxuXHJcbi8vIGNvbnN0IHBlcnNvbiA9IHtcclxuLy8gICAgIG5hbWU6ICdQZXRlcicsXHJcbi8vICAgICBhZ2U6IDE4LFxyXG4vLyAgICAgc3RhY2s6IFszLDQsNSw2XVxyXG4vLyB9XHJcblxyXG4vLyB0eXBlIFBlcnNvbiA9IHR5cGVvZiBwZXJzb25cclxuXHJcbi8vINC00L7Qu9C20L3RiyDQsdGL0YLRjCDRgtCw0LrQuNC1INC20LUg0L/QvtC70Y9cclxuLy8gY29uc3QgcGVyc29uMjogUGVyc29uID0ge1xyXG4vLyAgICAgdXNlck5hbWU6ICdWYWxlcmEnLFxyXG4vLyAgICAgY2l0eTogJ0dvbWVsJyxcclxuLy8gICAgIHN0YWNrOiBbMiwzLDRdXHJcbi8vIH1cclxuXHJcbi8vINC/0L7Qu9GD0YfQtdC90LjQtSDQutC70Y7Rh9C10Lkg0LjQtyDQvdC10LjQt9Cy0LXRgdGC0L3QvtCz0L4g0L7QsdGK0LXQutGC0LBcclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyAgICAgbmFtZTogJ1BldGVyJyxcclxuLy8gICAgIGFnZTogMTgsXHJcbi8vICAgICBzdGFjazogWzMsNCw1LDZdXHJcbi8vIH1cclxuXHJcbi8vIHR5cGUgUGVyc29uS2V5ID0ga2V5b2YgdHlwZW9mIHBlcnNvblxyXG5cclxuLy8gY29uc3Qga2V5OiBQZXJzb25LZXkgPSAnc3RhY2snXHJcblxyXG4vLyBwZXJzb25ba2V5XVxyXG5cclxuLy8g0YHQtdGA0LLQuNGB0L3Ri9C1INGC0LjQv9GLXHJcbi8vIFJldHVyblR5cGUgLSDQvtGH0LXQvdGMINGH0LDRgdGC0L5cclxuLy8gUGFyYW1ldGVycyAtINGA0LXQtNC60L5cclxuLy8gT21pdFxyXG4vLyBQaWNrXHJcbi8vIFBhcnRpYWxcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBhZGQgKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbi8vICAgICByZXR1cm4gYSArIGJcclxuLy8gfVxyXG5cclxuLy8g0LzRiyDQvdC1INC30L3QsNC10LwsINGH0YLQviDQstC+0LfRgNCw0YnQsNC10LxcclxuLy8gdHlwZSBBID0gUmV0dXJuVHlwZTx0eXBlb2YgYWRkPlxyXG4vLyB0eXBlIEIgPSBQYXJhbWV0ZXJzPHR5cGVvZiBhZGQ+XHJcblxyXG4vLyBhZGQoLi4uc210aClcclxuXHJcbi8vIHR5cGUgUHJvZ3JhbW1lciA9IHtcclxuLy8gICAgIG5hbWU6IHN0cmluZyxcclxuLy8gICAgIGFnZTogbnVtYmVyLFxyXG4vLyAgICAgc3RhY2s6IHN0cmluZ1tdXHJcbi8vICAgICBhbW91bnRPZlZ5Z29yYW55ZTogbnVtYmVyXHJcbi8vIH1cclxuXHJcbi8vIHR5cGUgUGVyc29uID0gT21pdDxQcm9ncmFtbWVyLCAnc3RhY2snIHwgJ2Ftb3VudE9mVnlnb3JhbnllJz4gLy8g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPINC00LvRjyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQv9C+0LvQtdC5XHJcbi8vIHR5cGUgUGVyc29uMiA9IFBpY2s8UHJvZ3JhbW1lciwgJ2FnZScgfCAnbmFtZSc+IC8vINC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQtNC70Y8g0LLRi9Cx0L7RgNCwINC60L7QvdC60YDQtdGC0L3Ri9GFINC/0L7Qu9C10LlcclxuLy8gdHlwZSBQZXJzb24zID0gUGFydGlhbDxQcm9ncmFtbWVyPiAvLyDQtNC10LvQsNC10YIg0LLRgdC1INC/0L7Qu9GPINC+0L/RhtC40L7QvdCw0LvRjNC90YvQvNC4XHJcbi8vIHR5cGUgUGVyc29uNCA9IFJlcXVpcmVkPFByb2dyYW1tZXI+IC8vINC00LXQu9Cw0LXRgiDQstGB0LUg0L/QvtC70Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C80LhcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFByb21pc2VcclxuXHJcbi8vIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlcykgPT4ge1xyXG4vLyAgICAgcmVzKDIpXHJcbi8vIH0pLnRoZW4oKHZhbCkgPT4ge1xyXG5cclxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=