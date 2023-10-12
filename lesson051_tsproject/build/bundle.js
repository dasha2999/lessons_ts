/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// без webpack можно селать nmp tsc -w
// настройка webpack medium.com
// чтобы добавить modul: npm install
// Smth это тип для какого-нибудь поля User
const key = 'age';
const user = {
    age: 23,
    name: 'Jhon'
};
console.log(user[key]);
console.log(user['age']);
// ----------------------------------------------------------
// typeof
// смысл typeof на основании значения вернуть тип
// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }
// typeof возвращает тип
// type Person =typeof person;
// должны быть такие же поля
// const person2: Person = {
//     name: 'valerchik',
//     age:5,
//     city: 'Gomel',// выдает ошибку, потому что такого поля нет
//     stack: [2,1,3,4]
// }
// получение ключей из неизвепстногшо объекта
// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }
// type PersonKey = keyof typeof person;// определяем тип ключей
// const key: PersonKey = 'stack';
// console.log(person[key])
// -----------------------------------------------------------------------------------------
// сервисные типы(как будто вспомогательные функции, которые будут помогать создавать типы)
// --------------------------------------------------------------------------------------------
// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }
// function add (a:number,b:number){
//     return [a+b];
// }
// типа функция импортируемая и мы не знаем, что она возвращает
// type A =typeof add;//возвращает всю функцию
// type A = ReturnType<typeof add>; // возвращает тип того, что возвращет функция
// type B = Parameters<typeof add>; возвращет типы параметров
// new Promise<number>((res)=>{
//     res(2);
// }).then((val)=>{})
// type Programmer = {
//     name: string;
//     age: number;
//     stack:string[];
//     amountOfVygoranie: number;
// }
// type Person = Omit<Programmer, 'stack' | 'amountOfVygoranie'>;
// // используется для исключения определенных полей
// type Person2 = Pick<Programmer, 'stack' | 'amountOfVygoranie'>;
// // используется для выбирания конкретных полей
// type Person3 = Partial<Programmer>;
// // делает все поля опциональными
// type Person4 = Required<Programmer>;
// // делает все поля обязательными

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLG9DQUFvQztBQW1UcEMsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFTLEtBQUssQ0FBQztBQUN4QixNQUFNLElBQUksR0FBVTtJQUNoQixHQUFHLEVBQUUsRUFBRTtJQUNQLElBQUksRUFBRSxNQUFNO0NBRWYsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6Qiw2REFBNkQ7QUFDN0QsU0FBUztBQUNULGlEQUFpRDtBQUVqRCxtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsSUFBSTtBQUNKLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFFOUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLGlFQUFpRTtBQUNqRSx1QkFBdUI7QUFDdkIsSUFBSTtBQUdKLDZDQUE2QztBQUM3QyxtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLGdFQUFnRTtBQUVoRSxrQ0FBa0M7QUFFbEMsMkJBQTJCO0FBRTNCLDRGQUE0RjtBQUM1RiwyRkFBMkY7QUFDM0YsK0ZBQStGO0FBQy9GLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0osK0RBQStEO0FBRS9ELDhDQUE4QztBQUM5QyxpRkFBaUY7QUFFakYsNkRBQTZEO0FBSTdELCtCQUErQjtBQUMvQixjQUFjO0FBQ2QscUJBQXFCO0FBR3JCLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixpQ0FBaUM7QUFDakMsSUFBSTtBQUVKLGlFQUFpRTtBQUNqRSxvREFBb0Q7QUFFcEQsa0VBQWtFO0FBQ2xFLGlEQUFpRDtBQUVqRCxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBRW5DLHVDQUF1QztBQUN2QyxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0LHQtdC3IHdlYnBhY2sg0LzQvtC20L3QviDRgdC10LvQsNGC0Ywgbm1wIHRzYyAtd1xyXG4vLyDQvdCw0YHRgtGA0L7QudC60LAgd2VicGFjayBtZWRpdW0uY29tXHJcbi8vINGH0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCBtb2R1bDogbnBtIGluc3RhbGxcclxuXHJcblxyXG4vLyB0cyDRgdCw0LzQvtC90LDRgdGC0YDQsNC40LLQsNGO0YnQuNC50YHRjyDRj9C30YvQulxyXG4vLyDRgtC40L/RiyA6INGC0LjQv9C+0Lwg0LzQvtC20LXRgiDQstGB0LUg0YfRgtC+INGD0LPQvtC00L3QvlxyXG4vLyAg0LrQvtCz0LTQsCDQutC+0L3RgdGC0LDQvdGC0LAsINGC0L4g0YLQuNC/INC80L7QttC10YIg0LHRi9GC0Ywg0YLQviDRh9GC0L4g0L3QsNC/0LjRgdCw0L3QviDQv9C+0YHQu9C1ID0gLCDQuCDQvtC90L4g0LbQtSDQvNC+0LbQtdGCINCx0YvRgtGMINGC0LjQv9C+0Lwg0L/QviDQvtC/0YDQtdC00LXQu9C10L3QuNGOINC00LvRjyBsZXQgLCDQtNC10LvQsNGPINC40Lcg0L3QtdC1INC60L7QvdGB0YLQsNC90YLRgyDQuCDRjdGC0L4g0LTQvtC70LbQvdC+INCx0YvRgtGMINC+0LHQvtGB0L3QvtCy0LDQvdC+LCDQtNC10LvQsNC10YLRgdGPINGN0YLQviDRgSDQv9C+0LzQvtGJ0YzRjiBhcyAg0Lgg0L3QsNC30YvQstCw0LXRgtGB0Y8g0LrQsNGB0YLQvtCy0LDRgtGMXHJcblxyXG4vLyAnYW55JyDQu9GD0YfRiNC1INC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMLCDQv9C+0YLQvtC80YMg0YfRgtC+INC+0L0g0LrQsNC6INCx0Ysg0L7RgtC60LvRjtGH0LDQtdGCICB0cyDQuCDQstC60LvRjtGH0LDQtdGCIGpzKNC00LjQvdCw0LzQuNGH0LXRgdC60Lgg0YLQuNC/0LjQt9C40YDQvtCy0LDQvSlcclxuXHJcbi8vINGC0LjQv9GLINGH0LXRgNC10LcgfCAg0L3QsNC30YvQstCw0LXRgtGB0Y8g0Y7QvdC40L7QvSDQutCw0Log0LHRiyDQvtCx0YnQuNC5XHJcbi8vIGxldCB1c2VyU3RhdHVzOiAnYWRtaW4nIHwgJ3VzZXInIHwgJ25vbmUnPSdhZG1pbic7XHJcbi8vINGC0L7Qs9C00LAg0LzQvtC20L3QviDRgtC+0LvRjNC60L4g0LjQtyDRjdGC0LjRhSDQstCw0YDQuNCw0L3RgtC+0LJcclxuXHJcbi8vIGxldCB1c2VyPXVuZGVmaW5lZDtcclxuLy8g0YLQuNC/IHVua25vdyDQvdC1INC00LDQtdGCINCy0LjQtNC10YLRjCDQv9C+0LTRgdC60LDQt9C60LggKNC80LXRgtC+0LTRiywg0L3QsNC/0YDQuNC80LXRgCksINC/0L7RgtC+0LzRgyDRh9GC0L4g0L3QtSDQt9C90LDQtdGCINGC0LjQv1xyXG4vLyB1bmtub3cg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQvtCy0LDRgtGMINGC0L7Qu9GM0LrQviDQutC+0LPQtNCwINC/0YDQvtCy0LXRgNC40YjRjCDRgtC40L8g0YEg0L/QvtC80L7RidGM0Y4gaWZcclxuXHJcbi8vIGxldCBhOmFueT0nS2VsbCc7XHJcbi8vIGNvbnNvbGUubG9nKGEudG9naWlpKCkpLy/QvNC+0LbQvdC+INC/0LjRgdCw0YLRjCDQstGB0Y/QutGD0Y4g0YTQuNCz0L3RjlxyXG5cclxuLy8g0YLQuNC/IGVudW0g0YLQuNC/INC/0LXRgNGH0LjRgdC70LXQvdC40Y9cclxuLy8gY29uc3QgU0laSVM9e1xyXG4vLyAgICAgUzonUycsXHJcbi8vICAgICBMOidMJyxcclxuLy8gICAgIFhTOidYUycsXHJcbi8vICAgICBYTDonWEwnLFxyXG4vLyAgICAgTTonTSdcclxuXHJcbi8vIH1cclxuXHJcbi8vIGVudW0gU2l6ZXtcclxuLy8gICAgIFMsXHJcbi8vICAgICBMLFxyXG4vLyAgICAgWFMsXHJcbi8vICAgICBYTCxcclxuLy8gICAgIE1cclxuLy8gfVxyXG4vLyBsZXQgc2l6ZTogU2l6ZT1TaXplLlNcclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0eXBlc1xyXG4vLyB0eXBlIGFsaWFzZXMsaW50ZXJmYWNlXHJcbi8vIG5ldmVyfHZvaWRcclxuLy8gYXJyYXlzLCB0dWxlc1xyXG4vLyBkdWNrXHJcblxyXG5cclxuLy8gY29uc3QgYWRkPShhOm51bWJlcixiOnN0cmluZyk9PntcclxuLy8gICAgIHJldHVybiBhK2I7XHJcbi8vIH1cclxuLy8g0LTRgNGD0LPQvtC5INGB0LjQvdGC0LDQutGB0LjRgVxyXG4vLyBjb25zdCBhZGQ6KGE6bnVtYmVyLGI6c3RyaW5nKT0+bnVtYmVyPShhLGIpPT57XHJcbi8vICAgICByZXR1cm4gYStiO1xyXG4vLyB9XHJcbi8vIHnQvdC1INC70YPRh9GI0LjQuSDQstCw0YDQuNCw0L3RglxyXG4vLyBjb25zdCByZXM9YWRkKDEsJ2FzJyk7XHJcbi8vINC30L3QsNC6ID8g0L/QvtGB0LvQtSDQv9C10YDQtdC80LXQvdC90L7QuSDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0LDRgNCz0YPQvNC10YIg0LzQvtC20LXRgiDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0YwsINCwINC80L7QttC10YIg0L3QtdGCXHJcbi8vIGNvbnN0IGFkZD0oYTpudW1iZXIsYj86c3RyaW5nKT0+e1xyXG4vLyAgICAgcmV0dXJuIGErYjtcclxuLy8gfVxyXG4vLyBjb25zdCByZXM9YWRkKDEpO1xyXG5cclxuLy8gY29uc3QgZnVuYz0oYTpudW1iZXIpPT57XHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWUgY3VzdG9tIGVycm9yJylcclxuLy8gfVxyXG4vLyDRgtC40L8g0YTRg9C90LrRhtC40LggbmV2ZXIsINC/0L7RgtC+0LzRgyDRh9GC0L4g0L3QtdGCIHJldHVyblxyXG4vLyDQvNC10LbQtNGDIG5ldmVyINC4INC70Y7QsdGL0Lwg0LTRgNGD0LPQuNC8INGC0LjQv9C+0Lwg0LLQtdGA0L3QtdGCINCy0YHQtdC00LAg0LTRgNGD0LPQvtC5INGC0LjQv1xyXG5cclxuXHJcbi8vIGNvbnN0IGM9MjtcclxuLy8gY29uc3QgZD0zO1xyXG4vLyBjb25zdCByZXN1bHQgPWM8ZCA/ICdoZWxsbyc6J2dvb2RiYXknO1xyXG5cclxuXHJcbi8vINGC0LjQvyB2b2lkXHJcbi8vIHZvaWQg0L/QvtC80LXRh9Cw0LXRgiDRgNC10LfRg9C70YzRgtCw0YIg0YTRg9C90LrRhtC40Lgg0YMg0LrQvtGC0L7RgNC+0Lkg0L3QtdGCIHJldHVyblxyXG4vLyBjb25zdCBmdW5jID0gKGE6bnVtYmVyKSA9PntcclxuLy8gICAgIGNvbnNvbGUubG9nKGEqKjIpXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlcz1mdW5jKDMpO1xyXG4vLyBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG5cclxuLy8gYXJyYXlzXHJcbi8vIDEpXHJcbi8vINC10YHQu9C4INC+0LTQvdC+0LPQviDRgtC40L/QsFxyXG4vLyBjb25zdCBhcnI6IG51bWJlcltdPVsyLDMsNF07XHJcblxyXG4vLyBjb25zdCBmdW5jPShhcnI6bnVtYmVyW10pPT57XHJcblxyXG4vLyB9XHJcblxyXG4vLyDQtdGB0LvQuCDRgNCw0LfQvdC+0LPQviDRgtC40L/QsFxyXG4vLyBjb25zdCBhcnI6IChudW1iZXJ8c3RyaW5nKVtdPVsnYXMnLCdhZScsMywyXVxyXG5cclxuXHJcbi8vINC00LLRg9GF0LzQtdGA0L3Ri9C5INC80LDRgdGB0LjQslxyXG4vLyBjb25zdCBhcnI6IChudW1iZXJ8c3RyaW5nKVtdW109W1sxLDBdLFsnc2QnLDFdXTtcclxuXHJcbi8vIDIpXHJcbi8vINGH0LXRgNC10Lcg0LTQttC10L3QtdGA0LjQulxyXG4vLyBjb25zdCBhcnIyOkFycmF5PG51bWJlcj49WzIsMyw0XTtcclxuLy8g0L/RgNC10LTQv9C+0YfRgtC40YLQtdC70YzQvdC+INC/0LXRgNCy0YvQuVxyXG5cclxuXHJcbi8vIHR1cGxlINC40LvQuCDQutC+0YDRgtC10LYo0LzQsNGB0YHQuNCyINGB0L4g0YHRgtGA0L7Qs9C+0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C8INC60L7Qu9C40YfQtdGB0YLQstC+0Lwg0Y3Qu9C10LzQtdGC0L3QvtCyINC4INGB0YLRgNC+0LPQvtC+0L/RgNC10LTQtdC70LXQvdC90L7Qs9C+INGC0LjQv9CwKVxyXG4vLyBjb25zdCBhcnI6IFtudW1iZXIsc3RyaW5nLCBib29sZWFuXT1bMiwnYXMnLHRydWVdO1xyXG5cclxuLy8gYXJyLnB1c2goOTkpOyAvL9C+0YjQuNCx0LrQsCB0eXBlc2NyaXB0YVxyXG4vLyBjb25zb2xlLmxvZyhhcnIpXHJcblxyXG5cclxuLy8gYWxpYXNlc1xyXG5cclxuLy8gY29uc3Qgamhvbj17XHJcbi8vICAgICBuYW1lOidKaG9uJyxcclxuLy8gICAgIGFnZToyMixcclxuLy8gICAgIGNpdHk6J0Jvc3RvbidcclxuLy8gfVxyXG4vLyDQtdGB0LvQuCDQvdGD0LbQvdC+INC80L3QvtCz0L4g0L7QtNC90L7RgtC40L/QvdGL0YUg0L7QsdGK0LXQutGC0L7QslxyXG5cclxuLy8gdHlwZSBQZXJzb24gPXtcclxuLy8gICAgIG5hbWU6c3RyaW5nO1xyXG4vLyAgICAgYWdlOm51bWJlcjtcclxuLy8gICAgIGNpdHk6IHN0cmluZztcclxuICAgIC8vIHN0YXR1czogJ2FkbWluJ3wndXNlcid8J25vbmUnOyAg0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICAvLyByb2dyYW1pblNzY2lsbHM/OiBzdHJpbmdbXSAtPyDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0L/QvtC70LUg0LzQvtC20LXRgiDQvtGC0YHRg9GC0YHRgtCy0L7QstCw0YLRjCjQvtC/0YbQuNC+0L3QsNC70YzQvdC+0LUpXHJcbiAgICAvLyBydW47KGRlc3RpbmF0aW9uOnN0cmluZyk9PnZvaWQ7Ly/QuNC70LhcclxuICAgIC8vIHdhbGsoKTp2b2lkXHJcbi8vIH1cclxuLy8gUGVyc29uINGN0YLQviDRgtC40L8gKNC+0L/QuNGB0LDQvdC40LUpLiDQntCx0YDQsNGC0LjRgtGM0YHRjyDQuiDQv9C+0LvRj9C8INC90LXQu9GM0LfRj1xyXG4vLyDQuCDRgtC+0LPQtNCwXHJcblxyXG4vLyBjb25zdCBwZXRlcjpQZXJzb249e1xyXG4vLyAgICAgbmFtZTonUGV0ZXInLFxyXG4vLyAgICAgYWdlOjI4LFxyXG4vLyAgICAgY2l0eTonR29tZWwnXHJcbi8vIH1cclxuLy8gY29uc3QgdmFsZXJjaGlrPXtcclxuLy8gICAgIHVzZXJuYW1lOiAyLFxyXG4vLyAgICAgbmFtZTondmFsZXJjaGlrJyxcclxuLy8gICAgIGFnZTozMixcclxuLy8gICAgIGNpdHk6ICdCdWRhJ1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhcnI6UGVyc29uW109W2pob24scGV0ZXIsdmFsZXJjaGlrXTtcclxuLy8g0Lgg0LTQsNC20LUg0LXRgdC70Lgg0LTQvtCx0LDQstC40YLRjCDQv9GA0LDQstC40LvRjNC90YvQtSDQv9C+0LvRjyAsIHR5cGVzY3JpcHQg0L/RgNC40LzQtdGCINC10LPQviDRjdGC0L4g0L3QsNC30YvQstCw0LXRgtGB0Y8g0YPRgtC40L3QvtC5INGC0LjQv9C40LfQsNGG0LjQtdC5IGR1Y2tcclxuXHJcblxyXG4vLyDQuNC90YLQtdGA0YTQtdC50YHRi1xyXG5cclxuLy8g0LHRg9C60LLQsCBJINC/0L4g0LTQvtCz0L7QstC+0YDQtdC90L3QvtGB0YLQuFxyXG4vLyBpbnRlcmZhY2UgSUFuaW1hbCB7XHJcbi8vICAgICBwYXdzOm51bWJlcjtcclxuLy8gICAgIGhhc1RhaWw6Ym9vbGVhbjtcclxuLy8gICAgIHJ1bj8gKCk6dm9pZDsgLy/Qv9C+0LvRjyDQsiDQuCDQvdGC0LXRgNGE0LXQudGB0LUg0LzQvtC20L3QviDQtNC10LvQsNGC0Ywg0L7Qv9GG0LjQvtC90LDQu9GM0L3Ri9C80LhcclxuLy8gICAgIHdhbGs/OiAoZGVzdGluYXRpb246c3RyaW5nKT0+dm9pZC8v0LjQu9C4XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNhdDogSUFuaW1hbD17XHJcbi8vICAgICBhbmltYWxOYW1lOiAnTXVyemlrJyxcclxuLy8gICAgIGhhc1RhaWw6dHJ1ZSxcclxuLy8gICAgIHBhd3M6NCxcclxuLy8gICAgIHJ1bigpIHt9LFxyXG4vLyAgICAgd2FsaygpIHt9LFxyXG4vLyB9XHJcbi8vINC+0YLQu9C40YfQuNGPINC80LXQttC00YMg0LjQvdGC0LXRgNGE0LXQudGB0L7QvCDQuCDRgtC40L/QvtC8XHJcblxyXG4vLyDQldGB0LvQuCDQv9C10YDQtdC+0L/RgNC10LTQtdC70LjRgtGMINGC0LjQvywg0YLQviDQstGL0LTQsNGB0YIg0L7RiNC40LHQutGD0Y4g0KLQsNC6INC00LXQu9Cw0YLRjCDQvdC10LvRjNC30Y9cclxuXHJcbi8vIGludGVyZmFjZSBJQW5pbWFsIHtcclxuLy8gICAgIGFuaW1hbE5hbWU6IHN0cmluZ1xyXG4vLyB9XHJcbi8vINCQICDQuNC90YLQtdGA0YTQtdC50YEg0L7QsdGK0LXQtNC40L3Rj9C10YIg0LTQstCwINC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0L7QsdGK0Y/QstC70LXQvdC40LksINGA0LDRgdGI0LjRgNGP0Y/RgdGMXHJcblxyXG5cclxuLy8gVW5pb24gaW50ZXJzZWN0aW9uIGZvciB0eXBlXHJcblxyXG4vLyDQtNC70Y8g0L/RgNC+0YHRgtGL0YUg0L/QvtC90Y/RgtC90L4gbnVtYmVyfHN0cmluZ1xyXG4vLyDQtNC70Y8g0YHQu9C+0LbQvdGL0YUg0LTQvtC70LbQvdC+INGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/RgtGMINGF0L7RgtGPINCx0Ysg0L7QtNC90L7QvNGDINGC0LjQv9GDINC/0L7Qu9C90L7RgdGC0YzRjiwg0L7RgdGC0LDQu9GM0L3Ri9C1INGB0LLQvtC50YHRgtCy0LAg0L/QviDQstGL0LHQvtGA0YNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFVOSU9OXHJcbi8vIHR5cGUgQ2FyID17XHJcbi8vICAgICBtb2RlbDogc3RyaW5nO1xyXG4vLyAgICAgZW5naW5lVm9sOm51bWJlcjtcclxuLy8gfTtcclxuXHJcbi8vIHR5cGUgTW9wZWQ9e1xyXG4vLyAgICAgaGFzU2VhdDpib29sZWFuO1xyXG4vLyAgICAgd2hlZWxzOm51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8g0YEg0LjQvdGC0LXRgNGE0LXQudGB0L7QvCDRgNCw0LHQvtGC0LDQtdGCINGC0L7Rh9C90L4g0YLQsNC60LbQtVxyXG5cclxuLy8gaW50ZXJmYWNlIENhciB7XHJcbi8vICAgICBtb2RlbDogc3RyaW5nO1xyXG4vLyAgICAgZW5naW5lVm9sOm51bWJlcjtcclxuLy8gfTtcclxuXHJcbi8vINC70YPRh9GI0LUg0LjRgdC/0L7Qu9GM0L7QstCw0YLRjCDQuNC70Lgg0YLQviDQuNC70Lgg0YLQvlxyXG4vLyB0eXBlIE1vcGVkID17XHJcbi8vICAgICBoYXNTZWF0OmJvb2xlYW47XHJcbi8vICAgICB3aGVlbHM6bnVtYmVyO1xyXG4vLyB9XHJcbi8vIHR5cGUgQ2Fyb01vcGVkPUNhcnxNb3BlZDtcclxuXHJcbi8vIGNvbnN0IGJ1Z2dsZTpDYXJvTW9wZWQgPSB7XHJcbi8vICAgICBtb2RlbDogJ3NobXVnZ3knLFxyXG4vLyAgICAgZW5naW5lVm9sOiAyMDAwLFxyXG4vLyAgICAgaGFzU2VhdDogZmFsc2VcclxuLy8gfVxyXG5cclxuXHJcbi8vICBpbiAg0LHQuNC90LDRgNC90YvQuSDRgdGC0YDQvtC60LAgaW4g0L7QsdGK0LXQutGCINC/0YDQvtCy0LXRgNGP0LXRgiDQvdCw0LvQuNGH0LjQtSDQv9C+0LvRjyDRgdGC0YDQvtC60LAg0LIg0L7QsdGK0LXQutGC0LUsINCwINC10YHQu9C4INC90LXRgiwg0LjQtNC10YIg0LTQsNC70YzRiNC1INCyINC/0YDQvtGC0L7RgtC40L8gXHJcbi8vIGZ1bmN0aW9uIHNob3dNb2RlbCAob2JqOiBDYXJvTW9wZWQpe1xyXG4vLyAgICAgaWYgKCdtb2RlbCcgaW4gb2JqKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhvYmopXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9iailcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyDRhNGD0L3QutGG0LjRjy3Qv9GA0LXQtNC40LrQsNGCINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINCx0YPQu9C10LLQviDQt9C90LDRh9C10L3QuNC1XHJcblxyXG4vLyBjb25zdCBpc0NhciA9ICh2YWw6Q2Fyb01vcGVkKSA6IHZhbCBpcyBDYXIgPT57XHJcbi8vICAgICByZXR1cm4gJ21vZGVsJyBpbiB2YWw7XHJcbi8vIH0gXHJcbi8vIGZ1bmN0aW9uIHNob3dNb2RlbCAob2JqOiBDYXJvTW9wZWQpe1xyXG4vLyAgICAgaWYgKGlzQ2FyKG9iaikpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9iailcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cob2JqKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBJbnRlcnNlY3Rpb25cclxuLy8g0LTQvtC70LbQvdGLINC/0YDQuNGB0YPRgtGB0YLQstC+0LLQsNGC0Ywg0LLRgdC1INC/0L7Qu9GPXHJcblxyXG4vLyB0eXBlIENhciA9e1xyXG4vLyAgICAgcHJpY2U6IG51bWJlcjtcclxuLy8gICAgIG1vZGVsOiBzdHJpbmc7XHJcbi8vICAgICBlbmdpbmVWb2w6bnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuLy8gdHlwZSBNb3BlZD17XHJcbi8vICAgICAvLyBwcmljZTogc3RyaW5nO1xyXG4vLyAgICAgaGFzU2VhdDpib29sZWFuO1xyXG4vLyAgICAgd2hlZWxzOm51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gdHlwZSBDYXJvTW9wZWQ9Q2FyICYgTW9wZWQ7XHJcblxyXG4vLyBjb25zdCBidWdnbGU6Q2Fyb01vcGVkID0ge1xyXG4vLyAgICAgbW9kZWw6ICdzaG11Z2d5JyxcclxuLy8gICAgIGVuZ2luZVZvbDogMjAwMCxcclxuLy8gICAgIGhhc1NlYXQ6IGZhbHNlLFxyXG4vLyAgICAgd2hlZWxzOiAyLFxyXG4vLyAgICAgcHJpY2U6MlxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBpc0NhciA9ICh2YWw6Q2Fyb01vcGVkKSA6IHZhbCBpcyBDYXIgPT57XHJcbi8vICAgICByZXR1cm4gJ21vZGVsJyBpbiB2YWw7Ly/Qv9GA0L7QstC10YDQuNGC0Ywg0L3QsCDRgtC40L9cclxuLy8gfSBcclxuLy8gZnVuY3Rpb24gc2hvd01vZGVsIChvYmo6IENhcm9Nb3BlZCl7XHJcbi8vICAgICBpZiAoaXNDYXIob2JqKSl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cob2JqKVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhvYmopXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8g0LXRgdC70Lgg0LTQstCwINC/0L7Qu9GPINC+0LTQuNC90LDQutC+0LLRi9C1INC/0LjRiNC10YLRgdGPINC+0LTQuNC9INGA0LDQtywg0LAg0LXRgdC70Lgg0L7QvdC4INGA0LDQt9C90L7Qs9C+INGC0LjQv9CwLCDRgtC+INCy0YvQtNCw0LXRgiDQvtGI0LjQsdC60YMgdHlwZSBuZXZlci5cclxuLy8g0YLQvtCz0LTQsCDQsiDQv9GA0LXQtNC40LrQsNGC0LUg0L3Rg9C20L3QviDQv9GA0L7QstC10YDRj9GC0Ywg0L3QtSDRgtC+0LvRjNC60L4g0L3QsNC70LjRh9C40LUg0L/QvtC70Y8sINC90L4g0LXQs9C+IHR5cGVPZlxyXG5cclxuLy8g0LTQu9GPINC40L3RgtC10YDRhNC10LnRgdC+0LIg0LLQsNC70LjQtNC90L4gdW5pb24g0LggSW50ZXJzZWN0aW9uXHJcblxyXG4vLyBpbnRlcmZhY2UgSVNoaXAge1xyXG4vLyAgICAgaGVpZ2h0OiBudW1iZXI7XHJcbi8vICAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgXHJcbi8vIH1cclxuLy8gaW50ZXJmYWNlIElTd2ltaW5nU2hpcCBleHRlbmRzIElTaGlwIHtcclxuLy8gICAgICAgIHN3aW0oKTp2b2lkO1xyXG4vLyB9XHJcbi8vIHR5cGUgU3dpbW1pbmdTaGlwID0gSVNoaXAgJiB7c3dpbSgpOnZvaWR9O1xyXG5cclxuLy8gY29uc3Qgb2JqOiBTd2ltbWluZ1NoaXAgPSB7XHJcbi8vICAgICBzd2ltKCkgPT57fSxcclxuLy8gICAgIGhlaWdodDogMixcclxuLy8gICAgIHdpZHRoOiAxLFxyXG4gICAgXHJcbi8vIH1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8ga2V5b2YgXHJcbi8vINGB0LvQtdCy0LAg0L7RgiBrZXlvZiDQtNC+0LvQttC10L0g0YHRgtC+0Y/RgtGMINGC0LjQv1xyXG5cclxuaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgYWdlOm51bWJlcjtcclxufVxyXG5cclxudHlwZSBTbXRoID0ga2V5b2YgSVVzZXI7XHJcblxyXG4vLyBTbXRoINGN0YLQviDRgtC40L8g0LTQu9GPINC60LDQutC+0LPQvi3QvdC40LHRg9C00Ywg0L/QvtC70Y8gVXNlclxyXG5cclxuY29uc3Qga2V5OiBTbXRoID0gJ2FnZSc7XHJcbmNvbnN0IHVzZXI6IElVc2VyID0ge1xyXG4gICAgYWdlOiAyMyxcclxuICAgIG5hbWU6ICdKaG9uJ1xyXG5cclxufTtcclxuXHJcbmNvbnNvbGUubG9nKHVzZXJba2V5XSk7XHJcbmNvbnNvbGUubG9nKHVzZXJbJ2FnZSddKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyB0eXBlb2ZcclxuLy8g0YHQvNGL0YHQuyB0eXBlb2Yg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LfQvdCw0YfQtdC90LjRjyDQstC10YDQvdGD0YLRjCDRgtC40L9cclxuXHJcbi8vIGNvbnN0IHBlcnNvbiA9IHtcclxuLy8gICAgIG5hbWU6ICdQZXRlcicsXHJcbi8vICAgICBhZ2U6MixcclxuLy8gICAgIHN0YWNrOiBbMiwxLDMsNF1cclxuLy8gfVxyXG4vLyB0eXBlb2Yg0LLQvtC30LLRgNCw0YnQsNC10YIg0YLQuNC/XHJcbi8vIHR5cGUgUGVyc29uID10eXBlb2YgcGVyc29uO1xyXG5cclxuLy8g0LTQvtC70LbQvdGLINCx0YvRgtGMINGC0LDQutC40LUg0LbQtSDQv9C+0LvRj1xyXG4vLyBjb25zdCBwZXJzb24yOiBQZXJzb24gPSB7XHJcbi8vICAgICBuYW1lOiAndmFsZXJjaGlrJyxcclxuLy8gICAgIGFnZTo1LFxyXG4vLyAgICAgY2l0eTogJ0dvbWVsJywvLyDQstGL0LTQsNC10YIg0L7RiNC40LHQutGDLCDQv9C+0YLQvtC80YMg0YfRgtC+INGC0LDQutC+0LPQviDQv9C+0LvRjyDQvdC10YJcclxuLy8gICAgIHN0YWNrOiBbMiwxLDMsNF1cclxuLy8gfVxyXG5cclxuXHJcbi8vINC/0L7Qu9GD0YfQtdC90LjQtSDQutC70Y7Rh9C10Lkg0LjQtyDQvdC10LjQt9Cy0LXQv9GB0YLQvdC+0LPRiNC+INC+0LHRitC10LrRgtCwXHJcbi8vIGNvbnN0IHBlcnNvbiA9IHtcclxuLy8gICAgIG5hbWU6ICdQZXRlcicsXHJcbi8vICAgICBhZ2U6MixcclxuLy8gICAgIHN0YWNrOiBbMiwxLDMsNF1cclxuLy8gfVxyXG5cclxuLy8gdHlwZSBQZXJzb25LZXkgPSBrZXlvZiB0eXBlb2YgcGVyc29uOy8vINC+0L/RgNC10LTQtdC70Y/QtdC8INGC0LjQvyDQutC70Y7Rh9C10LlcclxuXHJcbi8vIGNvbnN0IGtleTogUGVyc29uS2V5ID0gJ3N0YWNrJztcclxuXHJcbi8vIGNvbnNvbGUubG9nKHBlcnNvbltrZXldKVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0YHQtdGA0LLQuNGB0L3Ri9C1INGC0LjQv9GLKNC60LDQuiDQsdGD0LTRgtC+INCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuCwg0LrQvtGC0L7RgNGL0LUg0LHRg9C00YPRgiDQv9C+0LzQvtCz0LDRgtGMINGB0L7Qt9C00LDQstCw0YLRjCDRgtC40L/RiylcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyAgICAgbmFtZTogJ1BldGVyJyxcclxuLy8gICAgIGFnZToyLFxyXG4vLyAgICAgc3RhY2s6IFsyLDEsMyw0XVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBhZGQgKGE6bnVtYmVyLGI6bnVtYmVyKXtcclxuLy8gICAgIHJldHVybiBbYStiXTtcclxuLy8gfVxyXG4vLyDRgtC40L/QsCDRhNGD0L3QutGG0LjRjyDQuNC80L/QvtGA0YLQuNGA0YPQtdC80LDRjyDQuCDQvNGLINC90LUg0LfQvdCw0LXQvCwg0YfRgtC+INC+0L3QsCDQstC+0LfQstGA0LDRidCw0LXRglxyXG5cclxuLy8gdHlwZSBBID10eXBlb2YgYWRkOy8v0LLQvtC30LLRgNCw0YnQsNC10YIg0LLRgdGOINGE0YPQvdC60YbQuNGOXHJcbi8vIHR5cGUgQSA9IFJldHVyblR5cGU8dHlwZW9mIGFkZD47IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGC0LjQvyDRgtC+0LPQviwg0YfRgtC+INCy0L7Qt9Cy0YDQsNGJ0LXRgiDRhNGD0L3QutGG0LjRj1xyXG5cclxuLy8gdHlwZSBCID0gUGFyYW1ldGVyczx0eXBlb2YgYWRkPjsg0LLQvtC30LLRgNCw0YnQtdGCINGC0LjQv9GLINC/0LDRgNCw0LzQtdGC0YDQvtCyXHJcblxyXG5cclxuXHJcbi8vIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlcyk9PntcclxuLy8gICAgIHJlcygyKTtcclxuLy8gfSkudGhlbigodmFsKT0+e30pXHJcblxyXG5cclxuLy8gdHlwZSBQcm9ncmFtbWVyID0ge1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgYWdlOiBudW1iZXI7XHJcbi8vICAgICBzdGFjazpzdHJpbmdbXTtcclxuLy8gICAgIGFtb3VudE9mVnlnb3JhbmllOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIHR5cGUgUGVyc29uID0gT21pdDxQcm9ncmFtbWVyLCAnc3RhY2snIHwgJ2Ftb3VudE9mVnlnb3JhbmllJz47XHJcbi8vIC8vINC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQtNC70Y8g0LjRgdC60LvRjtGH0LXQvdC40Y8g0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9GFINC/0L7Qu9C10LlcclxuXHJcbi8vIHR5cGUgUGVyc29uMiA9IFBpY2s8UHJvZ3JhbW1lciwgJ3N0YWNrJyB8ICdhbW91bnRPZlZ5Z29yYW5pZSc+O1xyXG4vLyAvLyDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LTQu9GPINCy0YvQsdC40YDQsNC90LjRjyDQutC+0L3QutGA0LXRgtC90YvRhSDQv9C+0LvQtdC5XHJcblxyXG4vLyB0eXBlIFBlcnNvbjMgPSBQYXJ0aWFsPFByb2dyYW1tZXI+O1xyXG4vLyAvLyDQtNC10LvQsNC10YIg0LLRgdC1INC/0L7Qu9GPINC+0L/RhtC40L7QvdCw0LvRjNC90YvQvNC4XHJcblxyXG4vLyB0eXBlIFBlcnNvbjQgPSBSZXF1aXJlZDxQcm9ncmFtbWVyPjtcclxuLy8gLy8g0LTQtdC70LDQtdGCINCy0YHQtSDQv9C+0LvRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LzQuCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==