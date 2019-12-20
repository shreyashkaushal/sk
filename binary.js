const readline = require('readline-sync')
let input = readline.question('Enter the decimal value ')
// console.log(input)
// const result = parseInt(input, 10).toString(2);
// console.log(result);
let result = []
function toBinary(input) {
  let binary = []
  let i = 0;
  while (input > 0) {
    binary[i++] = input % 2
    input = Math.floor(input / 2)


  }
  //console.log(binary)
  return binary.reverse();

}

let newInput = toBinary(input);
function swapNibble(newInput) {
  return ((newInput & 0x0f) << 4 | (newInput & 0xf0) >> 4)

}
console.log(swapNibble(input))
//  if(newInput.length>4){
//    let sub1 = []
//    let sub2 = [0]
//    mid = Math.round(newInput.length/2);

//    for(let i = 0; i<mid;i++)
//    {
//        sub1.push(newInput[i])
//    }
//    console.log(sub1)
//    for(i=mid;i<newInput.length;i++)
//    {
//        sub2.push(newInput[i])
//    }
//    console.log(sub2);
//     result = sub2.concat(sub1)
//    console.log(result);

// }

// function toDecimal(result){
//     let out = [];
//     let j = 0;
//     for(let i = result.length; i>0 ; i--)
//     {
//         let temp = result[i]*(2**j)
//         out.push(temp)
//         j++;
//     }
//     console.log(toDecimal(out))

// }
// toDecimal(result)