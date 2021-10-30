//Given a roman numeral, convert it to an integer.
var romanToInt = function(s) {
   let rArr = s.split("")
   let intArr = [];
   rArr.forEach(x => {
   switch(x) {
    case "I":
        intArr.push(1);
        break;
    case "V":
        intArr.push(5);
        break;
    case "X":
        intArr.push(10)
        break;
    case "L":
        intArr.push(50);
        break;
    case "C":
        intArr.push(100);
        break;
    case "D":
        intArr.push(500);
        break;
    case "M":
        intArr.push(1000)
        break;

}
})
 intArr.forEach(x => {
    let i = intArr.indexOf(x) 
    let j = i + 1;

    if (intArr[j] === 1000 && intArr[i] === 100) {
        intArr[i] = -100;
    } else if (intArr[j] === 500 && intArr[i] === 100) {
        intArr[i] = -100;
    } else if (intArr[j] === 100 && intArr[i] === 10) {
        intArr[i] = -10;
    } else if (intArr[j] === 50 && intArr[i] === 10) {
        intArr[i] = -10
    } else if (intArr[j] === 10 && intArr[i] === 1) {
        intArr[i] = -1
    } else if (intArr[j] === 5 && intArr[i] === 1) {
        intArr[i] = -1;
    }
})

let intVal = intArr.reduce( (prev,curr) => 
    prev + curr, 0)
return intVal
};
/*
switch(x) {
    case intArr[intArr.indexOf(10) + 1] === 50:
        intArr[intArr.indexOf(10)] = -10;
        break;

}





/*
"I" = 1
"IV" = 4
"V" = 5
"VI" = 9
"X" = 10
"XL" = 40
"L" = 50
"XC" = 90
"C" = 100
"CD" = 400
"D" = 500
"CM" = 900
"M" = 1000

if indexOf "I" < indexOf "V", then 
I = 1 and V = 5, unless indexOf I < indexOf V
if index of I + 1 = V, then 4

switch(rArr) {
    case rArr[arr.indexOf("I") + 1] === "V":
        intArr.push(4)
}
*/
/*
switch(rArr) {
    case "I":
        intArr.push(1);
        break;
    case "V":
        intArr.push(5);
        break;
    case "X":
        intArr.push(10)
        break;
    case "L":
        intArr.push(50);
        break;
    case "C":
        intArr.push(100);
        break;
    case "D":
        intArr.push(500);
        break;
    case "M":
        intArr.push(1000)

}
*/
/*
switch(x) {
    case intArr[j] === 50 && intArr[i] === 10:
          intArr[i] = -10;
          break;
    case intArr[j] === 100 && intArr[i] === 10:
         intArr[i] = -10;
         break;
     case intArr[j] === 500 && intArr[i] === 100:
         intArr[i] = -100;
         break;
     case intArr[j] === 1000 && intArr[i] === 100:
         intArr[i] = -10;
         break;

  };
  */