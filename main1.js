
// var  numm = 5;
// numm = 7;
// console.log("locate: " + numm + ".");
//
// //константа
// const coast = 5;
// console.error(coast);

//выводы
// document.write("Zavascript");
// console.log("document");
// console.info("document");
// console.error("document"); //red baCKground coloe
// console.warn("document");  //yellow baCKground coloe

// работа с переменными
// var num_1 = 5;
// var num_2 = 7;
//var result = num_1 - num_2
//
// console.log("minus " + (num_1 - num_2));
// console.log("plus " + (num_1 + num_2));
// console.log("* " + (num_1 * num_2));
// console.log("/ " + (num_1 / num_2));
// console.log("% " + (num_1 % num_2));
//
// var num_3 = 5;
// num_3 +=5;
// num_3--; //вычитает 1
// console.log(num_3);
//
//переделывает строки в числа
// var str_1 = Number("12");
// var str_2 = Number("2");
//
// console.log("Math:" + Math.PI)
// console.log("Math:" + Math.min(3,5,6,7,8,9,5,9,3,2,4,5))

// условия
// var number = 15;
// var nameis = true;
//
// if (number == 5  && nameis) {
//     console.log("oik");
// } else if (number >= 20 || nameis) {
//     console.log("oi");
// } else {
//     console.error("ok");
// }
//
// //  || - или
// // && - and
//
// // проверкуа переменной на совпадение разных значений, нельзЯ использовать больше или меньше
// var stroka = "word";
//
// switch(stroka) {
//     case "4":
//         console.log("4");
//     case "5":
//         console.log("5");
//     case "7":
//         console.log("word");
//     break;
//     default:
//         console.error("default");
// }

//массивы
// //var arr = new Array() массивы
// var arr = [5,6,6,7,8,9,10,11,12,13, "stroka"];
// console.log(arr[0]);
//
// arr[3]= "wo";
// console.log(arr);
// console.log(arr.length);
//
// var matrix = [
//     [5.6, 7 , 8], [6, "stroka"], [7, -100000]
// ];
//
// matrix[1] [1] = "90hhhhhhh"
// console.log(matrix);

//циклы
// for (var k= 100; k > 5; k /=2){
//     console.log(k);
// }
// for (var i= 0; i < 10; i ++){
//     console.log(i);
// }
//
// var j = 1000;
// while (j > 100) {
//     console.log(j);
//     j -= 100
// }
//
// var isHasHouse = true;
// while (isHasHouse){
//
// }
//снчала выполнить код а потом проверить условие
// var x = 0;
// do {
//     console.log(x);
//     x ++
// }while (x < 10);
//
// for(var i = 10; i <= 20; i+=2){
//     if(i > 15)
//         break;
//     console.log(i);
// }
//
// for(var i = 10; i <= 20; i++){
//     if(i % 2 == 0)
//         continue; //перебрасывает обратно в for  и не выводит четное число
//
//     console.log(i);
// }
//
// var arr = [5, 6, 7, 8, 9, 10];
// for (var i = 0; i< arr.length; i++){
//     arr[i] *= 2;
//     console.log("element " + (i+1) + ": " + arr[i]);
// }

//всплывающие окна
//alert("Привет!");
// var data = confirm("Are u at home?");
// if (data){
//     alert("Perfect");
// }
//
// var data = prompt("Say old a u");
// console.log(data);
//
// var person = null;
// if (confirm("Are you suser?")) {
//     person = prompt("enter your name");
//     alert("Hello, " + person);
// }else{
//     alert("Please restart")
// }

//функции или методы
// function info(word) {
//     console.log( word + "!");
// }
// function summa(a, b) {
//     var res = a + b;
//     console.log( res)
//     info(res);
// }
//
// summa(5,7)
//
// function summa(arr){
//     var sum = 0;
//
//     for(var i=0; i<arr.length; i++)
//         sum += arr[i];
//
//     return sum;
// }
// var array = [1,2,3];
// var res = summa(array);
// console.log(res);
//
// var num = 10; //global var
// function info(){
//     var num = 20
//     console.log(num);
// }
// info()
// console.log(num)

// События
var counter = 0;
function onClickButton(el){
    counter++;
    //console.log(counter);
    //alert("u clicked me")
    el.innerHTML = "U clicked on button: " + counter;

    console.log(el.value);
}

function onInput(el){
    if(el == "Hello")
    console.log(el.value)
}