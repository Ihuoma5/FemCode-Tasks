// Create a function that accepts a parameter  "n"

// The function should print out a multiplication table for n only If n is a multiple of 3, 5 or 7

// multiplication table range is 1- 20

// Example :

// functionname(3) should return
// 3*1=3
// 3*2 =6
// 3*3 =9
// .
// .
// .
// 3*20 = 60

// Since 3 is a multiple of 3

function multiplication(n) {
  
for (let i = 1; i <= 20; i++) {
    if(n % 3 === 0 ||n % 5 === 0||n % 7 === 0) {
        result = i * n;
        console.log(`${n} * ${i} = ${result}`);
      }else {
        console.log("Not applicable")
      }
   
    }
}

multiplication(7)

