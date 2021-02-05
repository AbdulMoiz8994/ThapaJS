// var names="abdul moiz i am doing js"
// var word=names.split(" ")
// console.log(word)   // let names="abdul moiz khanzada";


// for(var i=0; i<word.length; i++){
//     // word[i]=word[i][0].toUpperCase() + word[i].substring(1)
//     word[i]=word[i][0].toUpperCase().concat(word[i].substring(1)) //both are same

// }
// console.log(word)
// var strings=word.toString()
// var replaces=strings.replace()
// // cons we can not use outside of this scope ole.log(names)(/,/g," ")
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
    // console.log(numb +" x " + i + " = " + numb * i )
// }
// console.log(`${numb} x ${i} = ${numb*i}`) //This is another way via template literals


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


//if we just start from function keyword till {} then it is anaymous function and 
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

// debugger;
// let functions=function (a,b) {
//    return a+b;    
// }
// let results=functions(20,100);
// console.log(results);

//let vs const vs var

//fine
// var names="abdul moiz";
// console.log(names);

// names="Abdul moiz attari";
// console.log(names)

//fine
// let names="abdul moiz";
// console.log(names);

// names="Abdul moiz attari";
// console.log(names)

//it will give error we can one vaue with one variablename
//  const names="abdul moiz";
//  console.log(names);

//  names="Abdul moiz attari";
//  console.log(names)


// function scoping() {
//     let names="abdul moiz";
//     console.log(names);
    
//    if(true){
//     let lastName="attari";
//     console.log("Inner scope " + lastName);
//     console.log("Inner scope " + names)
//    }
//   console.log("outer " + lastName) //give an error we are calling outside
// }
// console.log(names) we can not use outside of this top of scope 
// scoping()


// function reuse() {
//     let firstName="Abdul";
//     console.log(firstName)
//     firstName="Abdul moiz"
//     console.log(firstName)
//     if (true) {
//        console.log("Now we are inner scope " + firstName)        
//        let lastName="Abdul moiz khanzada"
//        console.log(lastName)
//     }
//     console.log("last line " + firstName);
//     // console.log(lastName); //error
// }
// reuse()

//template literal
// let table=prompt("write table")
// for(let i=1; i<=10;i++){
//     console.log(`${table} x ${i} =${table*i}`)
// }

//default parameter

// function defaults(a,b=20,c=10) {
//     return a+b,c;
// }
// console.log(defaults(20))

//if we give one value in argument and req 2 or more then it will give us NaN
//first value of argument assign to first parameter


// function names(a,b=20) {
//    return a/b;    
// }
// console.log(names(27,10))
//if we write like this in default parameter then it wil get the values of argument only not from parameter value of 20 etc.

// function names(a,b=10) {
//     return a/b;    
//  }
//  console.log(names(27))


// console.log(sums())
// function sums(){
//     let a=70,b=30
//     return a+b
// }

//fat arrow function
//arrow function ma phala define hota ha bad ma call hota ha

// const arrow=() =>{
//     let a=5,b=20;
//     let result=a+b
//     return `this is a value of A and B = ${result}`
// }
// console.log( arrow())


// const arrow=() =>{
//     let a=20,b=80
//     return `this is a value of A and B = ${a*b}`
// }
// console.log( arrow())


// const arrow=() =>{
//     return `this is a value of A and B = ${(a=10)-(b=100)}`
// }
// console.log( arrow())


// const arrow=() => `this is a value of A and B = ${(a=500)/(b=100)}`

// console.log( arrow())

// const arrow=(a,b) =>{
//     return `this is a value of A and B = ${a+b}`
// }
// console.log(arrow(20,30))



//Array 

//new keyword make a new instance of this class
//let  --> new instance of an array myFriends= new Array  <-- class



// let myFriends= new Array;  <-- This is an optional now dirctly make an arrray
// myFriends=["abdul moiz","abdul rafay","abdullah","shahrukh"];
// console.log(myFriends)


// let myNames=["Abdul","Moiz","Khanzada","Attari","Rajput"];
// individually we access
// console.log(myNames[1]);

// console.log(myNames[myNames.length -1]);
 // console.log(myNames.length)
// debugger;
// let myNames=["Abdul","Moiz","Khanzada","Attari","Rajput"];
//  for(let i=0;i<myNames.length;i++){
//      console.log(myNames[i])
//  }

//Es6 for...in  and for...of
//for in ma indexes nub show karta ha and for of ma array ka elments batata ha
// let myNames=["Abdul","Moiz","Khanzada","Attari","Rajput"];
// for(let elements in myNames){
//     console.log(elements)
// }

// for(let elements of myNames){
//     console.log(elements)
// }

// Array.prototype.forEach() method  call a function for each element to an array
// let myNames=["Abdul","Moiz","Khanzada","Attari","Rajput"];
// myNames.forEach(function(elements,index,array){
//     console.log(`${elements} value = ${index} and array is = ${array}`)
// })

// let myNames=["Abdul","Moiz","Khanzada","Attari","Rajput"];
// myNames.forEach((elements,index,array) =>{
//      console.log(`${elements} ${index} ${array}`)
// })

//These are for searching
// let myFriends=["Abdul moiz","Abdul rafay","Abdul Malik","Abdullah","Rizwan","Abdul moiz"];
// console.log(myFriends.indexOf("Abdul moiz")) --> always give us index number start from 0 
// console.log(myFriends.indexOf("Abdul moiz",2)) //--> start from 2 index num till go end 


//same as indexof but start from last index number
// let myFriends=["Abdul moiz","Abdul rafay","Abdul Malik","Abdullah","Rizwan","Abdul moiz"];
// console.log(myFriends.lastIndexOf("Abdul moiz"))
// console.log(myFriends.lastIndexOf("Abdul rafay",4))

//retrun true or false and find forward start from 0
// let myFriends=["Abdul moiz","Abdul rafay","Abdul Malik","Abdullah","Rizwan"];
// console.log(myFriends.includes("Abdul moiz"))
// console.log(myFriends.includes("Abdullah",4))


// let price=[200,300,340,400,450,700,900,1000];
// const result=price.find((elements,index,array) =>{
//     return elements < 450
// })
// console.log(result)

// const result=price.find((elements) => elements < 450)
// console.log(price.find((elements) => elements > 1150)) //result undefined

// let price=[200,300,340,400,450,700,900,1000];

// const result=price.findIndex((currentValue,index,array)=>{
//     return currentValue >700
// })
// console.log(result)

// const result=price.findIndex((currentValue) => currentValue < 450)
// console.log(result)


// const result=price.findIndex((currentValue) => currentValue < 100)
// console.log(result) // result will -1

//find ma condition satisfy nahi hoti ha ha tou undefined
//findIndex ma condition satisfy nahi hoti ha tou -1 

//filter // retrun new array of containing values
// let price=[200,300,340,400,450,700,900,1000];
// const result=price.filter((currentValue,index,array) =>{
//     return currentValue < 560;
// })
// console.log(result)  


// let price=[200,300,340,400,450,700,900,1000];
// const result=price.filter(function(currentvalue){
//     return currentvalue > 1200;

// })
// console.log(result);

// let price=[200,300,340,400,450,700,900,1000];
// const result=price.filter((currentvalue) =>{
//     return currentvalue > 1200;

// })
// console.log(result); // result empty []


// let para="my name is abdul moiz";
// let result=para.split(" ")
// console.log(result)
// for(let element of result){
//    element=element[0].toUpperCase() + element.substring(1)
//    console.log(element)
// }

// let results=result.toString()
// let replace=results.replace()
// console.log(replace)

//sort() method

// let months=["jan","feb","march","april","may","june","augest","nov","dec"]
// console.log(months.sort())

//it give us incorrect answer when we do sorting to numbers,because it converts in string to number then compare
// let arr1=[1,2,3,4,20,35,1000,99,22];
// console.log(arr1.sort());

//push() method
// const animals=["cat","cow","chicken","monkey","hen"]
// console.log(animals)
//add one
// const Adding=animals.push("bander")
// console.log(animals)
// console.log(Adding)
//add multiple
// const Adding=animals.push("bander","lion","tigger")
// console.log(animals)
// console.log(Adding)

//unsift() method

// const names=["abdul","moiz","khanzada","malik","rafay"];
// console.log(names);
//adding one
// const adding=names.unshift("abdullah")
// console.log(names)
// console.log(adding)

//adding multiple
// const adding=names.unshift("abdullah","rizwan","faizan")
// console.log(names)
// console.log(adding)

//pop() method
//remove from last retrun that removing elements
// const names=["abdul","moiz","khanzada","malik","rafay"];
// console.log(names);

// const get=names.pop();
// console.log(names.pop())
// console.log(names)
// console.log(get)

//shift()
//remove from starting  retrun that removing elements
// const names=["abdul","moiz","khanzada","malik","rafay"];
// console.log(names);

// console.log(names.shift())
// console.log(names.shift())
// console.log(names)

// const months=['jan','feb','march','april','june','july','augest'];

// const addMonth=months.splice(months.length,0,'dec')
// console.log(months)

// console.log(addMonth)  //it gives us empty[] now because we are not delete anything from an array


// const months=['jan','feb','march','april','june','july','augest'];

// const updateMonth=months.splice(2,1,"March")
// console.log(months)
// console.log(updateMonth)

// const indexOfMonth=months.indexOf("march");

// if(indexOfMonth != -1){
//    const updateMonth=months.splice(indexOfMonth,1,"March")
//    console.log(months)

// }else{
//     console.log("Data does not find")
// }




// const months=['jan','feb','march','april','june','july','augest'];

// const indexOfMonth=months.indexOf("june");
// // console.log(indexOfMonth)
// if(indexOfMonth != -1){
//    const updateMonth=months.splice(indexOfMonth,1)
//    console.log(months)
//    console.log
//    (updateMonth)

// }else{
//     console.log("Data does not find")
// }


// const indexOfMonth=months.indexOf("june");
// console.log(indexOfMonth)
// if(indexOfMonth != -1){
//    const updateMonth=months.splice(indexOfMonth,Infinity)
//    console.log(months)
//    console.log
//    (updateMonth)

// }else{
//     console.log("Data does not find")
// }

//map() method


// const names=["abdul","moiz","khanzada","attari","malik","rafay"];

// let result=names.map((currentValue,index,array)=>{
//       return `The indexes are ${index} ${currentValue} and array ${array}`
// })
// console.log(result);
// console.log(names);

// const number=[24,30,45,62,72,56,83];
// //it retruns array of true and false
// let result=number.map((currentValue,index,array) =>{
//     // return currentValue < 72
//     return `The index no= ${index} and the value ${currentValue} belong to an array ${array}`
// })
// console.log(result)
// console.log(number);

// //it retruns undefined
// let results=number.forEach((currentValue,index,array) =>{
//      currentValue < 72
// })
// console.log(results)
// console.log(number);

//The map does not mutating orginal array ,but forEach does
//we can use w multiple method with map method 


//challanges
//square of this numbers
// debugger;
//  let numbers=[25,36,49,64,81,100,5];

//  let numbsqu=numbers.map((currentValue) =>{
//     return Math.sqrt(currentValue)
//  })
// console.log(numbsqu)
// console.log(numbers)

// let numbers=[2,3,4,6,8];

// let mul=numbers.map((currentValue) =>{
//      return currentValue*2
// }).filter((currentValue) =>{
//       return currentValue >10
// });
// console.log(mul)
// let numbers=[2,3,4,6,8];

// debugger;
// let mul=numbers.map((currentValue) => currentValue*2).filter((currentValue) =>currentValue >10).reduce((accumulator,currentValue) => accumulator +=currentValue);
// console.log(mul)


//reduce method
// let numbers=[2,4,5,8];

// let result=numbers.reduce((accumulator,currentValue) =>{
//     //  return currentValue=accumulator + currentValue //we can write like this below 
//     return accumulator +=currentValue
// })
// console.log(result)

// let numbers=[2,4,5,8];
//we can give inital value to accumulator like below 7
// let result=numbers.reduce((accumulator,currentValue) =>{
//     debugger;
//     return accumulator *=currentValue
// },7);
// console.log(result)


//This is two dimensional 2d array into array we make one dimensional
// const arr=[
//     ['zone1','zone2'],
//     ['zone3','zone4'],
//     ['zone5','zone6'],
//     ['zone7','zone8'],
// ]

// let result=arr.reduce((accumulator,currentValue) =>{
//     // debugger;
//       return accumulator.concat(currentValue)
// })
// console.log(result)
// console.log(arr)

//The last nested array is not concatinating.we will see in ES2020 how to concate all values in one array only 
// const arr=[
//     ['zone1','zone2'],
//     ['zone3','zone4'],
//     ['zone5','zone6'],
//     ['zone7','zone8',['zone9','zone10']],
// ]

// let result=arr.reduce((accumulator,currentValue) =>{
//     // debugger;
//       return accumulator.concat(currentValue)
// })
// console.log(result)
// console.log(arr)

// string js
// let myName="Abdul moiz";
// let myYoutube='Abdul moiz';

// This is a string constructor
// let fullName= new String("Abdul Moiz Attari")
// console.log(fullName)

// console.log(myYoutube);

//retruns the length of string

// let myName="Abdul moiz";
// console.log(myName.length)

// escape character
//humara JS as a error na parkar sakyee tou ya ha during the text when we use special character

// let text="My name is \"abdul moiz\" and I did my intermediate";
// console.log(text)

// alternative way we use single quote outside inside double
// let text='My name is "abdul moiz" and I did my intermediate';
// console.log(text)

// Another way we use double quote outside inside single
// let texts="My name is 'abdul moiz' and I did my intermediate";
// console.log(texts)

// finding  string in a string

// let myName="I am abdul moiz";
// console.log(myName.indexOf('abdul'))

// let myName="I am abdul moiz";
// console.log(myName.indexOf('i',3))

//lastindexof start from last to see string's character
// let myName="I am abdul moiz";
// console.log(myName.lastIndexOf('m',10))

//if string does not find answer will be -1 .In string the space also get index nub also 


//serach() method.It can not get second position in method as indexof .If answer does not find -1 retrun
// let myName="I am abdul moiz";
// let result=myName.search("moiz");
// console.log(result);
//retrun the position of the match


// let text="My name is abdul moiz and I did intermediate";
// it will not change original value.The given end argument will not be include.
// const result=text.slice(0)
// const result=text.slice(-5) //retrun last 5 character
// console.log(result)

//like here on 0 position M and in 1 y but it will not add remember
// const result=text.slice(0,1)
// console.log(result)


// const result=text.slice(0,2)
// console.log(result)

//it will remove last 7 character
// const result=text.slice(3,-7)
// console.log(result)

//challange in social media we can not more than 280 character,here we are doing same we have 300 but we use slice method.
// let text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, expedita corporis numquam sed esse culpa dolore ipsa deserunt harum corrupti quaerat, blanditiis in id! Eligendi tempore possimus eius unde praesentium?Quod nobis ab repellat sed incidunt eveniet quaerat, beatae harum inventore nesciunt"
// const result=text.slice(0,280)
// console.log(result.length)
// console.log(result)

//subString it is not support - minus numbers(negative) as we did in slice()
// let subStrings="Abdul, moiz, khanzada";
// let result=subStrings.substring(8,-1); //start from 0 ondex till go 7 index
// let result=subStrings.substring(0,8);
// let result=subStrings.substring(8); //start from 8 index
// console.log(result)
// jasa 6 arguments sa la kar end tak retrun karwado


// let strings="Abdul moiz, Abdul rafay, Abdul malik";
// let result = strings.substring(11,-1) //negative shows that it starts from o index number
// console.log(result)

// let strings="Abdul moiz, Abdul rafay, Abdul malik";
// let result=strings.substr(0,8);
// let result=strings.substr(-4); //last 4 character will come in retrun 
// let result=strings.substr(5,-8); //nothing will come
// console.log(result)

// let strings="abdul moiz, abdul rafay, abdul malik";

// let result=strings.replace(/abdul/g,"Abdul"); //globally
// let result=strings.replace("abdul","Abdul"); //by defaul it change first find word
// let result=strings.replace("Abdul","Abdul"); //not change  case sensitive
// console.log(result)
// console.log(strings)


//charAt() method
//it retruns the value/string of index number which we give 
// let  strings="abdul moiz, abdul rafay, abdul malik";

// let result=strings.charAt(12);
// let result=strings.charAt(-6);// nothing retrun
// console.log(result)

// let strings="Hello world";
// let result= strings.charCodeAt(0);
// console.log(result)

//challange
// let strings="Hello world";
// let result=strings.length -1;
// console.log(strings.charAt(result));
// let finalresult=strings.charCodeAt(result); //resut 100 in uni-code
// console.log(finalresult)

//property access [] it is just like an array but in string it is property access
// let strings="Hello world";
// let result=strings[2];
// console.log(result)

// let names="Abdul moiz"
// let namesd="Abdul mOIz"

// console.log(names.toUpperCase());
// console.log(namesd.toLowerCase())

// let fName="Abdul";
// let lName="moiz";

// console.log(fName + lName)
// console.log(`${fName} ${lName}`) // this is best way
// console.log(fName.concat(lName))
// console.log(fName.concat(" ",lName)) //if we want to give space in concat method then we will use --> " ",

//trim()remove whitespace from both side 
// let myName="        abdul moiz       ";
// let myName="        abdul      moiz       ";// not between the words space will remove 
// console.log(myName.trim())

// split() method convert string into array

// let strings="a,b,c,d";
// let strings="a,b | c,d";

// console.log(strings.split(" "));
// console.log(strings.split(","));
// console.log(strings.split(" | ")); // make the parts

//Date and Time
//The date object is created with new date constructor
//jab new  dekyee tou hum usi object ka constructor create kar rahee ha
//new ka matlab ya ha hum ak new instance create kartee ha via Date class abhi ka liyee
// let currentdate=new Date();
// console.log(currentdate)

// console.log(currentdate.toString())
// console.log(currentdate.toLocaleString())//perfect time will give us locally of our country
// console.log(Date.now())


//There are seven arguments in Date object
// let localTime= new Date(2021,01,1,7,15,30,0);
// let localTime= new Date(2021,01,1,17,15,30,0);
// console.log(localTime.toLocaleString())


//new Date(datestring)
// let localTimes= new Date("2021 octubar 20 10:50:45");
// console.log(localTimes)
// console.log(localTimes.toLocaleString())

// console.log(Date.now())
// let million=new Date(1612172345398);
// console.log(million.toLocaleString())

// let million=new Date(0);
// console.log(million)// it will retrun use standered time and since 1970
// console.log(million.toLocaleString())


// let million=new Date(1000000000);
// let million=new Date(86400000*2) //ak din ma itna second hotee gar do sa multiply karee ga tou 3 ayee ga ,beacuse 1 day ka ha
// console.log(million.toLocaleString())
//get date() methods
// const dates= new Date()
// //to get individual data
// console.log(dates.toLocaleString())
// console.log(dates.getFullYear())
// console.log(dates.toLocaleDateString()) 
// console.log(dates.getMonth()) //from 0 to 11
// console.log(dates.getDate())
// console.log(dates.getDay())


//time() get dates

// let dates=new Date();

// console.log(dates.getTime()); //this time method will retrun the number in milliseconds since 1 jan 1970
// console.log(dates.getHours())
// console.log(dates.getMinutes())
// console.log(dates.getSeconds())
// console.log(dates.getMilliseconds())

// for current date only
// let date= new Date().toLocaleDateString()
//for current date only
// let date= new Date().toLocaleTimeString()
//date and time only
// let date= new Date().toLocaleString()


//There are set() method as well

// now we do math object
// math object allow us to perfrom differnet tasks with on numbers

// console.log(Math.PI)

//round method() after decimal if value is above or == 5 then result will covert to 3 into 4,if less then 5 then result will 3
//retruns the value of x rounded to its nearest integer ,pos and neg values hoti ha usko integer khatyee ha
// let num=3.721;
// console.log(Math.round(num))

//it is just like the 2**6
// console.log(Math.pow(2,6))

//give the square root //interview question
// console.log(Math.sqrt(100)); 
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(19));            

//the math absolute method() allways retrun the positive value
 

// let numbers=-55;
// console.log(Math.abs(numbers));
// console.log(Math.abs(-299));
// console.log(Math.abs(4-10))

// ceill() method give the increaing number
// console.log(Math.ceil(4.4)) 
// console.log(Math.ceil(4.58)) 
// console.log(Math.ceil(4.1)) 
// console.log(Math.ceil(99.9)) 
// console.log(Math.round(4.4)) 
// console.log(Math.ceil(-4.9)) //-4


//floor() method  
// console.log(Math.floor(4.4)) 
// console.log(Math.floor(4.9)) 
// console.log(Math.floor(4.2)) 
// console.log(Math.floor(4.7)) 
// console.log(Math.floor(-4.4)) //-5

// min and max method() 
//max find the higest value
//min find the lowest value
// console.log(Math.max(0,1,100,-200))// asnwer 100
// console.log(Math.min(0,100,30,-1000)) //answer -1000


//evertime it will give us diff values from 0 to 1
// console.log(Math.ceil( Math.random()*10))
// console.log(Math.random()*10)
// console.log(Math.floor( Math.random()*10))

//math.trunc() retruns the integer ,which is before decimal
 //decimal sa phala values deyee ga kuch bi do chahyee neg and pos
// console.log(Math.trunc(4.9))
// console.log(Math.trunc(99.9)) 
// console.log(Math.floor(-99.91))

// practice time
// if the argument is positive ,math.trunc() is equavalent to math.floor()
//if in math.trunc(-99) there is negative value it will work like math.ceil() or equavalent

//interview question diff trunc and floor ,trunc ceil and round
 
//positive
// console.log(Math.trunc(99.9)) 
// console.log(Math.floor(99.91))
// //negative
// console.log(Math.trunc(-99.9)) 
// console.log(Math.ceil(-99.9))


// DOM and BOM

//basically Document object Model is the child of windows.And we play in DOM with html elements 
//and also Browser object Model is the child of windows. 
// In Bom we have functions alert/confirm/prompt are the part of BOM ,they are not directly part of document

//BOM Example

// alert(location.href)  //give the current website address
// if (confirm("Want to Visit GOOGLE")) {
//    location.href=("https://www.google.com/")    //redirect to above website to this website 
// }



//In DOM 
//we can check that whether an element has child node or not?
// via .haschildNodes()

//how to find child in DOM Tree
// four ways
