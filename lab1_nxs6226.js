//Nabin Shrestha 1001746226 10/16/2020

//QN1
//creating an array of number between 1 and 10
var inputtable=  [ 1, 2 , 3 ,4 , 5 , 6 , 7, 8 , 9, 10]; 
console.log("inputtable: " + inputtable);


//QN2a
//using array map funtion and returning a new array named fivetable which contain elements multiplied by 5
var fivetable =inputtable.map(v => v * 5);
console.log("fivetable: "+ fivetable);


//QN2b
//using array map function and returning a new array named thirteentable which contain elements multiplied by 13 
var thirteenTable = inputtable.map(v => v * 13);
console.log("thirteenTable: "+ thirteenTable);


//QN2c
//using array map funtion and returning a new array named squarestable which contain squared elements.
var squaresTable = inputtable.map(v => v * v);
console.log("squaresTable: " + squaresTable);


//QN3
//creating an array of number between 1 and 20 named after inputtable
//creating an array of odd elements
//using array map function and returning a new array named fivemultiple which contain elements multiplied by 5
//using filter function to return a new array named oddmultiple which contain elements of odd multiples of 5
inputtable = [1, 2 , 3 ,4 , 5 , 6 , 7, 8 , 9, 10,11,12,13,14,15,16,17,18,19,20];
var isOdd = x => x % 2 !== 0;
var fivemultiple =inputtable.map(v => v * 5);
var oddmultiple = fivemultiple.filter(isOdd);
console.log("oddmultiple : "+ oddmultiple);

//QN4
//creating an array of even elements 
//using array map function to return a new array named sevenmultiple which contain elements multiplied by 7
//using filter function to return an array named evenmultiple which contain elements of even multuples of 7 and are less than 100
//using reduce function to return an array named sum7Even which contains the sum of even multiples of 7.
var add = (x, y) => x + y;
var isEven = x => x % 2 == 0;
var sevenmultiple =inputtable.map(v => v * 7);
var evenmultiple = sevenmultiple.filter(isEven).filter(v => v < 100);
var sum7Even = evenmultiple.reduce(add, 0);
console.log("sum7Even : "+ sum7Even);


//QN5
//using curried function to rewrite the given function named after volume that takes one parameter now ie. radius and then another one later ie. height
//passing the value of r and h in the function named volume to return a new array named result.
var volume= r=>h=>(3.14*r*r*h);
var result = volume(5) (10);
console.log("volume : " + result);

//QN 6
makeTag = function(beginTag, endTag)
{
    return function(textcontent)
    {
        return beginTag +textcontent +endTag;
    }
}
var table1 = makeTag(' <th>', '</th>\n')('Jill');
var table2 = makeTag(' <th>', '</th>\n')('Smith');
var table3 = makeTag(' <th>', '</th>\n')('50');
var Ftable = makeTag('<tr>\n','</tr>\n')(table1+table2+table3);
console.log(Ftable);
    