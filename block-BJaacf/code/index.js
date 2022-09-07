// 1. Create an array named numbers and store 5 number values in it
let arry = [1, 2, 3, 4, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()
function sumOfArray (num) {
    let sum = 0;
    for(let number of num) {
        sum += number;
    }
    console.log(sum)
    return sum
}
sumOfArray(arry);

// 3. Calculate the average of array items and print it to the console using console.log()
function sumOfArray (num) {
    let sum = 0;
    let avg = 0;
    for(let number of num) {
        sum += number;
    }
   avg = sum / arry.length;
   console.log(avg);
   return avg;
}


sumOfArray(arry);

// 4. Find the highest number in the array and print it to the console using console.log()
function highestNumber () {

    var highestNum = 0;
    for(let num of arry){
        if(num > highestNum) {
            highestNum = num;
        }
    }
    console.log(`Highest number ${highestNum}`);
}
highestNumber ();


// 5. Find the lowest number in the array and print it to the console using console.log()
function lowestNumber () {
    var lowestNum = Number.MAX_VALUE;
    for(let lowest of arry) {
        if(lowest < lowestNum) {
            lowestNum = lowest;
        }
        console.log(`lowest number ${lowestNum}`);
    }
}
lowestNumber ();


// 6. Find the even numbers in the array and print them to the console using console.log()
    var evenNum = [];
    for(let evenNumber of arry) {
      if(evenNumber % 2 === 0) {
        evenNum.push(evenNumber)
      }
        }
        console.log(`Even number ${evenNum}`);
    


// 7. Find the odd numbers in the array and print them to the console using console.log()
var oddNum = [];
for(let oddNumber of arry) {
  if(oddNumber % 2 !== 0) {
    oddNum.push(oddNumber)
  }
    }
    console.log(`odd number ${oddNum}`);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
var favNum = [];
for(let favNumber of arry) {
  if(favNumber % 5 === 0) {
    favNum.push(favNumber)
  }
    }
    console.log(`divisibilty by 5 number ${favNum}`);

// 9. Log all the element of the array one by one

// 10. Find all the number in the array that is divisible by 3
var tempNum = [];
for(let tempNumber of arry) {
  if(tempNumber % 3 === 0) {
    tempNum.push(tempNumber)
  }
    }
    console.log(`divisibilty by 3 number ${tempNum}`);