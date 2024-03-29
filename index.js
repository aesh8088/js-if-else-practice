/* 1. Check if a number is odd or even in JavaScript */

/* function isoddeven(num){
    if(num % 2 === 0){
        console.log(`${num} is even number`)
    } else {
        console.log(`${num} is odd number`)
    }
}

isoddeven(18) // even
isoddeven(7) // odd
isoddeven(15) // odd
isoddeven(22) // even */




/* 2. Check if input variable is a number or not */

/* function isvalid(num) {
    if (isNaN (num)){
        console.log(`${num} is not a valid number`)
    } else{
        console.log(`${num} is a valid number`)
    }
}

isvalid(22) // valid
isvalid(12.56) // valid
isvalid("xyz") // not valid
isvalid("wey") // not valid
isvalid(101) // valid  */



/* 3. Find the largest of two number */

/* function islarger(num1, num2){
    if (num1 > num2){
        console.log(`${num1} is greater than ${num2}`)
    } else if (num2 > num1){
        console.log(`${num2} is greater than ${num1}`)
    } else{
        console.log(`${num1} is equal to ${num2}`)
    }
}

islarger(2,4) //4
islarger(12,12) // equal
islarger(12.5,12.7) //12.7
islarger(55,101) //101
islarger(12,5) //12  */


/* 5. Check if a triangle is equilateral, scalene, or isosceles */

/* function islarger(side1, side2, side3){
    if( (side1 == side2) && (side1 == side3) ) {
       console.log(`The triangle is Equivalent triangle.`)
    } else if( (side1 == side2) || (side1 == side3) || (side2 == side3)){
        console.log(`The triangle is Isosceles triangle.`)
    } else{
        console.log(`The triangle is scalene triangle.`)
    }
}

islarger(2,2,5) // Isosceles
islarger(14,14,14) // Equivalent
islarger(12,76,34) // Scalene  */  


/* 6. Find the a number is present in given range */ 

 /* function inRange(num, start, end){
    if ( (num >= start) && (num <= end)) {
        console.log(`The ${num} is in between the range of ${start} and ${end}`)
} else{
    console.log(`The ${num} is outside the range of ${start} and ${end}`)
}

}

inRange(12,8,34) // range
inRange(100,500,300) // outside
inRange(60,40,70) // range
inRange(5,8,12) // outside  */


/* 7. Perform arithmetic operations on two numbers */

/* function arithmetic(num1, num2, op){
    if (op === "add"){
        console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)
    } else if(op === "subtract"){
        console.log(`The subtract of ${num1} and ${num2} is ${num1 - num2}`)
    } else if (op === multiply){
        console.log(`The multiplication of ${num1} and ${num2} is ${num1*num2}`)
    } else if (op === divide){
        console.log(`The division of ${num1} and ${num2} is ${num1/num2}`)
    } else{
        console.log(`${op} is an invalid operation`)
    }
}

arithmetic(2,5, "add")        // 7
arithmetic(10,3, "subtract")  // 7
arithmetic(2,5,"multiply")    // 10
arithmetic(10,5,"divide")     // 2
arithmetic(10,4, "square")    // invalid    */


/* 8. Find the grade for input marks */

 /* function grade(name, marks) {
    if ((marks >= 90) && (marks <= 100)){
        console.log(`${name} got A Grade.`)
    } else if ((marks >= 80) && (marks < 90)){
        console.log(`${name} got B Grade.`)
    } else if ((marks >= 70) && (marks < 80)){
        console.log(`${name} got C Grade.`)
    } else if ((marks >= 60) && (marks < 70)){
        console.log(`${name} got D Grade.`)
    } else if ((marks >= 50) && (marks < 60)){
        console.log(`${name} got E Grade.`)
    } else{
        console.log(`${name} is failed.`)
    }
    }

    grade("John", 92)  //A
    grade("Priya", 34) //F
    grade("Raj", 65)   //D    */

   

    /* 9. Find check if a year is leap year or not */


    /* function checkLeapYear(year) {

        if(((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
          console.log(`Year ${year} is a leap year`);
        }
        else{
          console.log(`Year ${year} is not a leap year`);
          }
       }
      
      checkLeapYear(2012) //"Year 2012 is a leap year"
      checkLeapYear(1900) //"Year 1900 is not a leap year"
      checkLeapYear(2000) //"Year 2000 is a leap year"
      checkLeapYear(2011) //"Year 2011 is not a leap year"  */






