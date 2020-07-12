~Lecture 26~
there are three things
Math.round
Math.ceil
Math.floor

Math.round => round the number to nearest integer if fraction part is 0.5 or greeter then 0.5
	      then it will round to next number like this (1.5 to 2) (1.6 to 2)
	      if fraction is less then 0.5 then number like this (1.4 to 1) (1.1 to 1)	
Math.ceil => forcefully round up like (1.5 to 2) (1.000001 to 2)
Math.floor => forcefully round down like (1.5 to 1) (1.99999 to 1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecture 27~
Random number
var randomNumber = Math.random();
above code generate a random number and number could be upto 16 digits
0.0_till_16Digits to 0.9_till_16Digits
-----------
to get random number from 1 to 6 then following program will be used
var randomNumber = Math.floor((Math.random() * 6) + 1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecture 28-29~
string to int and decimal conversion

var profit = "200" - "150"; => 50
var profit = "200" - 150; => 50
var profit = 100 - "150"; => -50

var profit = 100 + "150"; => "100150"
var profit = "100" + "150"; => "100150"
var profit = "100" + 100; => "100100"

var profit = "10" * "10" => 100
var profit = 10 * "10" => 100
var profit = "10" * 10 => 100

var profit = "10" / "2" => 5
var profit = 10 / "2" => 5
var profit = "10" / 2 => 5


javaScript can do calculation with string numbers 
only (+) plus operation will not perform because it concatinate the value

parseInt is use to convert string digit to number
parseFloat is use to convert string digit to floating number
or we can use Number to convert either int or float
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecture 30~
var number = 1.2668
var newNumber = number.toFixed(2)
newNumber will be 1.27
=> round the number design number of digit after point
=> if we does not supply parameter then it will finish number after point
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecrure 31-32~
Date

var rightNow = new Date();
above will extract all information related to date time and time zone
but this is not string string methods will not work like chartAt etc
we can extract individual part like this

var day = rightNow.getDay();
but above code will return number
sunday start from 0 and then end with saturday 6
var dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
document.write(dayName[day])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecrure 35-36-37-38

functions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecrure 39-40

switch
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Lecrure 41-42

while do while
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~Objects~

we can also create new properties to object like this

var person = {
	name:"abc",
	height:"123"     
}

person.color : "red";

we can also delete a property in object

delete person.color;

we can also check either specific property exist in object

var propertyExist = "weight" in person;

we can also define constructor even without specifying object
like this

function Person(name, age, height){
	this.name = name;
	this.age = age;
	this.height = height;
}

var javed = new Person('javed','24','5');

prototypes in object
aik method hai jo teno method me same ha to constructor method k zarye nahi bnaenge keonke wo
teen bar copy horaha hai 
is se acha ham ka iska prototype bna lenge then wo ham bad me use karsakte hai
like this

Person.prototype.walk = function(){
	document.write(run())
}

iske elawa ham prototype me function k elawa properties bhi use karsakte hai
Person.prototype.isAlive = 'yes';   
