//num1=r.question('enter a number')
var num1=1000
var num2=1001
if(num1>num2)
{
    console.log(num1,"is the biggest number")
}
else if(num1===num2)
{
   console.log(num1,"==",num2)
}
else
{
    console.log(num2,"is the biggest number")
}
//loop even no
for(i=0;i<=100;i++)
{   if(i%2==0)
    {
        console.log(i)
    }
    
}
//loop odd no
for(i=0;i<=100;i++)
{
    if(i%2==1)
    {
        console.log(i)
    }
}
for(i=2;i<=100;i=i+2)
{
    console.log(i)
}

///pattern printing
var pat=""
for(var i=1;i<=10;i++)
{   
    for(var j=0;j<i;j++)
    {
        pat +=" *"
    }
    pat +="\n"
}
console.log(pat)
//function
console.log("******return in function ********")
function hel()
{
    console.log("string")
    return 10;
}
val=hel()
console.log(val)
//object
console.log("******object********")
var person={
    name:"sharafath"
    ,age:21,
    place:"eranakulam",
    display:function(){
        console.log("this is the details of person")
    }
    
    
}
//console.log(person.display1())
console.log(person)
for(i in person){
    console.log(i)
    console.log(person[i])
}
person.name="aysha"
for(i in person){
    console.log(i)
    console.log(person[i])
}
person.display1=function(){
    console.log(this.age)}
console.log(person.display1())


//object constructor // this is basic model

function person1(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("name:",this.name,"age:",this.age,"place:",this.place)
    }
}
var sharafath=new person1("sharafath",25,"kannur")
sharafath.display()


//date 
var birth=new Date()
console.log(birth)
console.log(birth.getDate())
console.log(birth.getFullYear())


//new version of js
var nj=10
var nj=20
console.log(nj)


let hell=10
//let hell=20 cannot do this
hell=20 // is possible
//let 's scope is only within {} a block

const aaj=30
//j=90 cannot change
console.log(aaj)

// const array
const array=["rafi","aysha","fifa","cr7"]
array.push("sn")
console.log(array)

// default argument

function sum(num1,num2=100)
{
    console.log(num1+num2)
}
sum(10,undefined)

//class

class sample{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
        console.log(num1+num2)
    }
    fifa(){
      console.log("this is",this.num2+this.num1,"th fifa match in this season")
    }
}
var obj=new sample(2,3)
obj.fifa()


// inheritence
class sm{
    j(){
    console.log("this is from sm class")
    }
}
class fif extends sm{
    
    fm(){
     super.j()
    }
}
var obj1=new fif()
obj1.fm()
obj1.j()



//arrow function


function add(a,b){
    return a+b
}
console.log(add(1,29))


//short form
var add1=(a,b)=>a+b
console.log(add(1,329))


//time difference
var df=new Date()
for(i=0;i<1000;i++){
    console.log("loop")
}
console.log("end")
var diff=new Date()-df
console.log(diff,"milli")


//date in whileloop
var ff=new Date()
function fmj(ms){
while((new Date()-ff)<=ms){
  //console.log("this loop work for a amount of time")
}
}
console.log("start")
fmj(6000)
console.log(new Date()-ff)
console.log("end")

console.log("start")
fmj(6000)
console.log(new Date()-ff)
console.log("end")

console.log("start")
fmj(6000)
console.log(new Date()-ff)
console.log("end")

module.exports.hello=function(){
    console.log("hi this is condition run on module")
}
module.exports.fmj()