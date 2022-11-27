console.log('hello world','ysfsyu')
//this is single line comment
/*this
is 
multi line
*/
var person = "jonh"
console.log("hello",person)
var greeting ="helo"
console.log(greeting,person)
greeting="hi"
console.log(greeting,person)
//assignment meta
var petDog="Rex"
var petCat="pepper"
console.log("My pet cat's name is: ",petCat)
console.log("My pet dog's name is: ",petDog)
var catSound="purr"
var dogsound="woof"
console.log(petDog,"says",dogsound)
console.log(petCat,"says",catSound)
catSound="meow"
console.log(petCat,"says",catSound)
//primitive datatypes
//strings,numbers,boolean,null,undefined,bigint,symbol
//string can have both ""+''
//null and undefined is used to show no values
//operator
//assignment op
//+  -  *  /
//comparison op
// >  <  ==  !=
//logical op
//&& -and /check for both conditions to be true /a>5 && a<10
// ||-or /check for at least one condition To be true/ 
// ! -not / returns false if the result is true /!(a>5)

console.log(10==10)
console.log(3>2)
console.log(5>6 && 5<10)
console.log(7>6 && 5<10)
console.log(5>6 || 5<10)
console.log(!(5<6))
console.log(10**4)
console.log(10**2)
console.log(10%4)
console.log(100=="100")
console.log(100==="100")
console.log(1!=1)
console.log(1!=="1")
var currenttime=10;
console.log(currenttime > 9 && currenttime < 12)
console.log(100+"days")
console.log("net","work")
console.log("net"+"work")
//if(condition==true)
//{execute the code}
//ifelse
// to more condition else if {}added
//switch is used for many condition
//else if assignment
var light;
if(light == "green") {
    console.log("Drive")
} 
else if (light == "orange") {
    console.log("Get ready")
} 
else if (light == "red") {
    console.log("Dont' drive")
} 
else {
    console.log("The car is not green, orange, or red");
}
//switch
light= "red"
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
 }
 //asigment meta
 var age=100
 if(age>=65)
 {
    console.log("You get your income from your pension")
 }
 else if(age<65 && age>=18)
 {
    console.log("Each month you get a salary")
 }
 else if(age<18){
    console.log("You get an allowance")
 }
 else
 {
    console.log("The value of the age variable is not numerical")
 }
//swith assignment by meta
var day='sunday'
switch(day){
 case  "monday" : console.log("today is monday")
                  break;
 case "tuesday":
    console.log("today is tuesday");break;

 case "wednesday":
    console.log("today is Wednesday")

 case "Thursday":
    console.log("Thursday")
    break;
 case "Friday":
    console.log("Friday")
    break
 case "Saturday":
    console.log("Saturday")
    break
 case "sundaS":
    console.log(" today is sunday no gym")
    break
    default:
        console.log("sunday is fun day")
}
//for while nested
for(var i=0;i<10;i++)
{
   console.log(i)
}
//while
var j=0
while(j<6)
{
   console.log(j**2)
   j++
}
//count down for loop
for(var f=10;f>0;f--)
{
   console.log(f)
}
console.log("happy new year")
//count down while loop
var g=3
while(g>0)
{
   console.log(g)
   g--
}
console.log("happy new year")
var year=2018;
while(year<=2022)
{
   console.log(year)
   year++
}
//nested
for(var week=1;week<3;week++)
{  
   
   for(var days=1;days<=7;days++)
   {
      console.log("week",week,"days",days)
   }
}
//meta assign
for(i=1;i<=10;i++)
{
   if(i==1)
   {
      console.log("gold medal")
   }
   else if(i==2)
   {
      console.log("silver medal")
   }
   else if(i==3)
   {
      console.log("bronze medal")
   }
   else{
      console.log(i)
   }

}
//meta assign
for(i=1;i<=10;i++)
{
  switch(i){
   case 1:
      console.log("gold medal")
      break
   case 2:
      console.log("silver medal")
      break
   case 3:
      console.log("bronze medal")
      break
   default:
      console.log(i)

   }

}
//Function is used to avoid repeated writing of code
function Hell(){
   console.log("hello")

}
Hell()
Hell()
function add()
{
   var a=10;
   var b=20;
   var c=a+b
   console.log(c)
}
add()
//parameter instead of variables f g are parameter
//any number pulged in as argument 20 2 are argu
function sub(f,g)
{
   c=f-g;
   console.log(c)
}
sub(20,2)
sub(9,8)
//array
var car1=10;
var car2=20;
var car3=30;
var car4=40;
var train1=[10,20,30,40]
console.log("train1[1]",train1[1])
//meta array as parameter for function
function arraylisting(train)
{
   for(var i=0;i<train.length;i++)
   {
      console.log(i,"th element=",train[i])
   }
}
var color=["red","orange",1,2]
arraylisting(color)
//meta  assign
function letterFinder(word,match)
{
   for(i=0;i<word.length;i++)
   {
      if(word[i]==match)
      {
         console.log('Found the', match, 'at', i)
      }
      else
      {
         console.log('---No match found at', i)
      } 
   }
}
letterFinder("test","t")
//object is collections of related properties.properties are represented as keyvalue pair. socialskill is property key and 50 is property value.socialskill=50;
var manager={talk:50,hack:60}
manager.socialskill=50;
manager.communication=90;
manager['move']=30;
console.log(manager)
//car
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
//arrays are object in js
var fruits=[]
fruits.push("pear")
fruits.push("apple")

console.log(fruits)
fruits.pop()//remove last apple
console.log(fruits)

function arraylist(a,b,c)
{
   var arr=[]
   arr.push(a)
   arr.push(b)
   arr.push(c)
   //console.log(arr)
   return arr;
}
var ab=arraylist("apples","banana","chips")
console.log(ab)
// number constants of math object

console.log(Math.PI)
console.log(Math.E)
console.log(Math.LN2)

//rounding method of math object

console.log(Math.ceil(4.556))//round to next integer
//.floor .round .trunc

//arithmetic and calculus methods


console.log(Math.pow(2,3))
console.log(Math.sqrt(16))
console.log(Math.cbrt(8))
console.log(Math.abs(-10))
console.log(Math.log(7))

console.log(Math.log2(4))
console.log(Math.log10(6))
console.log(Math.min(9,8,7))
console.log(Math.sin(2))
console.log(Math.cos(10))
console.log(Math.tan(19))
console.log("random method")
console.log((Math.random()))
var decimal=Math.random()
console.log(decimal)
// string not an array in js but it work like array
var str="arunreddy"
for(i=0;i<str.length;i++)
{
   console.log(str[i])
}
var str2="pooped -"
//console.log(str2.pop())   it will not work
console.log(str,str2);
console.log(str+str2)
console.log(str.concat(str2)) 
//string method
console.log("string method")
console.log(str2.length)
console.log(str2.charAt(1)) 
console.log("color".concat(" of the ").concat(str2))
console.log(str2.indexOf("-"))
console.log(str.toUpperCase())
// meta assignments
var clothes=[];
clothes.push(4,"pants","tshirts","tie","jeans");
console.log(clothes)
clothes.pop()
console.log(clothes)
clothes.push("h&m")
console.log(clothes)
console.log(clothes[2])
// meta object literals
var favcar={}
favcar.color="red";
favcar.covertible=true;
console.log(favcar)
//object methods
//an object consists of key-value pairs, known as properties.​
//We can add new key-value pairs to existing objects using the dot notation and the assignment operator.
//If the function is a property of an object, it is then referred to as a method. 
//This is a function that can be accessed only through the JavaScript object that it is a member of​ 
//the log method, which belongs to the console object, can only be accessed through the console object.​

//console.log('Hello world'); ​ 
var car={};
car.mil=35
car.color="red"
console.log(car)
car.turnkey=function(){
   console.log("engine is started")
}
console.log(car)
car.lighton= function(){console.log("light is on ")}
console.log(car)
//function is called
car.lighton()
// typeof operator
var test=typeof("what")
console.log(test)
var test=typeof('gg')
console.log(test)
var test = typeof(4)
console.log(test)
var test=typeof(45.55)
console.log(test)
var test=typeof(1<2)
console.log(test)
var test =typeof([1,2,3])//array in js are objects
console.log(test)
var test =typeof({1:3})
console.log(test)
var test=typeof(function(){console.log("abc")

})
console.log(test)
//bugs and errors
function add2no(a,b)
{
    console.log(a+b)
}
add2no(1,"5")
//this is bug becuse it work but not in the way we expected
//console.log(w+m)
console.log("   .....this line never runs........    this is error code after that never executes.error get thrown execution stops" )
//error handling
//try catch (thrown is raped inside a try block then catch it do some things) 
try
{  console.log(a+b)}catch(err){console.log("error occure")}
console.log("this line runs")
//no error
try
{  console.log(ab+ab)}catch(err){console.log("error occure")}
console.log("this line runs")
//throwing artifical new referenceerror();
try
{
 throw new ReferenceError()
}catch(err){
   
}
console.log("this line  runs without stop")
//A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.
//Any kind of invalid JavaScript code will cause a SyntaxError.
//There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block. 
//A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
//The array-like behavior of strings was already covered in an earlier lesson in this course. 
//"helo".pop()
//However, as can be confirmed by running the above line of code, strings do not have all the array methods readily
// available to them,
// and trying to use some of those methods will result in a TypeError being thrown



//null undefined empty
//null
var letter="about"
console.log(letter.match( /a/ ));
console.log(letter.match( /n/ ));
console.log("har hh")

//meta assignments
function addTwoNums(a,b){
 try{
   if(typeof(a)!='number')
   {
      throw new ReferenceError("the first argument is not a number");
   }
   else if(typeof(b)!='number')
   {
      throw new ReferenceError("the second argument is not a number");
   }
   else{
      console.log(a+b)
   }
   
   }catch(err){
      console.log("error!",err)
   }
}
addTwoNums(5,"5")
console.log("its still working")
// meta assi
console.log('.........');
function letterFinder(word, match) {
   var condition1=(typeof(word) == 'string' && word.length >= 2)
   var condition2=(typeof(match) == 'string' && match.length == 1)
   if(condition1 && condition2)
   {
   for(i = 0; i < word.length; i++)
   {

       if(word[i] == match) {
           console.log('Found the', match, 'at', i)
       } else {
           console.log('---No match found at', i)
       }
   }
   }
   else
   {
     console.log("please pass a correct arguments to the fuction ")
   }
}
letterFinder("ee hehb","hh")
//functional programming
var currencyOne=100;
var currencyTwo=0;
var exchangeRate=1.2;
function convert(amount,rate)
{
  return amount*rate
}
currencyTwo=convert(currencyOne,exchangeRate)
console.log(currencyTwo)
//custom function by default
function consoleLog(val) {
   console.log(val)
   return val
}
consoleLog("heloo")

//meta assignment // using calling function as argument
var hum;
function doubleIt(numb)
{
   return hum=numb*2;
   
}
doubleIt(5)

consoleLog(hum)
function ret(num2)
{
   return cb=num2
}
ret(doubleIt(100))
consoleLog(cb)


//function calling and recursion 
//endless loop
/*function loo()
{
   console.log("this will run until end")
   console.log("this will run until")
   console.log("this")
   loo()
}
loo()
console.log("end of this loop")
*///this will not end 
counter=5
console.log(typeof(counter))
function loo()
{
   console.log(counter)
   counter--
   if(counter===-1){return}
   loo()
}
loo()//this will run until -11282 if u dont put if(counter===-1){return}
//recursion is way to run a repetitive code without the use of loop.When a function calls itself, this is known as 



//scope
console.log(".........scope......... is all about code accessibility ")
//accessible and non accessible
var num1=10 //global scope
function scored()
{
   var num2=20;//all the code inside of a function is called local scope
   console.log(num2)

}



//"There are actually several styles of coding, also known as paradigms.
/*When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
In functional programming, functions return new values and then use those values somewhere else in the code.*/
function getDistance(mph, h) {
   return mph * h
}
var mph = 60;
var h = 3;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!


/*Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
*/


//var vs let vs const
console.log(user)
var user
console.log(user)
var user="visnu"
var user="aysha"
console.log(user)
//console.log(user1)
let user1
console.log(user1)
//let user1=1; systex error 


//object op

var purchase={
    tax:1.2,
    price:50,
    totalprice: function()
    {
      var calculate=this.tax*this.price;
      console.log("totalprice:",calculate);
      //return calculate
    }

}
purchase.totalprice();


//purchase2


var purchase2={
   tax:1.2,
   price:500,
   totalprice: function()
   {
     var calculate=this.tax*this.price;
     console.log("totalprice:",calculate);
     //return calculate
   }

}
purchase2.totalprice();


//two objectes with differnt name but same time
//to avoid over repeating codes we use class
// to avoid this keyword
//class is the templete for objects.to create new objects
//class are blue print that can be reapeatedly used to create new object of certain kind
/*


instead of creating many objects . we can use a class as template and we can reuse the code in it 





*/
//functional p
var tax=1.2
var price=2000;
function total(tax,price)
{
   return tax*price;

}
var topay=total(tax,price)
console.log("total price:",topay)


