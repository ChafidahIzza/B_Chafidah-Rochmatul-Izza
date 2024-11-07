// Contoh 1: If-else control flow
function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is a positive number.");
  } else if (num < 0) {
    console.log(num + " is a negative number.");
  } else {
    console.log(num + " is zero.");
  }
}

// Contoh 2: For loop control flow
function printNumbers(limit) {
  console.log("Printing numbers from 1 to " + limit + ":");
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

// Contoh 3: Switch control flow
function getDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }
}

// Panggil fungsi-fungsi untuk menampilkan hasil di console
console.log("Checking numbers:");
checkNumber(5); // 5 is a positive number
checkNumber(-2); // -2 is a negative number
checkNumber(0); // 0 is zero

console.log("\nLooping through numbers:");
printNumbers(5); // Prints numbers from 1 to 5

console.log("\nSwitch case example:");
getDay(3); // Wednesday
getDay(7); // Sunday
getDay(9); // Invalid day number
