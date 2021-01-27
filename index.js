// var names="abdul moiz i am doing js"
// var word=names.split(" ")
// console.log(word)

// for(var i=0; i<word.length; i++){
//     word[i]=word[i][0].toUpperCase() + word[i].substring(1)
// }
// console.log(word)
// var strings=word.toString()
// var replaces=strings.replace(/,/g," ")
// console.log(replaces)








// var _myName="abdul moiz"
// var _1my__Name="abdul moiz"
// var myName="abdul moiz attari"
// var $myName="abdul moiz"

// console.log(_myName);
// console.log(_1my__Name);
// console.log($myName);
// console.log(myName)


// var _myName="abdul moiz"
// console.log(_myName);
// console.log(typeof(_myName))
// var myAge=20;
// console.log(myAge)
// console.log(typeof(myAge))
// var thapas;
// console.log(typeof(thapas))


// console.log(6+"4");
// console.log("10"+10);
// console.log("9" - 1); //bug of js
// console.log(10 -"8");
// console.log("Java" + "Script")
// console.log(" " + " ")
// console.log(" " + 0)
// console.log("abdul" - "moiz") //result NaN not a number
// console.log(true + true) true=1 and false=0
// console.log(true + false)
// console.log(false + true)
// console.log(false - true)
// console.log(false + false)
// console.log(false)


// var iAmUseless=null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless)); // result object second bug of js

// var datatypes;
// console.log(datatypes)
// console.log(typeof(datatypes))

// var phoneNumber=987654321;
// var myName="abdul moiz"
// console.log(isNaN(phoneNumber))
// console.log(isNaN(myName)) // the awnswer will be true becuase this is not a number, this isstring

// if(isNaN(myName)){
//     console.log("This is not a valid number")
// }


// console.log( NaN == NaN);


// operators and expression
// var x=5;
// var y=5;

// console.log('This is x and y' + x == y) result false
// console.log(`this is an x and y: ${x ==y}`)this is an template literals es6


//these are literals example 
// console.log(3+3);
// console.log(10-2);
// console.log(10*2);
// console.log(10/2);
// console.log("Reminder operator " + 10%3)  //The modules gives us reminder

//This is variables example
// var a=10;
// var b=10
// var c= a + b
// console.log(c)


// let num=10;
// let numbers= num++;
// console.log(num)
// console.log(numbers)

// let a=10;
// let b=11;
//  let c=++b + ++a - a++ + --a;
// console.log(a)
// console.log(b)
// console.log(c)

// let num=10;
// let numbers= ++num;
// console.log(num)
// console.log(numbers)

// let num=10;
// let numbers= num--;
// console.log(num)
// console.log(numbers)

// let num=10;
// let numbers= --num;
// console.log(num)
// console.log(numbers)

// a=10;
// b=20;
// console.log(a==b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);

// let a=10;
// let b=20;
// //Logical &&
// console.log(a<b && a==b && a<=b)
// // logical ||
// console.log(a<b || a==b || a<=b)
// //logical Not ! it converts
// console.log(!( a>b || a==b || a<=b))


//string concatination 3rd interview question 
// let firstName="Abdul";
// let secondName="moiz";

// console.log(firstName +" "+secondName)     
// console.log(firstName + " Attari")
// console.log(firstName + " Khanzada")
// console.log(firstName + " moiz qadri")
// console.log("2" + 10)

// console.log(10**-1) //result 0.1

//challanges

// console.log(5**5) //result 3125  backend 5*5*5*5*5 

// var a=5;
// var b=10;
 
// var c=b; //c=10
// b=a;  //b=5
// a=c; //a=10
// console.log("This is a value of a " +a);
// console.log("This is a value of b "+ b);


// var a=5;
// var b=10;

// a=a + b //a=15;
// b=a - b //b=5 beacuse a=15 and b=10
// a=a - b //a=10; beacuse a=15 and b=5

// console.log("a value "+a);
// console.log("b value "+b);


// var a=30;
// var b=20;

// a=a+b; //a=50
// b=a-b // b=30 beacuse a=50 and b=20
// a=a-b //a=20 a=50 and b=30

// console.log("a value "+a);
// console.log("b value "+b);

// var a=30;
// var b=20;

// var c=a;
// a=b;
// b=c
// console.log("Value of a "+a);
// console.log("Value of b "+b);

// var a =10;
// var b="10";

// console.log(a);
// console.log(b);
// console.log(a==b)
// console.log(a===b)

// let temp="raining"

// if(temp === "raining"){
//    console.log("Please take raincott, the weather is raining")
// }else{
//    console.log("temp is sunny no need to bring raincott")
// }

// let year=prompt("write year");
// debugger;
// if(year % 4 === 0){
// if(year %100 ===0){
// if(year %400 === 0){
//    console.log(`This year ${year} is a leap year`)
// }else{
//     console.log(`This year ${year} is not a leap year`)
// }
// }else{
// console.log(`This year ${year} is leap year`)
// }
// }else{
//     console.log(`This year ${year} is not leap year`)
// }


//these are falsy values 0 ,"",undefined,null,NaN;  ,Others are truthy values
//always it run else statment
// if(score = 0){
//     console.log("We win the game")
// }else{
//     console.log("We loss the game")
// }

//conditional ternary operator
// let age=11;
// console.log((age>=18)? "Allow for votting":"Not Allow for voting")

// var percantage=prompt();
// if(percantage<=100 && percantage>=96 ){
//     console.log("Execellent")
// }else if(percantage<=95 && percantage>=90){
//     console.log("Good")
// }else{
//     console.log("Pass")
// }

//switch statment
// break keyword is really important after every case

// let area="triangle";
// let PI= 3.142, l=5, b=5,r=3;

// switch(area){
//     case "circle":
//     console.log("The area of circle is "+ PI*r**2)
//     break;
//     case "triangle":
//     console.log("The area of traingle is "+ (l+b)/2)
//     break;
//      case "rectangle":
//      console.log("The area of traingle is "+(l+b))
//      default:
//          console.log("write a correct data")
// }

// let grade=prompt("Write value in Capital letter");

// switch(grade){
//    case "A1":
//    console.log("Excellent")
//    break;
//    case  "A":
//    console.log("Very Good")
//    break;
//    case "B":
//    console.log("Good")
//    break;
//    case  "C":
//    console.log("Pass")
//    break;
//    case  "F":
//    console.log("Fail")
//    break;
//    default:
//        console.log("Write correct value")
// }

// let num=0
//block scope
//It will check condition first then run if true
// while(num <=10){
//     console.log(num)
//     num++
// }

//It will always execute a condition once when the condition will false as below 
// let num=21
// do{
// debugger;
//     console.log(num)
//     num++
// }while(num <=10)


// for(var num=0; num<=10;num++){
//     debugger;
//     console.log(num)
// }

//we can write any number and get the table till 10(8,9,11,12s)
// var numb=prompt("write table")
// for(var i=1;i<=10;i++){
//     console.log(numb +" x " + i + " = " + numb * i )
// }
// console.log(`${numb} x ${i} = ${numb*i}`) This is another way via template literals


// function sum(a,b){  //<-- This block is parameter
//     // var a=20, b=20;
//     let total=a+b
//     console.log(total)
// }
// sum(20,30) //<-- This block is argument 


// function multipy(a,b){
//     let mul=a*b;
//     console.log(mul)
// }
// multipy() //The result will NaN ,beacuse hum two values to except kar rahyee ha  jab bi function call kia jayee ga tou do values milyee gi agar nahi tou phir --> NaN
// multipy(10,10)
// multipy(30,20)

// function add(a,b) {
//     let total=a+b;
//     console.log(total)  
// }
// let results=add(10,50);
// results;

// function Add(a,b) {
//    return total=a+b    
// }

// let result=Add(20,50);
// console.log("This is mu addition value " + result)


//function expression-->we just put a varaiable to function 
// function  Adding(a,b,c) {
//     return total=a+b-c
// }
// var result=Adding(25,25,10);
// console.log("The Answer of A,B and C is " + result)


//if we just start from function till {} then it is anaymous function and 
// if we put varaible name then it will call anaonymus function expression 
// var mainFunction=function (a,b) {
//     return total=a+b;
// }
// let result=mainFunction(40,20);
// console.log(result)

// var anotherFunction=function (a,b) {
//     return results=a+b
// }
// console.log(anotherFunction(10,10))

// function paras(a,b) {
//     return get=a-b;
// }
// console.log(paras(20,10))