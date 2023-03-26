// create function that logs numbers from 1-100
// if that number is divsibe by 3 log fizz
// else if that number is divisble by 5 log buzz
// else if that number is divisble by 3 and 5 log fizz buzz
// else log number

function fizzBuzz() {
  for (let i = 1; i <= 100; i++){
    // if i is divisible by 3, i modulus 3 === 0 and check 5
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }
  }

}

fizzBuzz()