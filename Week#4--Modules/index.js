var myAge = 23;
if(myAGe <= 18 || myAge > 30 || myAge === 27){
    document.write('You must stay ho,e')
    }   else {
    document.write('you need to got to the concert');
    };

/////


////
// module 14
var personAge = 5;

while(personAge < 10){
    console.log('You are less than 10');
    console.log(personAge)
    personAge++;
}
document.write('You are over 10');
//////////


for(var personAge = 5; personAge < 10; personAge++){
    console.log('You are less than 10');
}
//  document.write('Now you are over 10');

var links = document.getElementsByTagName('a');
for (let i = 1; i < links.length; i++){
    console.log('this is link number');
}
document.write('All links have been looped');


/////////////
// module 15
/////////////

for (var i = 0; i < 10; i++){
    // loop body
 if(i === 5 || i === 3){
     
 }  
    console.log(i);
    
        if(i === 7){
            console.log('the loop is broken')
            break;
        }
};


/////////////
// module 17
////////////////////


var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
    links[i].className = 'Link-'
}
//////////////
/////////////

////////////////
// module 18 //
////////////////

function averageNum(a,b){
    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var avgResult = averageNum(10, 20);

console.log('the average is ' + avgResult + "inside logResult Function")
/////////////////////////////////////
//  module 19 //
////////////////////////////////////

var GlobalVar = 5;

function someFunction(){
    var localVar = 10;
}
////////////////////
////////////////////
// module 20 //
////////////////////

// floor rounds down

var a = '5';
var b = 5;

console.log(a+b)
console.log(typeof(a+b))

console.log(Math.round(7.5));
console.log(Math.floor(7.9));
console.log(Math.ceil(7.1));
console.log(Math).max(10, 240, 20, 70);
console.log(Math.PI)
////////////////////////////////////////////
//////////////////////////
// module 21 //
///////////////////////////

var a = "7";
var b = 5;

console.log(a * b);
console.log(typeof (a * b));

if (!isNaN(a)) {
    ('the meaning of life is')
    
} else {
    console.log('thiz is not a number + (a * b)){


////////////////////////
////////////////////////



var newString = "this is a string";





    console.log(newString.length);
    console.log(newString.toUpperCase);
    console.log(newString.toLowerCase);
    console.log(newString.indexOf('string'));
    console.log(newString.indexOf('sing');)
    
    
    if (newString.indexOf('missing')) === -1{
        console.log('this word is not found');
    } else {
        console.log('the word starts at the posistion ' + newString.indexOf('super'));
    }
  
  
    /////////////////
    // module 21 //
    /////////////////

    var str = "hello, world";
    
    var str2 = str.slice(2, 9);
    var str3 = str.slice(2);
    
    
    var hashtag = "fun, sad, mad, happy, upset, angry"

    var tagsArray = hashtag.split(',');
    ///////////////////////////////////////////
    // module 24
    ///////////////////////////////////////////




    var exampleArr = {};
    exampleArr[0] = 9;
    
    var arrTwo = [10, true, 'string', null, undefined]
    
    //////////////////////////////////////////////
    //  Module 25 //
    //////////////////////////////////////////////////


    var someString = new String(): // decleration
        someString = 'the word';
        
    var string2 = 'second string';

    someString.toLowerCase())
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Module 26
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var littleCar = new Object();
    
    littleCar.maxSpeed = 50;
    littleCar.driver = "Mater";
    littleCar.wheels = 'Big Wheel';
    console.lg(littleCar.driver)
    
    littleCar.drive = function () {
        console.log('car is on motion pictures');
    }
    littleCar.drive();
    
    var littleCar2 = {
        littleCar.maxSpeed = 50;
        littleCar.driver = "Tuh-Mater";
        driver: 'Name',
        drive: function(speed,time){
            console.log(speed * time);
        }
    }
}
console.log(littleCar2.maxSpeed)
littleCar2.drive(50, 3)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// module 27///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(this);
var littleCar2 = {
    maxSpeed: 50,
    driver: "Mario",
    drive: function (speed, time) {
        // console.log(speed * time);
    },
    logDriver: function () {
        console.log(speed * time);
        littleCar2.test();
        console.log()
        littleCar2.drive(50, 3);
        
///////////////////////////////
// module 28 //////////////////
///////////////////////////////

        var Car = function (maxSpeed, driver) {
            this.maxSpeed = maxSpeed;
            this.driver = driver;
            this.drive = function (speed, time) {
                console.log(speed * time);
            };
            this.logDriver = function () {
                console.log("driver name is " + this.driver);
                
var littleCar = new Car
                var myCar = new Car(60, "John Wick")
                var myCar2 = new Car(60, "Jojo")
                var myCar3 = new Car(60, "Kanye")
                var myCar4 = new Car(60, "Home")
 
 /////////////////////////////////////////// /////////////////////
 
 
                var todayDate = new Date();